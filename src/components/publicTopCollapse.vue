<template>
    <ul id="publicTop" class="d-md-none md_log collapse">
        <li>asdfasfa</li>
        <li>asdfasdf</li>
        <li>fasdasdf</li>
        <li>
            <img src="" alt="">
            <div></div>
        </li>
    </ul>
</template>

<script>
  export default {
    name: "publicTopCollapse"
  };
</script>

<style scoped lang="less">
ul{
    background: rgba(0,0,0,.4);
    li{
        line-height: 40px;
        height: 40px;
        color: #FFFFFF;
        padding-left: 20px;
        box-sizing: border-box;
        &:last-of-type{
            img{
                width: 40px;
                height: 40px;
                background: #000;
            }
        }
    }
}
</style>