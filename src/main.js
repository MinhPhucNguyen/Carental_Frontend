import "./assets/styles/globalstyles.scss";
import "../public/admin/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "../public/admin/vendor/jquery/jquery.min.js";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/store";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import jquery from "jquery";
window.$ = window.jQuery = jquery;

library.add(fas);

require("@/store/subscriber");
axios.defaults.baseURL = "http://127.0.0.1:8000/api";

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
   const app = createApp(App);
   app.use(router);
   app.use(store);
   app.component("font-awesome-icon", FontAwesomeIcon);
   app.mount("#app"); //mount() vào #app
});
