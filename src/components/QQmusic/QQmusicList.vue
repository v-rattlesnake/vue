<template>
    <div class="musicList">
        <div>
            <div :class="{list_input:true,aaa:bbb}" @click="aaa"></div>
        </div>
        <div class="list_center">
            <slot name="index">序号</slot>
        </div>
        <div class="list_name">
            <slot name="name">曲名</slot>
        </div>
        <div class="list_name">
            <slot name="zuozhe">作者</slot>
        </div>
        <div class="list_center">
            <slot name="time">时间</slot>
        </div>
        <div class="list_center">
            <slot name="likes">收藏人数</slot>
        </div>
        <div class="list_name list_center">
            <slot name="play">操作</slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "QQmusicList",
    data(){
      return {
        bbb:false
      }
    },
    methods:{
      aaa(){
        this.bbb = !this.bbb;
      }
    }
  };
</script>

<style scoped lang="less">
.musicList{
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    font-size: 1.6rem;
    line-height: 3rem;
    div{
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:first-of-type{
            flex: none;
            display: flex;
            .list_input{
                min-width: 20px;
                height: 20px;
                border: 1px solid #999;
                margin: auto 0;
                flex: none;
                cursor: pointer;
            }
            .aaa{
                background: #000;
            }
        }
    }
    .list_name{
        flex: 3;
    }
    .list_center{
        text-align: center;
    }
}
</style>