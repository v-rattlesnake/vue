import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "总览",
    url: "/home",
    tang: true
  },
  mutations: {
    increment (state,bl) {
      // 变更状态
      state.tang = bl
    }
  },
  actions: {}
});
