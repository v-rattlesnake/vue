<template>
    <div class="nav" :style="{'margin-left':left+'px'}">
        <div class="log">
            <nav-log></nav-log>
            <div ref="log" @click="log" :tang="tang"><span></span></div>
        </div>
        <div class="input">
            <i :style="tang?'left:18px;':'left:190px;'" :class="dark" @click="input"></i>
            <input ref="input" type="text" placeholder="搜索菜单···"
                   @blur.prevent="inputBlur"
                   :style="{transform: 'translate('+translate+'px)',background:back,color:color}">
        </div>
        <div :style="{'margin-top':top + 'px'}" :class="{menu:true,popup:!tang}">
            <nav-lists>
                <template v-slot:listTitle="listTitle">作品列表</template>
                <template v-slot:lists="lists">
                    <a @click="collapse" data-toggle="collapse" aria-expanded="false" data-target="#collapseExample1">
                        <nav-list>
                            <template v-slot:listIcon="listIcon"><i class="icon music"></i></template>
                            <template v-slot:listNameBlock="listNameBlock">QQmusic</template>
                            <template v-slot:listColl="listColl"><i :class="['collapse_icon' ,(collapse_?'':'collapse_iconPitch')]"></i></template>
                        </nav-list>
                    </a>
                    <div class="coll collapse" id="collapseExample1">
                        <router-link to="/QQmusic" active-class>
                            <nav-list>
                                <template v-slot:listIcon="listIcon"><i class="icon music"></i></template>
                                <template v-slot:listNameBlock="listNameBlock">管理</template>
                            </nav-list>
                        </router-link>
                        <router-link to="/uploading" active-class>
                            <nav-list>
                                <template v-slot:listIcon="listIcon"><i class="icon music"></i></template>
                                <template v-slot:listNameBlock="listNameBlock">上传</template>
                            </nav-list>
                        </router-link>
                    </div>
                    <router-link to="/weixin" active-class>
                        <nav-list>
                            <template v-slot:listIcon="listIcon"><i class="icon weixin"></i></template>
                            <template v-slot:listNameBlock="listNameBlock">微信小程序</template>
                        </nav-list>
                    </router-link>
                </template>
            </nav-lists>
        </div>
        <div :style="{'margin-top':top + 'px'}" :class="{menu:true,popup:!tang}">
            <nav-lists>
                <template v-slot:listTitle="listTitle">用户</template>
                <template v-slot:lists="lists">
                    <a @click="collapse_1 = !collapse_1" data-toggle="collapse" aria-expanded="false" data-target="#collapseExample2">
                        <nav-list>
                            <template v-slot:listIcon="listIcon"><i class="icon music"></i></template>
                            <template v-slot:listNameBlock="listNameBlock">用户管理</template>
                            <template v-slot:listColl="listColl"><i :class="['collapse_icon' ,(collapse_1?'':'collapse_iconPitch')]"></i></template>
                        </nav-list>
                    </a>
                    <div class="coll collapse" id="collapseExample2">
                        <router-link to="/user" active-class>
                            <nav-list>
                                <template v-slot:listIcon="listIcon"><i class="icon music"></i></template>
                                <template v-slot:listNameBlock="listNameBlock">用户权限</template>
                            </nav-list>
                        </router-link>
                    </div>
                </template>
            </nav-lists>
        </div>
    </div>
</template>

<script>
  import navLog from "./navLog";
  import navLists from "./navLists"
  import navList from "./navList"

  export default {
    name: "naveg",
    components: { navLists, navLog, navList },
    props: {
      msg: String
    },
    comments: {
      navLog,
      navLists
    },
    data() {
      return {
        left: 0,
        top: 10,
        tang: true,
        leftI: "30px",
        translate: 0,
        back: "rgba(0, 0, 0, .2)",
        color: "#fff",
        dark: "",
        collapse_:true,
        collapse_1:true,
      };
    },
    mounted(){},
    methods: {
      log() {
        console.log(this.$parent.$children[3]);
        if (this.tang) {
          this.left = -200;
          this.top = 0;
          this.tang = false;
          this.leftI = "200px";
          this.back = "rgba(0, 0, 0, .4)";
        } else {
          this.left = 0;
          this.top = 10;
          this.tang = true;
          this.leftI = "40px";
          this.back = "rgba(0, 0, 0, .2)";
        }
        setTimeout(this.$parent.$children[3].size,301)
      },
      input() {
        if (!this.tang) {
          this.translate = 162;
          this.back = "#fff";
          this.color = "#000";
          this.$refs.input.focus();
          this.dark = "dark";
        } else {
          this.translate = 0;
          this.back = "rgba(0, 0, 0, .4)";
          this.color = "#fff";
          this.dark = "";
        }
      },
      inputBlur() {
        if (!this.tang) {
          console.log(1);
          this.translate = 0;
          this.back = "rgba(0, 0, 0, .4)";
          this.color = "#fff";
          this.dark = "";
        }
      },
      collapse(){
        this.collapse_ = !this.collapse_
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .nav {
        transition-duration: .3s;
        width: 250px;
        min-width: 250px;
        background: rgba(0, 0, 0, .2);
        padding: 25px 10px 0 10px;
        box-sizing: border-box;
        display: block;
        .log {
            width: 100%;
            display: flex;
            justify-content: space-between;
            span {
                display: inline-block;
            }
            div {
                width: 30px;
                height: 30px;
                box-sizing: border-box;
                background: rgba(0, 0, 0, .2);
                text-align: center;
                cursor: pointer;
                font-size: 0;
                span {
                    line-height: 30px;
                    font-size: .14rem;
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
                width: 40px;
                height: 38px;
                position: absolute;
                background: url("./../../assets/search-white.png") no-repeat center;
                top: 13px;
                z-index: 99
            }
            input {
                font-size: .12rem;
                width: 100%;
                border-radius: 3px;
                line-height: 38px;
                border: 0;
                position: relative;
                outline: none;
                z-index: 10;
                padding-left: 70px;
                margin-top: 13px;
                transition-duration: .3s;
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
        .menu {
            width: 100%;
            border-radius: 3px;
            background: rgba(0, 0, 0, .2);
            color: #FFF;
            line-height: 45px;
            font-size: 13px;
            margin-top: 10px;
            .music{
                background-position: 0 0 ;
            }
            .weixin{
                background-position: -20px 0 ;
            }
            .collapse_icon{
                display: block;
                width: 20px;
                height: 20px;
                background: url("../../assets/plus.png") no-repeat center;
            }
            .collapse_iconPitch{
                background-image: url("../../assets/minus.png");
            }
            a{
                width: 100%;
                height: 45px;
                position: relative;
                vertical-align: top;
            }
            .router-link-exact-active {
                background: rgba(0,0,0,.2);
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
                li{
                    left: -2px;
                }
            }
            .coll{
                background: rgba(0,0,0,.25);
            }
        }
    }

    .dark {
        background-image: url("./../../assets/search-dark.png") !important
    }
</style>
