<template>
    <div class="nav" :style="{'margin-left':left+'px'}">
        <div class="log">
            <h1>不归途 <span>1.0.0</span></h1>
            <div @click="log"><span></span></div>
        </div>
        <input type="text" placeholder="搜索菜单···">
        <div :style="{'margin-top':top + 'px'}" :class="{menu:true,popup:!tang}">
            <ul>
                <li v-show="tang">
                    <span>作品菜单</span>
                </li>
                <li>
                    <i class="icon"></i>
                    <span>QQ音乐</span>
                    <span class="dis">QQ音乐</span>
                </li>
                <li>
                    <i class="icon"></i>
                    <span>小程序</span>
                    <span class="dis">小程序</span>
                </li>
            </ul>
        </div>
        <div :style="{'margin-top':top + 'px'}" class="menu">
            <ul>
                <li v-show="tang">
                    <span>作品菜单</span>
                </li>
                <li>
                    <i class="icon"></i>
                    <span>QQ音乐</span>
                    <span class="dis">QQ音乐</span>
                </li>
                <li>
                    <i class="icon"></i>
                    <span>小程序</span>
                    <span class="dis">小程序</span>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
  export default {
    name: "naveg",
    props: {
      msg: String
    },
    data: function() {
      return {
        left: 0,
        top:10,
        tang: true
      };
    },
    methods: {
      log() {
        console.log(this.left);
        if (this.tang) {
          this.left = -200;
          this.top = 0;
          this.tang = false
        }else {
          this.left = 0;
          this.top = 10;
          this.tang = true
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .nav {
        width: 240px;
        background: rgba(0, 0, 0, .2);
        padding: 25px 0 0 10px;
        box-sizing: border-box;
        .log {
            width: 100%;
            display: flex;
            justify-content: space-between;
            span {
                display: inline-block;
            }
            h1 {
                font-size: 30px;
                line-height: 30px;
                span {
                    font-size: 12px;
                    background: rgba(0, 0, 0, .2);
                    padding: 5px;
                    border-radius: 3px;
                    line-height: 12px;
                }
            }
            div {
                width: 30px;
                height: 30px;
                box-sizing: border-box;
                background: rgba(0, 0, 0, .2);
                text-align: center;
                cursor: pointer;
                span {
                    line-height: 30px;
                    font-size: 14px;
                    color: #fff;
                    &::after {
                        content: "\2630";
                    }
                }
            }
        }
        input {
            font-size: 13px;
            width: 100%;
            background: rgba(0, 0, 0, .2) url("./../assets/search-white.png") no-repeat 30px center;
            border-radius: 3px;
            line-height: 38px;
            border: 0;
            outline: none;
            padding-left: 80px;
            margin-top: 13px;
            color: #fff;
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
        .menu {
            width: 100%;
            border-radius: 3px;
            background: rgba(0, 0, 0, .2);
            color: #FFF;
            line-height: 45px;
            font-size: 13px;
            margin-top: 10px;
            li {
                border-left: 2px solid transparent;
                cursor: pointer;
                padding-left: 80px;
                position: relative;
                &:first-of-type {
                    padding: 6px 0 0 40px;
                    font-size: 12px;
                    span {
                        background: rgba(0, 0, 0, .2);
                        display: inline-block;
                        line-height: 22px;
                        padding: 0 8px;
                        border-radius: 11px;
                    }
                }
                &:nth-of-type(n+2) {
                    &:hover {
                        background: rgba(0, 0, 0, .5);
                        border-left-color: #fff;
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
                    }
                    i {
                        position: absolute;
                        top: 13px;
                        left: 40px;
                    }
                }
                &:nth-of-type(3) i {
                    background-position: -20px 0;
                }
                &:hover .dis{
                    animation: mymove 1s;
                }
            }
            .dis{
                /*display: none;*/
                position: absolute;
                top: 0;
                left: 10px;
                padding: 0 10px;
                border-radius: 0 3px 3px 0;
                background: #000;
            }
        }
        @keyframes mymove {
            70%{
                transform: translateX(260px);
                display: block;
            }
            100%{
                transform: translateX(240px);
            }
        }
    }

</style>
