<template>
  <div class="banner-container">
    <!-- 这个轮播图组件有一个问题，就是到了最后一张就停止不动了，在配置中设置无限循环也不行，必须在swiper组件上，加上v-if="banners.length > 0"，原因不明，反正加上就可以循环轮播了。 -->
    <swiper ref="mySwiper" :options="swiperOptions" v-if="banners.length > 0" >
      <swiper-slide v-for="item in banners" :key="item.id">
        <img class="img" :src="baseUrl + item.image_url" alt="" />
      </swiper-slide>
      <!-- 索引点 -->
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
// 首页banner
import { getBanners } from "../../api/banner";
import { baseUrl } from "../../settings.js";

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      isLoading: true,
      banners: [],
      baseUrl,
      swiperOptions: {
        loop: true,
        // pagination: {
        //   el: ".swiper-pagination", //与slot="pagination"处 class 一致
        //   clickable: true, //轮播按钮支持点击
        //   stopOnLastSlide: false,
        // },
        autoplay: {
          delay: 2000,
        },
        speed: 500,
      },
    };
  },
  async created() {
    this.isLoading = true;
    this.banners = await getBanners();
    // console.log(this.banners);
    this.isLoading = false;
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.banner-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .swiper-slide {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
.img {
  width: auto;
  height: 100vh;
  transform-origin: center;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>