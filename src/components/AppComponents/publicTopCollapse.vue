<template>
  <ul class="d-md-none md_log collapse publicTop">
    <slot>
      <li>asdfasfa</li>
      <li>asdfasdf</li>
      <li>fasdasdf</li>
    </slot>
    <li>
      <button
        class="user"
        @click="pullDowning"
        @blur.prevent="pullBlur"
        tabindex
      >
        <img src="" alt="" />
        <span>不归徒</span>
        <pull-down-list
          :none="none"
          :style-z="
            'bottom:0;width:100%;transform:translate(0,calc(100% + 10px));'
          "
        ></pull-down-list>
      </button>
      <button class="sting" @click="bgFun" @blur.prevent="bgBlur">
        <span>设置</span>
        <div class="user_bgPull" v-show="bgBoolean">
          <pull-down-list :none="bgBoolean">
            <template v-slot:extend="extend">
              <li v-for="ind in 6" :key="ind" @click="bgChange(ind)">
                <img
                  :src="'./../assets/backImg/small-bg' + (ind + 7) + '.jpg'"
                  alt=""
                />
              </li>
            </template>
          </pull-down-list>
          <div>
            <p>灰度</p>
            <progre type="grayscales" @width="width"></progre>
            <p>高斯模糊</p>
            <progre type="blurCs" @width="width"></progre>
            <p>不透明度</p>
            <progre type="opacitys" @width="width"></progre>
          </div>
        </div>
      </button>
    </li>
  </ul>
</template>

<script>
import pullDownList from "./pullDownList";
import progre from "./progressBar";

export default {
  name: "publicTopCollapse",
  components: {
    pullDownList,
    progre
  },
  data() {
    return {
      none: false,
      bgBoolean: false
    };
  },
  methods: {
    pullDowning() {
      this.none = !this.none;
    },
    pullBlur() {
      this.none = false;
    },
    bgBlur() {
      this.bgBoolean = false;
    },
    bgFun() {
      this.bgBoolean = !this.bgBoolean;
    },
    bgChange(res) {
      this.$emit("setBackground", res);
    },
    width(e) {
      this.$emit(e.type, e.width);
    }
  }
};
</script>

<style scoped lang="less">
ul {
  background: rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 2;
  li {
    line-height: 40px;
    height: 40px;
    color: #ffffff;
    padding: 0 20px;
    box-sizing: border-box;
    cursor: pointer;
    &:last-of-type {
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
      height: auto;
      cursor: default;
      button {
        background: transparent;
        color: #fff;
        border: 0;
        display: flex;
        position: relative;
        padding: 0;
        outline: none;
        align-items: center;
        cursor: pointer;
        img {
          width: 40px;
          height: 40px;
          background: #000;
          display: block;
          border-radius: 50%;
          margin-right: 10px;
        }
        &:first-of-type span {
          &::after {
            content: "";
            display: inline-block;
            border: 4px solid transparent;
            border-top-color: #fff;
            margin: 0 6px;
            position: relative;
            top: 2px;
          }
        }
      }
      .sting {
        .user_bgPull {
          position: absolute;
          top: calc(100% + 10px);
          width: 150px;
          right: 0;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          color: #9ea7b3;
          border-radius: 5px;
          overflow: hidden;
          li {
            padding: 0;
            &:last-of-type {
              height: 25px;
            }
          }
          > div {
            position: relative;
            background: #fff;
            z-index: 9999;
            border-top: 1px dotted #9ea7b3;
            padding-top: 10px;
            p {
              line-height: 20px;
              padding: 0 10px;
            }
          }
        }
      }
    }
  }
}
</style>
