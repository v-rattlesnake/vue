<template>
    <div class="contentBtn">
        <button class="btn btn-secondary"><slot name="add">删除</slot></button>
        <button class="btn btn-danger"><slot name="danger">删除</slot></button>
    </div>
</template>

<script>
  export default {
    name: "btn"
  };
</script>

<style scoped lang="less">
    .contentBtn{
        padding: 1rem 0;
        button{
            margin-right: 1rem;
        }
    }
</style>