<template>
    <ul id="publicTop" class="d-md-none md_log collapse">
        <li>asdfasfa</li>
        <li>asdfasdf</li>
        <li>fasdasdf</li>
        <li>
            <button class="user" @click="pullDowning" @blur.prevent="pullBlur" tabindex>
                <img src="" alt="">
                <span>不归徒</span>
                <pull-down-list :none="none" :style-z="'bottom:0;width:100%;transform:translate(0,calc(100% + 10px));'"></pull-down-list>
            </button>
            <button class="sting">
                <span>设置</span>
            </button>

        </li>
    </ul>
</template>

<script>
  import pullDownList from "./pullDownList"

  export default {
    name: "publicTopCollapse",
    components:{
      pullDownList
    },
    data(){
      return {
        none:false,
      }
    },
    methods:{
      pullDowning(){
        this.none = !this.none
      },
      pullBlur(){
        this.none = false
      }
    }
  };
</script>

<style scoped lang="less">
ul{
    background: rgba(0,0,0,.4);
    li{
        line-height: 40px;
        height: 40px;
        color: #FFFFFF;
        padding: 0 20px;
        box-sizing: border-box;
        cursor: pointer;
        &:last-of-type{
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            height: auto;
            button{
                background: transparent;
                color: #fff;
                border:0;
                display: flex;
                position: relative;
                padding: 0;
                outline: none;
                align-items: center;
                img{
                    width: 40px;
                    height: 40px;
                    background: #000;
                    display: block;
                    border-radius: 50%;
                    margin-right: 10px;
                }
                &:first-of-type span{
                    &::after{
                        content: "";
                        display: inline-block;
                        border: 4px solid transparent;
                        border-top-color: #fff;
                        margin: 0 6px;
                        position: relative;
                        top: 2px;
                    }
                }
            }
        }
    }
}
</style>