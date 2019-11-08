<template>
    <div class="con_path">
        <p>
            <i class="icon"></i>
            <span> &gt;</span>
            <router-link to="/home">
                <span> 总览 </span>
            </router-link>
        </p>
    </div>
</template>

<script>
  export default {
    name: "contentPath"
  };
</script>

<style scoped lang="less">
    .con_path {
        line-height: .5rem;
        font-size: .14rem;
        background: rgba(0, 0, 0, .02);
        width: 100%;
        padding-left: 20px;
        i {
            background-position: 0 -20px;
            position: relative;
            top: 16px;
        }
        span{
            color: #9EA7B3;
        }
    }
</style>