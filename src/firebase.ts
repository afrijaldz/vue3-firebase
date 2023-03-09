import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyCPy2WE3fhtgbSP-8IX3RGwRmx9dl0aReg",
  authDomain: "moto-service-10898.firebaseapp.com",
  databaseURL: "https://moto-service-10898.firebaseio.com",
  projectId: "moto-service-10898",
  storageBucket: "moto-service-10898.appspot.com",
  messagingSenderId: "1083567841530",
  appId: "1:1083567841530:web:df2ef7121aec17a7c0e943",
};

export const firebaseApp = initializeApp(firebaseConfig);
