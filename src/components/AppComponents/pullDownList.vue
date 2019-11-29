<template>
    <!--<div>-->
        <ul class="pullDownList" :style="styleZ" v-show="none">
            <li>
                <slot name="a">简历</slot>
            </li>
            <li>
                <slot name="b">退出</slot>
            </li>
            <li>
                <slot name="c">帮助</slot>
            </li>
        </ul>
    <!--</div>-->
</template>

<script>
  export default {
    name: "pullDownList",
    props: {
      styleZ: {
        type: String,
        default: "auto"
      },
      none: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {};
    }
  };
</script>

<style scoped lang="less">
    ul.pullDownList {
        position: absolute;
        background: #fff;
        border-radius: 3px;
        z-index: 9999;
        line-height: 30px;
        color: #9EA7B3;
        box-shadow: 0 0 10px rgba(0,0,0,.3);
        li {
            padding: 0 16%;
            width: 100%;
            border-bottom: 1px dashed currentColor;
            &:last-of-type {
                border: 0;
            }
        }
    }

</style>