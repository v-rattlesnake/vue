<template>
  <div>
    <div @click="collapse">
      <slot name="title"></slot>
    </div>
    <transition name="fade">
      <div
        :class="['animated', !collapse_ ? 'zoomInDown' : 'zoomOutUp']"
        v-show="!collapse_"
      >
        <slot name="animateCon"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "animateCollapse",
  components: {},
  data() {
    return {
      collapse_: true
    };
  },
  methods: {
    collapse() {
      this.collapse_ = !this.collapse_;
    }
  }
};
</script>

<style lang="less"></style>
