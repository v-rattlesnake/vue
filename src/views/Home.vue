<template>
  <div class="container-fluid homeCon">
    <div class="row">
      <div class="col-12 col-lg-6">
        <div ref="zhuce" id="zhuce" style="width:100%;height: 33rem;"></div>
      </div>
      <div class="col-12 col-lg-6">
        <div id="users" style="width:100%;height:33rem"></div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "cont",
  components: {},
  data() {
    return {
      width: "",
      zhuce: "",
      users: ""
    };
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      this.zhuce = this.$echarts.init(document.getElementById("zhuce"), {
        width: this.width
      });
      this.users = this.$echarts.init(document.getElementById("users"));
      store.commit("zhuceing", this.zhuce);
      store.commit("usersing", this.users);
      // 绘制图表
      this.zhuce.hideLoading();
      let option = {
        title: {
          text: "数据访问次数 / 用户注册量（日）",
          textStyle: {
            align: "center",
            color: "#fff",
            fontSize: 20
          },
          top: "3%",
          left: "10%"
        },
        backgroundColor: "#0f375f",
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
            "全年目标值"
          ],
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#01FCE3"
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
          }
        },
        yAxis: [
          {
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
                color: "#FFFFFF"
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ebf8ac"
              }
            }
          },
          {
            splitLine: {
              show: false
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
        series: [
          {
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
            areaStyle: {
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
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
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
      };
      this.zhuce.setOption(option);
      this.users.setOption({
        title: {
          text: "用户数量 / 音乐数量（总数）",
          textStyle: {
            align: "center",
            color: "#fff",
            fontSize: 20
          },
          top: "3%",
          left: "10%"
        },
        backgroundColor: "#0f375f",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        xAxis: {
          type: "category",
          data: ["用户数量", "音乐数量"],
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#01FCE3"
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
          }
        },
        yAxis: {
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
              color: "#FFFFFF"
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ebf8ac"
            }
          }
        },
        series: [{ name: "数量", type: "bar", data: [5, 15] }]
      });
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawLine();
    });
  }
};
</script>

<style scoped lang="less">
.homeCon .col-12 {
  margin-top: 15px;
}
</style>
