<template>
  <div class="container-fluid publicTop">
    <div class="row">
      <ul class="publicTop_left d-md-flex d-none">
        <li>
          <i class="icon">
            <span>99+</span>
          </i>
        </li>
        <li>
          <i class="icon">
            <span>5</span>
          </i>
        </li>
        <li>
          <i class="icon"></i>
        </li>
      </ul>
      <div class="publicTop_center col-lg-7 d-xl-block row">
        <p class="calendar">
          <i class="icon"></i>
          <span>2019&nbsp;/</span>
          <span>10&nbsp;/ </span>
          <span>24&nbsp;/ </span>
          <span>星期一</span>
        </p>
        <p class="time">
          <i class="icon"></i>
          <span>12：</span>
          <span>00：</span>
          <span>00</span>
        </p>
        <p class="weather">
          <i class="icon"></i>
          <span>历下</span>
          <span>15℃</span>
          <span>15ml/h</span>
        </p>
      </div>
      <div class="null"></div>
      <div class="publicTop_user">
        <button class="d-md-inline-flex d-none" @click="pullDowning">
          <img src="" alt="" />
          <span class="userName">不归途</span>
          <pull-down-list
            :none="none"
            :style-z="
              'bottom:0;transform:translate(0,calc(100% + 10px));width:100%;z-index:' +
                zIndex
            "
          ></pull-down-list>
        </button>
        <div class="user_bg d-md-inline-block d-none">
          <span class="" @click="bgFun">设置</span>
          <div
            class="user_bgPull"
            v-show="bgBoolean"
            :style="'z-index:' + zIndexBg"
          >
            <pull-down-list :none="bgBoolean">
              <template v-slot:extend="extend">
                <li v-for="ind in 6" :key="ind" @click="bgChange(ind)">
                  <img
                    :src="'./../assets/backImg/small-bg' + (ind + 7) + '.jpg'"
                    alt=""
                  />
                </li>
                <!--<li><img src="./../assets/backImg/small-bg11.jpg" alt=""></li>-->
              </template>
            </pull-down-list>
            <div>
              <p>灰度</p>
              <progre type="grayscale" @width="width"></progre>
              <p>高斯模糊</p>
              <progre type="blurC" @width="width"></progre>
              <p>不透明度</p>
              <progre type="opacity" @width="width"></progre>
            </div>
          </div>
        </div>
        <i class="icon"></i>
        <span @click="collapse" class="navTop d-md-none md_log"></span>
      </div>
    </div>
  </div>
</template>

<script>
import pullDownList from "./AppComponents/pullDownList";
import progre from "./AppComponents/progressBar";

export default {
  name: "top",
  components: {
    pullDownList,
    progre
  },
  props: {},
  data() {
    return {
      none: false,
      setHeight1: true,
      bgBoolean: false,
      zIndex: 3,
      zIndexBg: 3
    };
  },
  computed: {},
  methods: {
    collapse() {
      // console.log(e.target.attributes["aria-expanded"].value==="true");
      this.none = false;
      if (this.setHeight1) {
        this.$emit("publicTop", "calc(100vh - 360px)");
        this.setHeight1 = !this.setHeight1;
      } else {
        setTimeout(() => {
          this.$emit("publicTop", "calc(100vh - 180px)");
        }, 350);
        this.setHeight1 = !this.setHeight1;
      }
    },
    pullDowning() {
      this.none = !this.none;
      if (this.bgBoolean && this.none) {
        this.zIndex = this.zIndexBg + 1;
      } else if (!this.none) {
        this.zIndex = 3;
      }
    },
    bgFun() {
      this.bgBoolean = !this.bgBoolean;
      if (this.none) {
        this.zIndexBg = this.zIndex + 1;
      }
      if (!this.bgBoolean) {
        this.zIndexBg = 3;
      }
    },
    bgChange(res) {
      this.$emit("setBackground", res);
    },
    width(e) {
      this.$emit(e.type, e.width);
    }
  },
  mounted() {
    this.$nextTick(function() {});
  }
};
</script>

<style scoped lang="less">
.publicTop {
  i {
    position: relative;
    top: 10px;
  }
  height: 70px;
  background: rgba(0, 0, 0, 0.2);
  padding-top: 10px;
  color: #fff;
  position: relative;
  .publicTop_left {
    font-size: 0.12rem;
    margin-left: 20px;
    width: 150px;
    height: 54px;
    display: flex;
    justify-content: space-around;
    li {
      flex: 1;
      line-height: 54px;
      box-sizing: border-box;
      padding-top: 4px;
      span {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        right: -10px;
        top: -10px;
        text-align: center;
        line-height: 22px;
      }
      &:first-of-type i {
        background-position: -80px 0;
        cursor: pointer;
        span {
          background: #ff6417;
        }
      }
      &:nth-of-type(2) i {
        background-position: -60px 0;
        cursor: pointer;
        span {
          background: #4ac4bc;
        }
      }
      &:last-of-type i {
        background-position: -40px 0;
        cursor: pointer;
      }
    }
  }
  .publicTop_center {
    height: 44px;
    margin-top: 2px;
    border-radius: 22px;
    display: none;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
    font-size: 14px;
    line-height: 14px;
    i {
      margin-right: 4px;
      top: 13px;
    }
    &::after {
      content: "";
      flex: 9999999;
    }
    .calendar {
      float: left;
      padding-left: 15px;
      span {
        margin: 15px 0;
        display: inline-block;
        padding-left: 3px;
        &:last-of-type {
          padding-right: 15px;
          border-right: 1px solid rgba(0, 0, 0, 0.4);
          box-shadow: 1px 0 0 rgba(255, 255, 255, 0.1);
        }
      }
      i {
        background-position: -100px 0;
      }
    }
    .time {
      float: left;
      padding: 0 15px;
      i {
        background-position: -120px 0;
      }
      span {
        margin: 15px 0;
        display: inline-block;
        &:last-of-type {
          padding-right: 15px;
          border-right: 1px solid rgba(0, 0, 0, 0.4);
          box-shadow: 1px 0 0 rgba(255, 255, 255, 0.1);
        }
      }
    }
    .weather {
      float: left;
      padding: 0;
      i {
        background-position: -120px 0;
      }
      span {
        margin: 15px 0;
        display: inline-block;
        padding: 0 4px;
      }
    }
  }
  .null {
    flex: 99999;
  }
  .publicTop_user {
    display: flex;
    align-items: center;
    line-height: 4rem;
    font-size: 0.12rem;
    button {
      background: transparent;
      border: 0;
      padding: 0;
      color: #fff;
      outline: none;
      align-items: center;
      position: relative;
      cursor: pointer;
      span::after {
        content: "";
        display: inline-block;
        border: 4px solid transparent;
        border-top-color: #fff;
        margin: 0 6px;
        position: relative;
        top: 2px;
      }
      img {
        width: 45px;
        height: 45px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.8);
        background: #000000;
        display: inline-block;
        margin-right: 10px;
      }
    }
    .user_bg {
      position: relative;
      cursor: pointer;
      z-index: 3;
      span {
        padding: 0 6px;
        vertical-align: sub;
      }
      .user_bgPull {
        position: absolute;
        top: calc(100% + 7px);
        width: 150px;
        right: 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        color: #9ea7b3;
        border-radius: 5px;
        overflow: hidden;
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
    i {
      top: 0;
      margin: 0 20px 0 10px;
      background-position: -140px 14px;
      cursor: pointer;
      display: block;
      height: 45px;
    }
    .navTop {
      line-height: 30px;
      font-size: 2.2rem;
      color: #fff;
      position: relative;
      margin: 0 20px 0 0;
      cursor: pointer;
      &::after {
        content: "\2630";
      }
    }
  }
}

@media (max-width: 767px) {
  .publicTop .user i {
    top: 9px;
  }
}
</style>

<style lang="less">
.sting ul.pullDownList,
.user_bg ul.pullDownList {
  position: relative;
  flex-wrap: wrap;
  justify-content: space-around;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding-bottom: 10px;
  cursor: default;
  box-shadow: 0 0 0 transparent;
  li {
    margin: 10px 10px 0;
    border: 3px solid rgba(0, 0, 0, 0.2);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    transition: 0.5s;
    &:last-of-type {
      border: 3px solid rgba(0, 0, 0, 0.2);
    }
    &:hover {
      border-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
