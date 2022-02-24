<template>
  <div class="category-container">
    <!-- 分类置顶图片 和 导航-->
    <div class="topPictrue-container">
      <div
        class="image-box"
        :style="{ backgroundImage: `url(${topPictrue.cover_url})` }"
      ></div>

      <!-- 分类描述 -->
      <div class="cate-description">{{ topPictrue.description }}</div>
      <!-- 导航 -->
      <div class="nav">
        <Nav />
      </div>
    </div>
    <!-- waterFall -->
    <WaterFall />
  </div>
</template>

<script>
import Nav from "../../components/Nav";
import WaterFall from "../../components/WaterFall";
import { getCatePicture } from "../../api/catePicture.js";
import { baseUrl } from "../../settings.js";
export default {
  components: {
    Nav,
    WaterFall,
  },
  data() {
    return {
      isLoading: false,
      data: {}, // 用于存放请求所有分类的置顶图片对象
      currentCategory: "", // 当前分类
      topPictrue: {}, // 不同分类的置顶图片对象
      baseUrl,
    };
  },

  computed: {},

  created() {
    // console.log(this.$route);
    this.currentCategory = this.$route.params.categoryName;
    this.fetchData();
  },

  watch: {
    async $route() {
      this.currentCategory = this.$route.params.categoryName;
      await this.fetchData();
    },
  },

  methods: {
    async fetchData() {
      this.isLoading = true;
      const res = await getCatePicture();
      this.data = res.content;
      // console.log(this.data);
      for (let i = 0; i < this.data.length; i++) {
        if (this.currentCategory === this.data[i].name) {
          this.topPictrue = this.data[i];
        }
        // console.log(this.topPictrue);
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

// 首页，分类页面，详情页，都需要往上平移160px, 108px, 98px
.category-container {
  margin-top: -@headerHeight;
  .topPictrue-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .image-box {
      width: 100%;
      height: 100vh;
      background-size: cover;
      background-position: center;
      transform-origin: center;
      animation: scale 20s infinite;
    }
  }
  @keyframes scale {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.1, 1.1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  .cate-description {
    position: absolute;
    color: @k5;
    font-size: 36px;
    line-height: 55px;
    z-index: 10;
    left: 3.6rem;
    right: 3.6rem;
    top: 360px;
    text-align: justify;
    letter-spacing: 1px;
    text-shadow: 1px 0px 1px @k90;
  }
  .nav {
    position: absolute;
    left: 2.5rem;
    right: 2.5rem;
    top: 210px;
    z-index: 10;
  }
}

@media (min-width: 768px) and (max-width: 1250px) {
  .category-container {
    margin-top: -108px;
    .topPictrue-container {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      .image-box {
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        transform-origin: center;
        animation: scale 20s infinite;
      }
    }
    @keyframes scale {
      0% {
        transform: scale(1, 1);
      }
      50% {
        transform: scale(1.1, 1.1);
      }
      100% {
        transform: scale(1, 1);
      }
    }
    .cate-description {
      position: absolute;
      color: @k5;
      font-size: 25px;
      line-height: 40px;
      z-index: 10;
      left: 160px;
      right: 160px;
      top: 300px;
      text-align: justify;
      letter-spacing: 1px;
    }
    .nav {
      position: absolute;
      left: 48px;
      right: 48px;
      top: 190px;
      z-index: 10;
    }
  }
}

@media (max-width: 767px) {
  .category-container {
    margin-top: -98px;
    .topPictrue-container {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      .image-box {
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        transform-origin: center;
        animation: scale 20s infinite;
      }
    }
    @keyframes scale {
      0% {
        transform: scale(1, 1);
      }
      50% {
        transform: scale(1.1, 1.1);
      }
      100% {
        transform: scale(1, 1);
      }
    }
    .cate-description {
      position: absolute;
      color: @k5;
      font-size: 25px;
      line-height: 40px;
      z-index: 10;
      left: 50px;
      right: 50px;
      top: 210px;
      text-align: justify;
      letter-spacing: 1px;
    }
    .nav {
      position: absolute;
      left: 24px;
      right: 24px;
      top: 116px;
      z-index: 10;
    }
  }
}
</style>