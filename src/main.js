import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/globalstyles.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import router from "./router/index";

createApp(App).use(router).mount("#app"); //mount() vào #app
