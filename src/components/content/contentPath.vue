<template>
    <div class="con_path">
        <p>
            <i class="icon"></i>
            <span> &gt;</span>
            <router-link :to="$store.state.url">
                <span>&nbsp;{{$store.state.name}} </span>
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
        line-height: 4rem;
        font-size: 1.4rem;
        background: rgba(0, 0, 0, .02);
        width: 100%;
        padding-left: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.04);
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