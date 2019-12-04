<template>
  <div>
    <ul>
      <li class="title" v-show="$store.state.tang">
        <span><slot name="listTitle">菜单列表</slot></span>
      </li>
      <slot name="lists"></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navLists",
  props: {},
  component: {},
  computed: {}
};
</script>

<style scoped lang="less">
li {
  border-left: 2px solid transparent;
  position: relative;
  padding: 0 0 0 40px;
  font-size: 12px;
  span {
    background: rgba(0, 0, 0, 0.2);
    display: inline-block;
    line-height: 22px;
    padding: 0 8px;
    border-radius: 11px;
  }
}

@media (min-width: 768px) {
  /*.title{*/
  /*display: block;*/
  /*}*/
}
@media (max-width: 767px) {
  .title {
    display: none;
  }
}
</style>
