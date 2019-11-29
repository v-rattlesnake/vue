<template>
    <router-link to="/home" @click="home">
        <h1><slot name="log"></slot><span>1.0.0</span></h1>
    </router-link>
</template>

<script>
  import store from "./../../store"

  export default {
    name: "navLog",
    methods:{
      home(){
        store.state.zhuce.resize();
        store.state.users.resize()
      }
    }
  };
</script>

<style scoped lang="less">
    h1 {
        font-size: 30px;
        line-height: 30px;
        color: #fff;
        width: 150px;
        position: relative;
        z-index: 9;
        span {
            font-size: 12px;
            background: rgba(0, 0, 0, .2);
            padding: 5px;
            border-radius: 3px;
            line-height: 12px;
            vertical-align: middle;
        }
    }
</style>