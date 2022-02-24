
<template>
  <div class="layout-container">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "Layout",
  computed: {
    showMenu() {
      // 是否显示菜单
      // console.log(this.$store, this.$store.state.showMenu);
      return this.$store.state.showMenu;
    },
  },
};
</script>

<style scoped lang='less'>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.6rem;
    z-index: 99;
    flex: 0 0 auto;
  }
  .main {
    margin-top: 1.6rem;
    box-sizing: border-box;
    width: 100%;
    flex: 1 0 auto;
    // background: rgb(147, 186, 196);
  }
  .footer {
    width: 100%;
    flex: 0 0 auto;
  }
}

@media (min-width: 768px) and (max-width: 1280px) {
  .layout-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 108px;
      z-index: 99;
      flex: 0 0 auto;
    }
    .main {
      margin-top: 108px;
      box-sizing: border-box;
      width: 100%;
      flex: 1 0 auto;
      // background: rgb(147, 186, 196);
    }
    .footer {
      width: 100%;
      flex: 0 0 auto;
    }
  }
}

@media (max-width: 767px) {
  .layout-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 98px;
      z-index: 99;
      flex: 0 0 auto;
    }
    .main {
      margin-top: 98px;
      box-sizing: border-box;
      width: 100%;
      flex: 1 0 auto;
      // background: rgb(92, 205, 233);
    }
    .footer {
      width: 100%;
      flex: 0 0 auto;
    }
  }
}
</style>