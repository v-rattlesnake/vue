import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import QQmusic from "./views/QQmusic";

Vue.use(Router);

const routes = [
  {
    path: "",
    redirect: '/Home'
  },{
    path: "/Home",
    name: "Home",
    component: Home
  },{
    path:"/QQmusic",
    name:"QQmusic",
    component: QQmusic
  }
]

export default new Router({
  routes,
  mode:"history",
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
