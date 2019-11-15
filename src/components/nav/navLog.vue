<template>
    <router-link to="/home">
        <h1>不归途 <span>1.0.0</span></h1>
    </router-link>
</template>

<script>
  export default {
    name: "navLog"
  };
</script>

<style scoped lang="less">
    h1 {
        font-size: 30px;
        line-height: 30px;
        color: #fff;
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