<script setup lang="ts">
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");

const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered");
      router.push("/feed");
    })
    .catch((err) => {
      console.log(err);
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((data) => {
      console.log("Successfully registered");
      router.push("/feed");
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<template>
  <h1>Create an Account</h1>
  <div>
    <input type="text" placeholder="Email" v-model="email" />
  </div>
  <div>
    <input type="password" placeholder="Password" v-model="password" />
  </div>
  <div>
    <button @click="register">Register</button>
  </div>
  <div>
    <button @click="signInWithGoogle">Sign in With Google</button>
  </div>
</template>
