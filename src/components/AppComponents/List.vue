<template>
    <div class="musicList">
        <div>
            <div :class="{list_input:true,pitch:bbb}" @click="pitch"></div>
        </div>
        <div class="list_center list-index">
            <slot name="index">序号</slot>
        </div>
        <div class="list_name">
            <slot name="name">曲名</slot>
        </div>
        <slot name="list">
            <div class="list_name d-sm-block d-none">
                <slot name="zuozhe">作者</slot>
            </div>
            <div class="list_center d-sm-block d-none">
                <slot name="time">时长</slot>
            </div>
            <div class="list_center minW">
                <slot name="likes">收藏人数</slot>
            </div>
            <div class="list_name list_center">
                <slot name="play">操作</slot>
            </div>
        </slot>
    </div>
</template>

<script>

  export default {
    name: "QQmusicList",
    components:{},
    props: {
      ccc: Boolean,
    },
    data() {
      return {
        bbb: false
      };
    },
    watch: {
      ccc(val) {
        this.bbb = !val
      }
    },
    methods: {
      pitch() {
        this.bbb = !this.bbb;
        this.$emit("bbb")
      },
    }
  };
</script>

<style scoped lang="less">
    .musicList {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        font-size: 1.6rem;
        line-height: 3rem;
        >div {
            flex: 2;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            &:first-of-type {
                flex: none;
                display: flex;
                justify-content: center;
                .list_input {
                    min-width: 20px;
                    height: 20px;
                    border: 1px solid #999;
                    margin: auto 0;
                    flex: none;
                    cursor: pointer;
                }
                .pitch {
                    background: #000;
                }
            }
        }
        .list_name {
            flex: 5;
            /*overflow: hidden;*/
        }
        .list_center {
            text-align: center;
            /*overflow: hidden;*/
        }
        .list-index{
            min-width: 32px;
        }
        .minW {
            min-width: 64px;
        }
        .list_name.list_center {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 5;
            overflow: unset;
        }
    }

    @media (max-width: 767px) {
        .musicList .list_name.list_center{
            flex: 3;
        }
    }
</style>
