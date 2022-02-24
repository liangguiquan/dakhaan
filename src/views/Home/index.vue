<template>
  <div class="home-container">
    <Banner />
    <WaterFall />
  </div>
</template>

<script>
import Banner from "../../components/Banner";
import WaterFall from "../../components/WaterFall";

export default {
  name: "Home",
  components: {
    Banner,
    WaterFall,
  },
};
</script>


<style lang="less" scoped>
@import "~@/styles/var.less";
// 首页，分类页面，详情页，都需要往上平移160px, 108px, 98px
.home-container {
  margin-top: -@headerHeight;
}
@media (min-width: 768px) and (max-width: 1280px) {
  .home-container {
    margin-top: -108px;
  }
}

@media (max-width: 767px) {
  .home-container {
    margin-top: -98px;
  }
}
</style>