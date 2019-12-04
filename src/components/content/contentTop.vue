<template>
  <div class="con_top">
    <p class="col-sm-3 col-12"><slot name="contentName">默认</slot></p>
    <div class="col-xl-6 col-sm-9 col-12" :style="{ opacity: opacity }">
      <p>
        欢迎回来，不归途！你的最后一次登陆在昨天，下午16欢迎回来，不归途！你的最后一次登陆在昨天，下午16:54
        欢迎回来，不归途！你的最后一次登陆在昨天，下午16:54
        欢迎回来，不归途！你的最后一次登陆在昨天，下午16:54 :54
      </p>
      <span @click="opacitying">×</span>
    </div>
    <p class="d-xl-block col-3"><slot name="contentNAN">虚位以待</slot></p>
  </div>
</template>

<script>
export default {
  name: "contentTop",
  data() {
    return {
      opacity: 1
    };
  },
  methods: {
    opacitying() {
      this.opacity = 0;
    }
  }
};
</script>

<style scoped lang="less">
.con_top {
  width: 100%;
  display: flex;
  justify-content: space-around;
  line-height: 5rem;
  font-size: 1.6rem;
  border-bottom: 1px solid #ddd;
  color: #9ea7b3;
  p {
    padding: 0;
    box-sizing: border-box;
    &:first-of-type {
      padding-left: 60px;
      border-right: 1px dashed #ccc;
    }
    &:last-of-type {
      display: none;
      border-left: 1px dashed #ccc;
    }
  }
  div {
    font-size: 1.2rem;
    padding: 0 10px;
    box-sizing: border-box;
    p:first-of-type {
      display: inline-block;
      vertical-align: top;
      width: 88%;
      max-width: 90%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      border: 0;
      padding: 0;
    }
    span {
      float: right;
      cursor: pointer;
      display: block;
      width: 2rem;
      text-align: center;
      font-size: 1.6rem;
    }
  }
}
@media (max-width: 575px) {
  .con_top {
    line-height: 2.5rem;
    display: block;
    div {
      padding-left: 60px;
    }
  }
}
</style>
