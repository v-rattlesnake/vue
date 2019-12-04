<template>
  <div :class="['nav', $store.state.tang ? '' : 'navMD']">
    <div class="">
      <div class="log">
        <nav-log>
          <template class="" v-slot:log="log"
            >不归途
          </template>
        </nav-log>
        <div class="d-md-block d-none" ref="log" @click="log">
          <span></span>
        </div>
      </div>
      <div :class="['input', dark]">
        <i @click="input()"></i>
        <input
          ref="input"
          type="text"
          placeholder="搜索菜单···"
          @blur.prevent="inputBlur"
          :style="[
            'transform: translate(' + translate + 'px)',
            'color:' + color,
            $store.state.tang ? '' : 'background:' + back
          ]"
        />
      </div>
      <div :class="{ scroll: $store.state.tang }">
        <div :class="{ menu: true, popup: !$store.state.tang }">
          <nav-lists>
            <template v-slot:listTitle="listTitle"
              >作品列表</template
            >
            <template v-slot:lists="lists">
              <!--<a @click="collapse">-->
              <!--<nav-list>-->
              <!--<template v-slot:listIcon="listIcon"><i class="icon music"></i></template>-->
              <!--<template v-slot:listNameBlock="listNameBlock">QQmusic</template>-->
              <!--<template v-slot:listColl="listColl">-->
              <!--<i :class="['collapse_icon',(collapse_?'':'collapse_iconPitch')]" v-if="$store.state.tang"></i>-->
              <!--</template>-->
              <!--</nav-list>-->
              <!--</a>-->
              <!--<div class="coll collapse">-->
              <!--<router-link to="/QQmusic" active-class>-->
              <!--<nav-list>-->
              <!--<template v-slot:listIcon="listIcon"><i class="icon music"></i></template>-->
              <!--<template v-slot:listNameBlock="listNameBlock">管理</template>-->
              <!--</nav-list>-->
              <!--</router-link>-->
              <!--<router-link to="/uploading" active-class>-->
              <!--<nav-list>-->
              <!--<template v-slot:listIcon="listIcon"><i class="icon music"></i></template>-->
              <!--<template v-slot:listNameBlock="listNameBlock">上传</template>-->
              <!--</nav-list>-->
              <!--</router-link>-->
              <!--</div>-->
              <animate-collapse>
                <template v-slot:title>
                  <a href="javascript:;">
                    <nav-list>
                      <template v-slot:listIcon="listIcon">
                        <i class="icon music"></i>
                      </template>
                      <template v-slot:listNameBlock="listNameBlock"
                        >QQmusic</template
                      >
                      <template v-slot:listColl="listColl">
                        <i
                          :class="[
                            'collapse_icon',
                            collapse_ ? '' : 'collapse_iconPitch'
                          ]"
                          v-if="$store.state.tang"
                        ></i>
                      </template>
                    </nav-list>
                  </a>
                </template>
                <template v-slot:animateCon="animateCon">
                  <router-link to="/QQmusic" active-class>
                    <nav-list>
                      <template v-slot:listIcon="listIcon">
                        <i class="icon music"></i>
                      </template>
                      <template v-slot:listNameBlock="listNameBlock"
                        >管理</template
                      >
                    </nav-list>
                  </router-link>
                  <router-link to="/uploading" active-class>
                    <nav-list>
                      <template v-slot:listIcon="listIcon">
                        <i class="icon music"></i>
                      </template>
                      <template v-slot:listNameBlock="listNameBlock"
                        >上传</template
                      >
                    </nav-list>
                  </router-link>
                </template>
              </animate-collapse>
              <router-link to="/weixin" active-class>
                <nav-list>
                  <template v-slot:listIcon="listIcon"
                    ><i class="icon weixin"></i
                  ></template>
                  <template v-slot:listNameBlock="listNameBlock"
                    >微信小程序</template
                  >
                </nav-list>
              </router-link>
            </template>
          </nav-lists>
        </div>
        <div :class="{ menu: true, popup: !$store.state.tang }">
          <nav-lists>
            <template v-slot:listTitle="listTitle"
              >用户</template
            >
            <template v-slot:lists="lists">
              <!--<a @click="collapse_1 = !collapse_1">-->
              <!--<nav-list>-->
              <!--<template v-slot:listIcon="listIcon"><i class="icon music"></i></template>-->
              <!--<template v-slot:listNameBlock="listNameBlock">用户管理</template>-->
              <!--<template v-slot:listColl="listColl">-->
              <!--<i :class="['collapse_icon' ,(collapse_1?'':'collapse_iconPitch')]" v-if="$store.state.tang"></i>-->
              <!--</template>-->
              <!--</nav-list>-->
              <!--</a>-->
              <!--<div class="coll">-->
              <!--<router-link to="/user" active-class>-->
              <!--<nav-list>-->
              <!--<template v-slot:listIcon="listIcon"><i class="icon music"></i></template>-->
              <!--<template v-slot:listNameBlock="listNameBlock">用户权限</template>-->
              <!--</nav-list>-->
              <!--</router-link>-->
              <!--</div>-->
              <animate-collapse>
                <template v-slot:title>
                  <a href="javascript:;">
                    <nav-list>
                      <template v-slot:listIcon="listIcon">
                        <i class="icon music"></i>
                      </template>
                      <template v-slot:listNameBlock="listNameBlock"
                        >用户管理</template
                      >
                      <template v-slot:listColl="listColl">
                        <i
                          :class="[
                            'collapse_icon',
                            collapse_1 ? '' : 'collapse_iconPitch'
                          ]"
                          v-if="$store.state.tang"
                        ></i>
                      </template>
                    </nav-list>
                  </a>
                </template>
                <template v-slot:animateCon="animateCon">
                  <router-link to="/user" active-class>
                    <nav-list>
                      <template v-slot:listIcon="listIcon"
                        ><i class="icon music"></i
                      ></template>
                      <template v-slot:listNameBlock="listNameBlock"
                        >用户权限</template
                      >
                    </nav-list>
                  </router-link>
                </template>
              </animate-collapse>
            </template>
          </nav-lists>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navLog from "./navLog";
import navLists from "./navLists";
import navList from "./navList";
import store from "../../store";
import router from "../../router";
import animateCollapse from "./../AppComponents/animateCollapse";

export default {
  name: "naveg",
  components: { navLists, navLog, navList, animateCollapse },
  props: {
    msg: String
  },
  comments: {
    navLog,
    navLists
  },
  data() {
    return {
      translate: 0,
      back: "rgba(0, 0, 0, .2)",
      color: "#fff",
      dark: "",
      collapse_: true,
      collapse_1: true
    };
  },
  mounted() {},
  methods: {
    log() {
      // console.log(this.$parent.$children[3]);
      console.log(router.app.$route.path);
      store.commit("increment", !store.state.tang);
      store.commit("sizeOnceing", !store.state.sizeOnce);
      if (router.app.$route.path === "/home") {
        setTimeout(() => {
          store.state.zhuce.resize();
          store.state.users.resize();
        }, 300);
      }
    },
    input() {
      console.log(1);
      if (!store.state.tang) {
        this.$refs.input.focus();
        this.dark = "dark";
      } else {
        this.dark = "";
      }
    },
    inputBlur() {
      if (!store.state.tang) {
        console.log(1);
        this.dark = "";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav {
  transition-duration: 0.3s;
  width: 250px;
  min-width: 250px;
  background: rgba(0, 0, 0, 0.2);
  padding: 25px 10px 0 10px;
  box-sizing: border-box;
  display: block;
  position: relative;
  .log {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
    span {
      display: inline-block;
    }
    div {
      width: 30px;
      height: 30px;
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0.2);
      text-align: center;
      cursor: pointer;
      font-size: 0;
      span {
        line-height: 30px;
        font-size: 0.14rem;
        color: #fff;
        &::after {
          content: "\2630";
        }
      }
    }
  }
  .input {
    position: relative;
    font-size: 0;
    width: 100%;
    i {
      width: 50px;
      height: 38px;
      position: absolute;
      background: url("./../../assets/search-white.png") no-repeat center;
      top: 13px;
      z-index: 99;
    }
    input {
      font-size: 0.12rem;
      width: 100%;
      border-radius: 3px;
      line-height: 38px;
      border: 0;
      position: relative;
      outline: none;
      z-index: 10;
      padding-left: 70px;
      margin-top: 13px;
      transition-duration: 0.3s;
      background: rgba(0, 0, 0, 0.2);
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #d1d1d1;
      }
      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #d1d1d1;
      }
      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #d1d1d1;
      }
      &::-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #d1d1d1;
      }
    }
  }
  .scroll {
    height: calc(100vh - 126px);
    margin-top: 10px;
  }
  .menu {
    width: 100%;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    line-height: 45px;
    font-size: 13px;
    margin-bottom: 10px;
    .weixin {
      background-position: -20px 0;
    }
    .music {
      background-position: 0 0;
    }
    .collapse_icon {
      display: block;
      width: 20px;
      height: 20px;
      background: url("../../assets/plus.png") no-repeat center;
    }
    .collapse_iconPitch {
      background-image: url("../../assets/minus.png");
    }
    a {
      width: 100%;
      height: 45px;
      position: relative;
      vertical-align: top;
    }
    .router-link-exact-active {
      background: rgba(0, 0, 0, 0.2);
      display: block;
      border-left: 2px solid #fff;
      &::after {
        content: "";
        display: inline-block;
        width: 6px;
        height: 16px;
        border: 8px solid transparent;
        border-left: 6px solid #fff;
        position: absolute;
        left: 0;
        top: 14px;
      }
      li {
        left: -2px;
      }
    }
    .coll {
      background: rgba(0, 0, 0, 0.25);
    }
  }
  .popup {
    margin: 0;
  }
  div .dark {
    i {
      background-image: url("./../../assets/search-dark.png");
    }
    input {
      background: #fff;
      color: #000;
      transform: translate(170px);
    }
  }
}
.navMD {
  margin-left: -200px;
  padding-right: 0;
  .log div {
    margin-right: 10px;
  }
  .input {
    i {
      left: 190px;
    }
    input {
      border-radius: 0;
      background: rgba(0, 0, 0, 0.4);
    }
  }
  .scroll {
    margin-top: 0;
    .menu {
      border-radius: 0;
      .listIcon {
        left: 200px;
      }
    }
  }
}

@media (max-width: 767px) {
  .nav {
    .navMD;
    .log {
      margin-left: 200px;
      transition: 500ms;
    }
  }
}
</style>
