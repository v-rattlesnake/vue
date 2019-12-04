<template>
  <div class="qqMusic">
    <btn class-number="9" :style-list="styleList">清空</btn>
    <btn class-number="8" :style-list="styleList">删除</btn>
    <ul>
      <li>
        <music-list :ccc="ccc" @bbb="bbb">
          <template v-slot:likes="likes">
            <p class="d-sm-block d-none">收藏人数</p>
            <p class="d-sm-none d-block">详情</p>
          </template>
        </music-list>
      </li>
      <li v-for="(val, ind) in musicLists" :key="ind">
        <music-list :ccc="ccc">
          <template v-slot:index="index">{{ ind + 1 }}</template>
          <template v-slot:name="name">{{ val.a }}</template>
          <template v-slot:zuozhe="zuozhe">{{ val.b }}</template>
          <template v-slot:time="time">
            3:44
          </template>
          <template v-slot:likes="likes">
            <p class="d-sm-block d-none">{{ val.d }}</p>
            <div class="d-sm-none d-flex xiangqing">
              <p @click="xiangqing(ind)">
                <btn class-number="10">详情</btn>
              </p>
            </div>
          </template>
          <template v-slot:play="play">
            <div class="listCaozuo d-md-flex">
              <btn class-number="12" @button="playing(ind)">播放</btn>
              <btn class-number="11" @button="soldOut(ind)">下架</btn>
              <btn class-number="10" @button="deletes(ind)">删除</btn>
            </div>
            <div class="listCaozuo d-flex d-md-none">
              <p @click="caozuo(ind)">
                <btn class-number="2" :style-list="m0">操作</btn>
              </p>
              <pull-down-list
                :none="index === ind"
                :style-z="
                  'top:0;left:0;transform:translate(-100%);background:#fff;width:100%;min-width:70px'
                "
              >
                <template v-slot:a="a">
                  <btn class-number="12" @button="playing(ind)">播放</btn>
                </template>
                <template v-slot:b="b">
                  <btn class-number="11" @button="soldOut(ind)">下架</btn>
                </template>
                <template v-slot:c="c">
                  <btn class-number="10" @button="deletes(ind)">删除</btn>
                </template>
              </pull-down-list>
            </div>
          </template>
        </music-list>
        <transition>
          <p
            :class="[
              'animated xiangPage d-sm-none',
              xiangqingI === ind ? 'zoomInDown' : 'zoomOutUp'
            ]"
            v-show="xiangqingI === ind"
          >
            <span>作者：{{ val.b }}</span>
            <span>时长：3:11</span>
            <span>收藏人数：{{ val.d }}</span>
          </p>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import btn from "../components/AppComponents/btn";
import musicList from "../components/AppComponents/List";
import pullDownList from "./../components/AppComponents/pullDownList";

export default {
  name: "QQmusic",
  data() {
    return {
      musicLists: [
        { a: "阿斯顿发", b: "asdfasd", c: "dfasdfasdf", d: "999" },
        { a: "adsf", b: "a311sd", c: "46546dfasdf", d: "9" },
        { a: "ad3213sf", b: "a311sd21", c: "46546sdf", d: "98" }
      ],
      styleList: { width: "100px", "line-height": "30px" },
      m0: {
        margin: 0,
        "line-height": "24px"
      },
      ccc: true,
      index: -1,
      xiangqingI: -1
    };
  },
  components: {
    musicList,
    pullDownList,
    btn
  },
  methods: {
    bbb() {
      this.ccc = !this.ccc;
    },
    caozuo(res) {
      if (this.index === res) {
        this.index = -1;
        return;
      }
      this.index = res;
    },
    xiangqing(res) {
      if (this.xiangqingI === res) {
        this.xiangqingI = -1;
        return;
      }
      this.xiangqingI = res;
    },
    playing(e) {
      console.log("播放", e);
    },
    soldOut(e) {
      console.log("下架", e);
    },
    deletes(e) {
      console.log("删除");
      this.musicLists.splice(e, 1);
    }
  },
  mounted() {
    this.$nextTick(function() {});
  }
};
</script>

<style scoped lang="less">
.qqMusic {
  padding: 0 1rem;
  ul {
    background: rgba(0, 0, 0, 0.05);
    li {
      padding: 0 10px;
      &:nth-of-type(2n) {
        background: rgba(255, 255, 255, 0.4);
      }
      .listCaozuo {
        display: none;
        height: 100%;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        color: #ff5427;
        position: relative;
        p {
          display: contents;
        }
      }
      .xiangqing {
        height: 100%;
        align-items: center;
        justify-content: center;
        p {
          display: contents;
        }
      }
      .xiangPage {
        line-height: 30px;
        background: rgba(0, 0, 0, 0.1);
        margin: 0 -10px 0 30px;
        display: flex;
        justify-content: space-around;
        span {
          margin: 0 10px;
        }
      }
    }
  }
}
</style>

<style>
.qqMusic button {
  color: #ff5427;
  margin: 10px 20px 10px 0;
}
.listCaozuo button,
.xiangqing button {
  line-height: 24px;
  margin: 0;
  padding: 0 5%;
}

.xiangqing button {
  padding: 0 10%;
}

.listCaozuo ul button {
  padding: 0 10%;
  margin: 4px 15%;
}

.listCaozuo.d-flex::before {
  content: "";
  display: block;
  border-width: 3px;
  border-style: solid;
  border-color: transparent currentColor transparent transparent;
  position: absolute;
  transform: translateX(-17px);
}

@media (max-width: 850px) {
  .listCaozuo button {
    padding: 0 2%;
  }
}
@media (max-width: 767px) {
  .listCaozuo button {
    padding: 0 10% 0 calc(10% + 6px);
  }
}
</style>
