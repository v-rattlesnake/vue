<template>
    <div class="container-fluid content_con">
        <content-top>
            <template v-slot:contentName>总览</template>
            <template v-slot:contentNAN="contentNAN"></template>
        </content-top>
        <content-path></content-path>
    </div>
</template>

<script>
  import contentTop from "./contentTop"
  import contentPath from "./contentPath"


  export default {
    name: "cont",
    components:{
      contentTop,
      contentPath
    },
  };
</script>

<style scoped lang="less">
    .content_con{
        background: #f5f5f5;
        position: relative;
        overflow: hidden;
        padding: 0;
        &::before{
            content: "";
            display: inline-block;
            border-width: 0 42px 42px 0;
            border-style: solid;
            border-color: rgba(0,0,0,.34) #fff;
            -webkit-transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            transform: rotate(90deg);
            position: absolute;
            top: 0;
            left: 0;
            box-shadow: 0 0 0 rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.3);
        }
    }
</style>