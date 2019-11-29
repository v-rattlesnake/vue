<template>
    <div id="app">
        <div class="home">
            <div :class="['bg',back]" :style="{filter:'grayscale(0%) blur(2px) opacity(80%)'}"></div>
            <naveg msg="Welcome to Your Vue.js App"/>
            <div class="content">
                <top @publicTop="getHeight" ref="top"></top>
                <transition>
                    <collapse v-show="setHeight" :class="['animated', (setHeight ? 'bounceInDown':'bounceOutUp')]"></collapse>
                </transition>
                <content-t></content-t>
                <div class="scroll" :style="{height:height}">
                    <vue-scroll :ops="ops">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </vue-scroll>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import naveg from "./components/nav/nav";
  import top from "./components/top";
  import contentT from "./components/content/content";
  import collapse from "./components/AppComponents/publicTopCollapse";
  import store from "./store"
  import router from "./router";

    export default {
      name:"App",
      components:{
        naveg,
        top,
        contentT,
        collapse
      },
      data(){
        return {
          ops:{
            bar:{
              background:"rgba(0,0,0,.2)"
            }
          },
          height: "calc(100vh - 180px)",
          back:"back2",
          setHeight:false,
          setHeightOnce:true,
          setTimeout:""
        }
      },
      created(){
        this.fetchCustomers()
      },
      methods:{
        fetchCustomers(){
          this.$axios.get("https://free-api.heweather.net/s6/weather/lifestyle?location=历下&key=78b3781ea10742e99d737f4bfdba35d4")
            .then(function(res){
              console.log(res)
            })
        },
        getHeight(res){
          console.log(res);
          if (this.setHeight) {
            this.setTimeout = setTimeout(() => {
              this.height = res;
            },1040);
            this.setHeight = false;
          } else {
            clearTimeout(this.setTimeout);
            this.setHeight = true;
            this.height = res
          }
        },
        collapse(){
          setTimeout(() => {
            if (this.setHeight) {
              this.$refs.top.collapse();
              console.log(this.setHeight);
            }
          },3000)
        }
      },
      mounted(){
        this.$nextTick(function() {
          if (window.innerWidth < 768 && store.state.tang) {
            store.commit("increment",false);
            store.commit("sizeOnceing",true)
          };
          window.onresize = (e) => {
            if (e.target.innerWidth < 768 && store.state.tang){
              store.commit("increment",false);
              store.commit("sizeOnceing",true);
              this.setHeightOnce = true
            } else if (e.target.innerWidth >= 768 && !store.state.tang && store.state.sizeOnce) {
              // if (store.state.sizeOnce) ;
              store.commit("increment",true);
            }

            if (this.setHeight && this.setHeightOnce) {
              if (e.target.innerWidth >= 768){
                console.log(this.setHeight);
                this.setHeightOnce = false
                this.$refs.top.collapse();
              }
            }

            return (() => {
              if (router.app.$route.path !== "/home") return;
              setTimeout(() => {
                store.state.zhuce.resize();
                store.state.users.resize()
              },302)
            })();
          };
        })
      }
    }
</script>

<style lang="less">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    .home {
        display: flex;
        justify-content: space-between;
        position: relative;
        z-index: 9999;
        .content {
            width: 50%;
            flex: 1;
            position: relative;
            z-index: -1;
            .scroll{
                background: #f5f5f5
            }
            .dashboard{
                font-size: .14rem;
                padding-top: 20px;
                p{
                    display: inline-block;
                    line-height: .2rem;
                    padding: 0 16px;
                    color: #fff;
                    border-radius: .1rem;
                    background: #348cf1
                }
                ul{
                    display: flex;
                    padding: 0 .4rem;
                    li{
                        line-height: 20px;
                        padding: 0 10px;
                        border-radius: 4px;
                        background: #ddd;
                        margin: 10px 20px;
                        cursor: pointer;
                        &.pitch{
                            background: #348cf1;
                            color: #fff
                        }
                    }
                }
            }
        }
    }

    .bg{
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
        background: url("assets/backImg/bg9.jpg") no-repeat top center fixed;
        background-size: cover;
    }
    .back1{
        background-image: url("./assets/backImg/bg8.jpg");
    }
    .back2{
        background-image: url("./assets/backImg/bg9.jpg");
    }
    .back3{
        background-image: url("./assets/backImg/bg10.jpg");
    }
    .back4{
        background-image: url("./assets/backImg/bg11.jpg");
    }
    .back5{
        background-image: url("./assets/backImg/bg12.jpg");
    }
    .back6{
        background-image: url("./assets/backImg/bg13.jpg");
    }
    .back7{
        background-image: url("./assets/backImg/bg8.jpg");
    }
    .back8{
        background-image: url("./assets/backImg/bg13.jpg");
    }

</style>
