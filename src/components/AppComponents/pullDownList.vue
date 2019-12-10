<template>
  <!--<div>-->
  <ul class="pullDownList" :style="styleZ" v-show="none">
    <slot name="extend">
      <li>
        <router-link to="/resume">
          <slot name="a">简历</slot>
        </router-link>
      </li>
      <li>
        <slot name="b">退出</slot>
      </li>
      <li>
        <slot name="c">帮助</slot>
      </li>
    </slot>
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
  color: #9ea7b3;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-bottom: 1px dashed currentColor;
    &:last-of-type {
      border: 0;
    }
    a {
      width: 100%;
    }
  }
}
</style>
