<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";

const isLoggedIn = ref(false);

onMounted(() => {
  userState();
});

function userState() {
  let auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
}

const logout = () => {
  signOut(getAuth())
    .then(() => {
      router.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/feed">Feed</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link> |
    <button v-if="isLoggedIn" @click="logout">Logout</button>
  </nav>
  <router-view />
</template>
