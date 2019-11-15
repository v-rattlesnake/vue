<template>
    <li>
        <div class="listIcon" :style="{left:leftI}"><slot name="listIcon"></slot></div>
        <span><slot name="listNameBlock">默认名称</slot></span>
        <span class="dis" v-show="!tang"><slot name="listNameBlock">默认名称</slot></span>
        <div class="listColl"><slot name="listColl"></slot></div>
    </li>
</template>

<script>
  export default {
    name: "navList",
    computed: {
      tang() {
        return this.$parent.$parent.tang;
      },
      leftI() {
        return this.$parent.$parent.leftI;
      }
    }
  };
</script>

<style scoped lang="less">
    li {
        border-left: 2px solid transparent;
        cursor: pointer;
        padding-left: 70px;
        position: absolute;
        color: #FFFFFF;
        width: 230px;
        height: 45px;
        left: 0;
        &:hover {
            background: #bcbcbc;
            border-left-color: #fff;
            &::after {
                content: "";
                display: inline-block;
                width: 6px;
                height: 16px;
                border: 8px solid transparent;
                border-left: 6px solid #fff;
                position: absolute;
                left: 0;
                top: 14px;
            }
        }
        .listIcon {
            width: 20px;
            height: 20px;
            position: absolute;
            top: 14px;
            left: 30px;
            overflow: hidden;
        }
        &:nth-of-type(3) i {
            background-position: -20px 0;
        }
        &:hover .dis {
            transform: translate(128px);
            opacity: 1;
        }
        .listColl{
            height: 100%;
            width: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 10px;
            top: 0;
        }
    }

    .dis {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 100px;
        padding: 0 10px;
        border-radius: 0 3px 3px 0;
        background: #000;
        transition-duration: .3s;
        z-index: 9;
    }
</style>