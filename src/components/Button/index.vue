<template>
  <!-- <i class="iconfont icon-container" :class="fontClass"></i> -->
  <img class="button-container" :src="buttonSrc" alt="" @click="handleClick" />
</template>

<script>
import Close from "../../assets/images/close.png";
import MenuBlack from "../../assets/images/menu1.png";
import MenuWhite from "../../assets/images/menu2.png";
import MenuLeft from "../../assets/images/menu3.png";
import ArrowLeft from "../../assets/images/arrowLeft.png";
import ArrowRight from "../../assets/images/arrowRight.png";
// import ToTop from "../../assets/images/totop.png";

const bottonMap = {
  close: Close,
  //   totop: ToTop,
  menuBlack: MenuBlack,
  menuWhite: MenuWhite,
  menuLeft: MenuLeft,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
};

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data(){
    return {
      newType: ""
    }
  },
  computed: {
    // 图标类样式
    buttonSrc() {
      return bottonMap[this.type];
    },
  },
  methods: {
    handleClick(){
      // this.$emit("click");
    }
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_1736961_0v7nd3i7va2r.css";

.button-container {
  width: inherit !important;
  height: inherit !important;
  position: absolute;
  top: 0;
  left: 0;
}
</style>