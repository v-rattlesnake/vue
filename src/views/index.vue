<template>
    <div class="home">
        <naveg msg="Welcome to Your Vue.js App"/>
        <div class="content">
            <top></top>
            <cont>
                <div class="container-fluid dashboard">
                    <div class="row">
                        <div class="col-6">
                            <p>数据访问次数 / 用户注册量（日）</p>
                            <ul>
                                <li data-tab="0" @click="tab" :class="tang?'pitch':''">最近7天</li>
                                <li data-tab="1" @click="tab" :class="!tang?'pitch':''">最近30天</li>
                            </ul>
                            <div id="zhuce" style="width:100%;height:400px"></div>
                        </div>
                        <div class="col-6">
                            <p>用户数量 / 音乐数量（总数）</p>
                            <div id="users" style="width:100%;height:440px"></div>
                        </div>
                    </div>
                </div>
            </cont>
        </div>
    </div>
</template>

<script>
  // @ is an alias to /src
    import naveg from "@/components/nav.vue";
    import top from "@/components/top.vue";
    import cont from "@/components/content.vue";

    export default {
        name: "home",
        components: {
            naveg,
            top,
            cont
        },
        data(){
            return {
                tang:true
            }
        },
        created(){
            // this.fetchCustomers()
        },
        mounted(){
            this.drawLine()
        },
        methods:{
            fetchCustomers(){
                this.axios.get("https://free-api.heweather.net/s6/weather/lifestyle?location=历下&key=78b3781ea10742e99d737f4bfdba35d4")
                    .then(function(res){
                      console.log(res)
                    })
            },
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let zhuce = this.$echarts.init(document.getElementById('zhuce'))
                let users = this.$echarts.init(document.getElementById('users'))
                // 绘制图表
                zhuce.setOption({
                    tooltip: {
                        trigger : "axis",
                        axisPointer :{
                            type:"cross",
                            label:{
                                backgroundColor :'#6a7985'
                            }
                        }
                    },
                    xAxis: {
                        type:"category",
                        boundaryGap:false,
                        data: ["10.22","10.23","10.24","10.25","10.26","10.27","10.28"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'line',
                        data: [5, 15, 0, 10, 10, 20,8],
                    },{
                        name: '访问数量',
                        type: 'line',
                        areaStyle:{
                            normal:{}
                        },
                        data: [15, 5, 20, 1, 20, 10,20],
                    }]
                });
                users.setOption({
                    tooltip: {
                        trigger : "axis",
                        axisPointer :{
                            type:"cross",
                            label:{
                                backgroundColor :'#6a7985'
                            }
                        }
                    },
                    xAxis: {
                        type:"category",
                        data: ["用户数量","音乐数量"]
                    },
                    yAxis: {},
                    series: [{
                        name: '数量',
                        type: 'bar',
                        data: [5, 15],
                    }]
                });
            },
            tab(e){
                if(e.target.dataset.tab == 1){
                    this.tang = false
                }else{
                    this.tang = true
                }
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
            .dashboard{
                font-size: .14rem;
                padding-top: 20px;
                p{
                    display: inline-block;
                    line-height: .2rem;
                    padding: 0 16px;
                    color: #fff;
                    border-radius: .1rem;
                    background: #348cf1
                }
                ul{
                    display: flex;
                    padding: 0 .4rem;
                    li{
                        line-height: 20px;
                        padding: 0 10px;
                        border-radius: 4px;
                        background: #ddd;
                        margin: 10px 20px;
                        cursor: pointer;
                        &.pitch{
                            background: #348cf1;
                            color: #fff
                        }
                    }
                }
            }
        }
    }
</style>
