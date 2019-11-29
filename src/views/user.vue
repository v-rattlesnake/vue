<template>
    <div class="user">
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
            <li v-for="(val,ind) in userLists" :key="ind">
                <list :ccc="ccc">
                    <template v-slot:index="index">{{ ind+1 }}</template>
                    <template v-slot:name="name">{{val.a}}</template>
                    <template v-slot:list="list">
                        <div class="list_center">{{val.b}}</div>
                        <div class="list_center"></div>
                    </template>
                </list>
            </li>
        </ul>
    </div>
</template>

<script>
  import btn from "../components/AppComponents/btn"
  import list from "../components/AppComponents/List"
  export default {
    name: "user",
    components:{
      btn,
      list
    },
    data(){
      return {
        ccc:true,
        userLists: [{ a: "阿斯顿发", b: "2019/11/29"},
          { a: "adsf", b: "2019/9/2" },
          { a: "ad3213sf", b: "2019/3/3" }],
      }
    },
    methods:{
      bbb(){
        this.ccc = !this.ccc
      },
    }
  };
</script>

<style scoped lang="less">
    .user{
        background: #f5f5f5;
        padding: 0 1rem;
        .list_center{
            flex: 3;
            min-width: 64px;
        }
    }
</style>

<style lang="less">
    .user{
        > button{
            line-height: 30px;
            padding: 0 20px;
            margin: 10px 20px 10px 0;
        }
    }
</style>