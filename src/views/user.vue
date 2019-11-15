<template>
    <div class="user">
        <btns>
            <template v-slot:add="add">添加用户</template>
            <template v-slot:danger="danger">删除用户</template>
        </btns>
        <div></div>
    </div>
</template>

<script>
    import btns from "../components/btn"
  export default {
    name: "user",
    components:{
      btns
    }
  };
</script>

<style scoped lang="less">
    .user{
        background: #f5f5f5;
        padding: 0 1rem;
    }
</style>