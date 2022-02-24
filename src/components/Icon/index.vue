<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  close: "icon-close",
  totop: "icon-totop",
  menu1: "icon-menu1",
  menu2: "icon-menu2",
  arrowLeft: "icon-arrowLeft",
  arrowRight: "icon-arrowRight",
};
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 图标类样式
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_1736961_0v7nd3i7va2r.css";

.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>