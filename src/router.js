import Vue from "vue";
import Router from "vue-router";
import store from "./store";
const Home = () => import("./views/Home");
const QQmusic = () => import("./views/QQmusic");
const weixin = () => import("./views/weixin");
const uploading = () => import("./views/uploading");
const user = () => import("./views/user");
const resume = () => import("./views/resume");

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/qqmusic",
    component: QQmusic
  },
  {
    path: "/weixin",
    component: weixin
  },
  {
    path: "/uploading",
    component: uploading
  },
  {
    path: "/user",
    component: user
  },
  {
    path: "/resume",
    component: resume
  }
];

const route = new Router({
  routes,
  mode: "history"
});
export default route;

route.beforeResolve((to, from, next) => {
  console.log(to.path);
  if (to.path === "/home") {
    store.commit("nameing", { name: "总览", url: "/home" });
  } else if (to.path === "/user") {
    store.commit("nameing", { name: "用户", url: "/user" });
  } else if (to.path === "/resume") {
    store.commit("nameing", { name: "个人简历", url: "/resume" });
  } else if (to.path === "/weixin") {
    store.commit("nameing", { name: "微信小程序", url: "/weixin" });
  } else if (to.path === "/qqmusic") {
    store.commit("nameing", { name: "QQ音乐", url: "/qqmusic" });
  } else if (to.path === "/uploading") {
    store.commit("nameing", { name: "上传", url: "/uploading" });
  }
  window.document.title = store.state.name;
  next();
});
// [
//     {
//       path: "/",
//       name: "Home",
//       component: Home
//     },{
//       path:"/QQmusic",
//       name:"QQmusic",
//       component: QQmusic
//     }
//     // {
//     //   path: "/about",
//     //   name: "about",
//     //   // route level code-splitting
//     //   // this generates a separate chunk (about.[hash].js) for this route
//     //   // which is lazy-loaded when the route is visited.
//     //   component: () =>
//     //     import(/* webpackChunkName: "about" */ "./views/About.vue")
// // }
// ]
