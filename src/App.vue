<template>
    <div id="app">
        <div class="home">
            <naveg msg="Welcome to Your Vue.js App"/>
            <div class="content">
                <top @publicTop="getHeight"></top>
                <collapse></collapse>
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
  import collapse from "./components/publicTopCollapse";

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
          height: "calc(100vh - 180px)"
        }
      },
      created(){
        // this.fetchCustomers()
      },
      methods:{
        fetchCustomers(){
          this.axios.get("https://free-api.heweather.net/s6/weather/lifestyle?location=历下&key=78b3781ea10742e99d737f4bfdba35d4")
            .then(function(res){
              console.log(res)
            })
        },
        getHeight(res){
          console.log(res);
          this.height = res
        }
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
        .content {
            width: 50%;
            flex: 1;
            .scroll{
                background: #f5f5f5;
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
</style>
