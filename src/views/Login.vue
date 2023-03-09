<script setup lang="ts">
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");

const errMsg = ref();

const router = useRouter();

const login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully sign in");
      router.push("/feed");
    })
    .catch((err) => {
      // console.log(err);
      console.log(err.code);
      switch (err.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid Email";
          break;
        case "auth/user-not-found":
          errMsg.value = "User not found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect Password";
          break;

        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};

const signInWithGoogle = () => {};
</script>

<template>
  <h1>Sign In to an Account</h1>
  <div>
    <input type="text" placeholder="Email" v-model="email" />
  </div>
  <div>
    <input type="password" placeholder="Password" v-model="password" />
  </div>
  <p v-if="errMsg">
    {{ errMsg }}
  </p>
  <div>
    <button @click="login">Login</button>
  </div>
  <div>
    <button @click="signInWithGoogle">Sign in With Google</button>
  </div>
</template>
