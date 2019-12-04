import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import QQmusic from "./views/QQmusic";
import weixin from "./views/weixin";
import uploading from "./views/uploading";
import user from "./views/user";

Vue.use(Router);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/Home",
    component: Home
  },
  {
    path: "/QQmusic",
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
  }
];

export default new Router({
  routes,
  mode: "history"
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
