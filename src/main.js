import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuescroll from "vuescroll";

import animate from "animate.css";

Vue.use(vuescroll, animate);

import echarts from "echarts";

import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./assets/Reset.css";

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
