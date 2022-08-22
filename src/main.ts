import { createApp } from "vue";
import "normalize.css";
import "@/assets/styles/common.less";
import router from "@/router";
import App from "@/App.vue";
import { createPinia } from "pinia"; //配置pinia
const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
