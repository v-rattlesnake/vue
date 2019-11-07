<template>
    <div class="nav" :style="{'margin-left':left+'px'}">
        <div class="log">
            <h1>不归途 <span>1.0.0</span></h1>
            <div @click="log"><span></span></div>
        </div>
        <div class="input">
            <i :style="tang?'left:18px;':'left:190px;'" :class="dark" @click="input"></i>
            <input ref="input" type="text" placeholder="搜索菜单···" @blur.prevent="inputBlur" :style="{transform: 'translate('+translate+'px)',background:back,color:color}">
        </div>
        <div :style="{'margin-top':top + 'px'}" :class="{menu:true,popup:!tang}">
            <ul>
                <li v-show="tang">
                    <span>作品菜单</span>
                </li>
                <li>
                    <i class="icon" :style="{left:leftI}"></i>
                    <span>QQ音乐</span>
                    <span class="dis" v-show="!tang">QQ音乐</span>
                </li>
                <li>
                    <i class="icon" :style="{left:leftI}"></i>
                    <span>小程序</span>
                    <span class="dis" v-show="!tang">小程序</span>
                </li>
            </ul>
        </div>
        <div :style="{'margin-top':top + 'px'}" class="menu">
            <ul>
                <li v-show="tang">
                    <span>作品菜单</span>
                </li>
                <li>
                    <i class="icon" :style="{left:leftI}"></i>
                    <span>QQ音乐</span>
                    <span class="dis" v-show="!tang">QQ音乐</span>
                </li>
                <li>
                    <i class="icon" :style="{left:leftI}"></i>
                    <span>小程序</span>
                    <span class="dis" v-show="!tang">小程序</span>
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
                tang: true,
                leftI:"30px",
                translate:0,
                back:"rgba(0, 0, 0, .2)",
                color:"#fff",
                dark:"",
            };
        },
        methods: {
            log() {
                if (this.tang) {
                    this.left = -200;
                    this.top = 0;
                    this.tang = false
                    this.leftI = "200px"
                    this.back = 'rgba(0, 0, 0, .4)'
                }else {
                    this.left = 0;
                    this.top = 10;
                    this.tang = true
                    this.leftI = "40px"
                    this.back = 'rgba(0, 0, 0, .2)'
                }
            },
            input(){
                if(!this.tang){
                    this.translate = 162
                    this.back = "#fff"
                    this.color = "#000"
                    this.$refs.input.focus()
                    this.dark = "dark"
                }else{
                    this.translate = 0
                    this.back="rgba(0, 0, 0, .4)"
                    this.color = "#fff"
                    this.dark = ""
                }
            },
            inputBlur(){
                if(!this.tang){
                    console.log(1)
                    this.translate = 0
                    this.back="rgba(0, 0, 0, .4)"
                    this.color = "#fff"
                    this.dark = ""
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .nav {
        transition-duration: .3s;
        width: 250px;
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
        .input{
            position: relative;
            font-size: 0;
            width: 100%;
            i{
                width: 40px;
                height: 38px;
                position: absolute;
                background:url("./../assets/search-white.png") no-repeat center;
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
            li {
                border-left: 2px solid transparent;
                cursor: pointer;
                padding-left:70px;
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
                        top: 14px;
                    }
                }
                &:nth-of-type(3) i {
                    background-position: -20px 0;
                }
                &:hover .dis{
                    transform: translate(78px);
                    opacity: 1;
                }
            }
            .dis{
                opacity: 0;
                position: absolute;
                top: 0;
                left: 150px;
                padding: 0 10px;
                border-radius: 0 3px 3px 0;
                background: #000;
                transition-duration: .3s;
                z-index: 9;
            }
        }
    }
    .dark{
        background-image: url("./../assets/search-dark.png")!important
    }
</style>
