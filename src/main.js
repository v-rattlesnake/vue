import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "jquery"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/Reset.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
