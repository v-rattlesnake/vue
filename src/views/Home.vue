<template>
    <div class="container-fluid dashboard">
        <div class="row">
            <div class="col-6">
                <!--<p></p>-->
                <!--<ul>-->
                    <!--<li data-tab="0" @click="tab" :class="tang?'pitch':''">最近7天</li>-->
                    <!--<li data-tab="1" @click="tab" :class="!tang?'pitch':''">最近30天</li>-->
                <!--</ul>-->
                <div ref="zhuce" id="zhuce" style="width:100%;height: 4rem;"></div>
            </div>
            <div class="col-6">
                <p>用户数量 / 音乐数量（总数）</p>
                <div id="users" style="width:100%;height:4rem"></div>
            </div>
        </div>
    </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "cont",
    components:{
    },
    data(){
      return {
        tang:true,
        width:''
      }
    },
    mounted(){
      this.drawLine(),
      window.onresize = () => {
        return (() => {
          this.width = this.$refs.zhuce.clientWidth;
        })();
      }
    },
    methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let zhuce = echarts.init(document.getElementById('zhuce'),{width: this.width,})
        let users = echarts.init(document.getElementById('users'))
        // 绘制图表
        zhuce.hideLoading();
        let option = {
          baseOption:{
            title: {
              text: '数据访问次数 / 用户注册量（日）',
              textStyle: {
                align: 'center',
                color: '#fff',
                fontSize: 20,
              },
              top: '3%',
              left: '10%',
            },
            backgroundColor: '#0f375f',
            grid: {
              top: "25%",
              bottom: "10%"
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
                label: {
                  show: true
                }
              }
            },
            legend: {
              data: ["销售水量", "主营业务"],
              top: "15%",
              textStyle: {
                color: "#ffffff"
              }
            },
            xAxis: {
              data: [
                "当年完成水量",
                "去年同期水量",
                "滚动目标值水量",
                "全年目标值水量",
                "当年完成金额",
                "去年同期金额",
                "滚动目标金额",
                "全年目标值",

              ],
              axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                  color: '#01FCE3'
                }
              },
              axisTick: {
                show: true //隐藏X轴刻度
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#ebf8ac" //X轴文字颜色
                }
              },
            },
            yAxis: [{
              type: "value",
              name: "亿元",
              nameTextStyle: {
                color: "#ebf8ac"
              },
              splitLine: {
                show: false
              },
              axisTick: {
                show: true
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#FFFFFF'
                }
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#ebf8ac"
                }
              },
            },
              {
                type: "value",
                name: "同比",
                nameTextStyle: {
                  color: "#ebf8ac"
                },
                position: "right",
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                axisLabel: {
                  show: true,
                  formatter: "{value} %", //右侧Y轴文字显示
                  textStyle: {
                    color: "#ebf8ac"
                  }
                }
              },
              {
                type: "value",
                gridIndex: 0,
                min: 50,
                max: 100,
                splitNumber: 8,
                splitLine: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  show: false
                },
                splitArea: {
                  show: true,
                  areaStyle: {
                    color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                  }
                }
              }
            ],
            series: [{
              name: "销售水量",
              type: "line",
              yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
              smooth: true, //平滑曲线显示
              showAllSymbol: true, //显示所有图形。
              symbol: "circle", //标记的图形为实心圆
              symbolSize: 10, //标记的大小
              itemStyle: {
                //折线拐点标志的样式
                color: "#058cff"
              },
              lineStyle: {
                color: "#058cff"
              },
              areaStyle:{
                color: "rgba(5,140,255, 0.2)"
              },
              data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
            },
              {
                name: "主营业务",
                type: "bar",
                barWidth: 15,
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: "#00FFE3"
                    },
                      {
                        offset: 1,
                        color: "#4693EC"
                      }
                    ])
                  }
                },
                data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
              }
            ]
          },
          media:[
            {
              option: {},
            },
            {
              query: {
                minAspectRatio: 1
              },
              option: {
                legend: {
                  orient: 'horizontal'
                },
                series: [
                  {
                    radius: [20, '50%'],
                    center: ['25%', '50%']
                  },
                  {
                    radius: [30, '50%'],
                    center: ['75%', '50%']
                  }
                ]
              }
            },
            {
              query: {
                maxAspectRatio: 1
              },
              option: {
                legend: {
                  right: 'center',
                  bottom: 0,
                  orient: 'horizontal'
                },
                series: [
                  {
                    radius: [20, '50%'],
                    center: ['50%', '30%']
                  },
                  {
                    radius: [30, '50%'],
                    center: ['50%', '70%']
                  }
                ]
              }
            },
            {
              query: {
                maxWidth: 500
              },
              option: {
                legend: {
                  right: 10,
                  top: '15%',
                  orient: 'vertical'
                },
                series: [
                  {
                    radius: [20, '50%'],
                    center: ['50%', '30%']
                  },
                  {
                    radius: [30, '50%'],
                    center: ['50%', '75%']
                  }
                ]
              }
            }
          ]};
        zhuce.setOption({option});
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
  };
</script>

<style scoped lang="less">
    .content_con{
        background: #f5f5f5;
        position: relative;
        overflow: hidden;
        &::before{
            content: "";
            display: inline-block;
            border-width: 0 42px 42px 0;
            border-style: solid;
            border-color: rgba(0,0,0,.2) #fff;
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
</style>