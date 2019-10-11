<template>
    <div class="home">
        <naveg msg="Welcome to Your Vue.js App"/>
        <div class="content">
            <top></top>
            <div class="container-fluid content_con">
                <div class="row">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
  // @ is an alias to /src
  import naveg from "@/components/nav.vue";
  import top from "@/components/top.vue";

  export default {
    name: "home",
    components: {
      naveg,
      top
    },
    created(){
      // this.fetchCustomers()
    },
    methods:{
      fetchCustomers(){
        this.axios.get("https://free-api.heweather.net/s6/weather/lifestyle?location=历下&key=78b3781ea10742e99d737f4bfdba35d4")
          .then(function(res){
            console.log(res)
          })
      }
    }
  }
</script>
<style scoped lang="less">
    .home {
        display: flex;
        justify-content: space-between;
        .content {
            flex: 1;
            .content_con{
                position: relative;
                overflow: hidden;
                height: 200px;
                &::before{
                    content: "";
                    display: inline-block;
                    border-width: 0 42px 42px 0;
                    border-style: solid;
                    border-color: #fff rgba(0,0,0,.1);
                    -webkit-transform: rotate(90deg);
                    -moz-transform: rotate(90deg);
                    -ms-transform: rotate(90deg);
                    -o-transform: rotate(90deg);
                    transform: rotate(90deg);
                    position: absolute;
                    top: 0;
                    left: 0;
                    box-shadow: 0 0 0 rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.3);
                }
            }
        }
    }
</style>
