import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/globalstyles.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import router from "./router/index";
import store from "./store/store";
import axios from "axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
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
   