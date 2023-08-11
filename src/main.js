import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/globalstyles.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import router from "./router/index";

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount("#app"); //mount() vào #app
