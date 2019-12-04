<template>
  <div class="progress">
    <span><slot name="progre"></slot></span>
    <div class="progress_con" ref="progress_con">
      <div class="foreground" :style="'width:' + width + '%'">
        <div class="progress_bar" @mousedown="mousedown"></div>
      </div>
    </div>
    <span><slot name="aggregate"></slot></span>
  </div>
</template>

<script>
export default {
  name: "progressBar",
  props: {
    type: String
  },
  data() {
    return {
      widths: 0,
      width: 0,
      x: 0,
      once: false
    };
  },
  methods: {
    mousedown(e) {
      if (!this.once) {
        this.x = e.x;
        this.once = true;
      }
      this.widths = this.$refs.progress_con.clientWidth / 100;
      window.addEventListener("mousemove", this.fun, false);
      window.onmouseup = () => {
        window.removeEventListener("mousemove", this.fun, false);
      };
    },
    fun(e) {
      if (e.x - this.x >= this.$refs.progress_con.clientWidth) return;
      this.width = +(e.x - this.x) / this.widths;
      this.$emit("width", { width: this.width, type: this.type });
    }
  },
  mounted() {
    this.$nextTick(function() {});
  }
};
</script>

<style scoped lang="less">
.progress {
  width: 100%;
  height: 30px;
  color: #9ea7b3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    margin: 0 5%;
  }
  .progress_con {
    flex: 1;
    height: 4px;
    position: relative;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    border-radius: 2px;
    .foreground {
      height: 100%;
      background: #9ea7b3;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 2px;
      .progress_bar {
        width: 12px;
        height: 12px;
        background: #97caff;
        position: absolute;
        right: -6px;
        top: -4px;
        border-radius: 50%;
      }
    }
  }
}
</style>
