import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import VueAxios from "vue-axios";

window.axios = require("axios");

require("typeface-montserrat");

import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(VueAxios, axios);

// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

Vue.component("intro", {});

new Vue({
  created() {
    AOS.init();
  },

  router,
  render: h => h(App)
}).$mount("#app");
