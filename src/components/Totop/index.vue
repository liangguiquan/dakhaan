<template>
  <div
    class="totop-container"
    v-show="show"
    @click="handleClick"
  >
    <img :src="Icon" alt="" />
  </div>
</template>

<script>
import Icon from "../../assets/images/up.svg";
export default {
  name: "Totop",
  data() {
    return {
      show: false,
      Icon,
    };
  },
  computed: {
    showMenu() {
      // 是否显示菜单
      return this.$store.state.showMenu;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop; // 滚动的距离
      //   console.log(scrollTop);
      if (this.showMenu) {
        this.show = false;
      } else {
        this.show = scrollTop >= 500; // 滚动区域滚动超过500像素时，show为true，显示totop组件
      }
    },
    handleClick() {
      // 回到顶部
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.totop-container {
  width: 36px;
  height: 36px;
  position: fixed;
  z-index: 99;
  right: 15px;
  bottom: 200px;
  cursor: pointer;
  line-height: 50px;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
}

@media (min-width: 768px) and (max-width: 1250px) {
  .totop-container {
    width: 34px;
    height: 34px;
    position: fixed;
    z-index: 99;
    right: 30px;
    bottom: 200px;
    cursor: pointer;
    line-height: 50px;
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media (max-width: 768px) {
  .totop-container {
    width: 34px;
    height: 34px;
    position: fixed;
    z-index: 99;
    right: 30px;
    bottom: 200px;
    cursor: pointer;
    line-height: 50px;
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>