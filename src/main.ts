import { createApp } from "vue";
import { createPinia } from "pinia";

import { firebaseApp } from "@/firebase";
import App from "@/App.vue";
import router from "@/router";

const app = createApp(App);
const pinia = createPinia();

firebaseApp;

app.use(pinia);
app.use(router);
app.mount("#app");
