<template>
  <div class="userC animated bounceInRight">
    <btn class-number="6">添加用户</btn>
    <btn class-number="7">删除用户</btn>
    <ul>
      <li>
        <list :ccc="ccc" @bbb="bbb">
          <template v-slot:name="name">
            用户名
          </template>
          <template v-slot:list="list">
            <div class="list_center">注册时间</div>
            <div class="list_center">用户权限</div>
          </template>
        </list>
      </li>
      <li v-for="(val, ind) in userLists" :key="ind">
        <list :ccc="ccc">
          <template v-slot:index="index">{{ ind + 1 }}</template>
          <template v-slot:name="name">{{ val.a }}</template>
          <template v-slot:list="list">
            <div class="list_center">{{ val.b }}</div>
            <div class="list_center">
              <div class="d-md-flex d-none">
                <btn class-number="8" @button="administrator(ind)">管理员</btn>
                <btn class-number="9" @button="forbiddens(ind)">禁用</btn>
                <btn class-number="10" @button="del(ind)">删除</btn>
              </div>
              <div class="listCaozuo d-flex d-md-none">
                <p @click="caozuo(ind)">
                  <btn class-number="2">操作</btn>
                </p>
                <pull-down-list
                  :none="index === ind"
                  :style-z="
                    'top:0;left:0;transform:translate(-100%);background:#fff;width:100%;min-width:70px'
                  "
                >
                  <template v-slot:a="a"
                    ><btn class-number="8" @button="administrator(ind)"
                      >管理员</btn
                    ></template
                  >
                  <template v-slot:b="b"
                    ><btn class-number="9" @button="forbiddens(ind)"
                      >禁用</btn
                    ></template
                  >
                  <template v-slot:c="c"
                    ><btn class-number="10" @button="del(ind)"
                      >删除</btn
                    ></template
                  >
                </pull-down-list>
              </div>
            </div>
          </template>
        </list>
      </li>
    </ul>
  </div>
</template>

<script>
import btn from "../components/AppComponents/btn";
import list from "../components/AppComponents/List";
import pullDownList from "./../components/AppComponents/pullDownList";
export default {
  name: "user",
  components: {
    btn,
    list,
    pullDownList
  },
  data() {
    return {
      ccc: true,
      userLists: [
        { a: "阿斯顿发", b: "2019/11/29" },
        { a: "adsf", b: "2019/9/2" },
        { a: "ad3213sf", b: "2019/3/3" }
      ],
      index: -1
    };
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
    administrator(e) {
      console.log("管理员", e);
    },
    forbiddens(e) {
      console.log("禁用", e);
    },
    del(e) {
      console.log("删除");
      this.userLists.splice(e, 1);
    }
  }
};
</script>

<style scoped lang="less">
.userC {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #f5f5f5;
  padding: 0 1rem;
  .list_center {
    flex: 3;
    min-width: 64px;
    &:last-of-type {
      flex: 4;
      overflow: unset;
    }
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex: 1;
      height: 100%;
      position: relative;
      p {
        width: 50%;
        min-width: 41px;
      }
    }
  }
}
</style>

<style lang="less">
.userC {
  > button {
    line-height: 30px;
    padding: 0 20px;
    margin: 10px 20px 10px 0;
  }
  .list_center {
    button {
      flex: 1;
      line-height: 24px;
      min-width: 41px;
      width: 100%;
    }
    div:not(.listCaozuo) button {
      flex: unset;
      width: 30%;
    }
    ul button {
      padding: 0;
    }
  }
}
</style>
