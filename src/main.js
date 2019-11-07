import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "jquery"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/Reset.css";
import echarts from "echarts"

Vue.config.productionTip = false;

Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
