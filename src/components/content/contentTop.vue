<template>
    <div class="con_top">
        <p><slot name="contentName">默认</slot></p>
        <p :style="{opacity:opacity}">欢迎回来，不归途！你的最后一次登陆在昨天，下午16:54 <span @click="opacitying">×</span></p>
        <p class="col d-xl-block"><slot name="contentNAN">虚位以待</slot></p>
    </div>
</template>

<script>
  export default {
    name: "contentTop",
    data(){
      return {
        opacity:1
      }
    },
    methods:{
      opacitying(){
        this.opacity = 0
      }
    }
  };
</script>

<style scoped lang="less">
    .con_top {
        width: 100%;
        display: flex;
        justify-content: space-around;
        line-height: .6rem;
        font-size: .16rem;
        border-bottom: 1px solid #ddd;
        color: #9EA7B3;
        p {
            flex: 1;
            padding: 0 .2rem;
            box-sizing: border-box;
            &:first-of-type {
                padding-left: 1rem;
                border-right: 1px dashed #CCC;
            }
            &:nth-of-type(2) {
                flex: 3;
                font-size: .12rem;
                span {
                    float: right;
                    cursor: pointer;
                    display: block;
                    width: .4rem;
                    text-align: center;
                    font-size: .16rem;
                }
            }
            &:last-of-type {
                display: none;
                border-left: 1px dashed #CCc;
            }
        }
    }
</style>