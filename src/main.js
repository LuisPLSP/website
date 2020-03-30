import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faYoutube,
//   faInstagram,
//   faFacebookF
// } from "@fortawesome/free-brands-svg-icons";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
require("typeface-montserrat");
// library.add(faFontAwesome);
// library.add(faCoffee, faYoutube, faInstagram, faFacebookF);
import AOS from "aos";
import "aos/dist/aos.css";
// Vue.component("font-awesome-icon", FontAwesomeIcon);
// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: h => h(App)
}).$mount("#app");
