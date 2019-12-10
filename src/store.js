import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "总览",
    url: "/home",
    tang: true,
    zhuce: "",
    users: "",
    sizeOnce: false
  },
  mutations: {
    nameing(state, objcet) {
      state.name = objcet.name;
      state.url = objcet.url;
    },
    increment(state, bl) {
      // 变更状态
      state.tang = bl;
    },
    zhuceing(state, zc) {
      state.zhuce = zc;
    },
    usersing(state, user) {
      state.users = user;
    },
    sizeOnceing(state, size) {
      state.sizeOnce = size;
    }
  },
  actions: {}
});
