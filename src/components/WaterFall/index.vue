<template>
  <div class="waterFall-container" ref="container">
    <div
      class="waterFall-item-container"
      v-masonry
      percentPosition: true
      item-selector=".item"
      transition-duration="0.3s"
    >
      <div
        v-masonry-tile
        class="item"
        :class="item.size"
        v-for="item in articles"
        :key="item.id"
        @click="handleClick(item)"
      >
      <div class="poster">
          <span class="title">{{ item.title }}</span>
          <span class="category">{{ item.category }}</span>
          <img class="img" :src="baseUrl + item.poster_url" :alt="item.title" />
      </div>
      </div>
    </div>

    <Pager
      v-if="total"
      :total="total"
      :current="routeInfo.page"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
// 瀑布流布局组件 分页组件

import Pager from "../Pager";
import { baseUrl } from "../../settings.js";
import { getArticles } from "../../api/article";

export default {
  components: {
    Pager,
  },
  data() {
    return {
      isLoading: true,
      articles: [],
      total: 0,
      baseUrl,
    };
  },

  computed: {
    routeInfo() {
      // console.log(this.$route, this.$route.query);
      const category = this.$route.params.categoryName || "";
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 20;
      // console.log(category);
      return {
        page,
        limit,
        category,
      };
    },
  },

  watch: {
    async $route() {
      await this.fetchData();
    },
  },

  async created() {
    await this.fetchData();
  },

  methods: {
    async fetchData() {
      let result = await getArticles({
        page: this.routeInfo.page,
        limit: this.routeInfo.limit,
        // category: "",
        category: this.routeInfo.category,
      });
      // console.log(result);
      let data = result.data;
      // 如果是全部分类，还要去掉"家居，家具，灯具，室内，品牌"等分类，留下动态，报道，产品
      if (!this.routeInfo.category) {
        this.articles = data.filter((it) => {
          return (
            it.category !== "Furniture" &&
            it.category !== "Household" &&
            it.category !== "Lighting" &&
            it.category !== "InteriorDesign" &&
            it.category !== "BrandDesign"
          );
        });
      } else {
        // 已经是某个分类
        this.articles = data;
      }
      this.total = parseInt(result.meta.total);
    },

    handlePageChange(newPage) {
      // console.log(newPage, this.routeInfo);
      let conditions = {
        page: newPage,
        limit: this.routeInfo.limit,
        category: this.routeInfo.category,
      };
      // console.log(conditions);
      this.$router.push(`?page=${conditions.page}&limit=${conditions.limit}`);
    },

    // 点击图片，跳转到该商品的详情页
    // `/details/${分类}?id=004`
    handleClick(item) {
      // console.log(item);
      let categoryName = item.category;
      const id = item.id;
      this.$router.push(`/details/${categoryName}?id=${id}`);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.waterFall-container {
  box-sizing: border-box;
  margin: 45px 0 90px 45px;
}

.waterFall-item-container {
  box-sizing: border-box;
}
.item {
  box-sizing: border-box;
  margin-bottom: 0px;
  font-size: 0;
  padding-bottom: 0;
  // width: 50%;
  padding: 0px 45px 45px 0px;
  .poster {
    overflow: hidden;
    position: relative;
    margin-bottom: 0;
    padding-bottom: 0;
    height: 100%;
    .title {
      position: absolute;
      top: 22px;
      left: 22px;
      color: @k5;
      z-index: 10;
      font-size: 18px;
    }
    .category {
      position: absolute;
      bottom: 22px;
      left: 22px;
      z-index: 10;
      font-size: 18px;
      color: @k50;
    }
    .img {
      width: 100%;
      height: 100%;
      filter: grayscale(1);
      transition: all 2s;
      &:hover {
        filter: grayscale(0);
        transform: scale(1.05, 1.05);
      }
    }
  }
}

.item.small {
  width: 25%;
}
.item.middle {
  width: 50%;
}
.item.lager {
  width: 100%;
}

@media (min-width: 768px) and (max-width: 1024px) {
  @pad-padding: 24px;
  .waterFall-container {
    box-sizing: border-box;
    margin: @pad-padding 0 80px @pad-padding;
  }

  .waterFall-item-container {
    box-sizing: border-box;
  }
  .item {
    box-sizing: border-box;
    margin-bottom: 0px;
    font-size: 0;
    padding-bottom: 0;
    width: 100%;
    padding: 0px @pad-padding @pad-padding 0px;
    .poster {
      overflow: hidden;
      position: relative;
      margin-bottom: 0;
      padding-bottom: 0;
      height: 100%;
      .title {
        position: absolute;
        top: 12px;
        left: 12px;
        color: @k5;
        z-index: 10;
        font-size: 10px;
      }
      .category {
        position: absolute;
        bottom: 12px;
        left: 12px;
        z-index: 10;
        font-size: 10px;
        color: @k50;
      }
      .img {
        width: 100%;
        height: 100%;
        filter: grayscale(1);
        transition: all 2s;
        &:hover {
          filter: grayscale(0);
          transform: scale(1.05, 1.05);
        }
      }
    }
  }

  .item.small {
    width: 100%;
  }
  .item.middle {
    width: 100%;
  }
  .item.lager {
    width: 100%;
  }
}

@media (max-width: 767px) {
  @phone-padding: 24px;
  .waterFall-container {
    box-sizing: border-box;
    margin: @phone-padding 0 80px @phone-padding;
  }

  .waterFall-item-container {
    box-sizing: border-box;
  }
  .item {
    box-sizing: border-box;
    margin-bottom: 0px;
    font-size: 0;
    padding-bottom: 0;
    width: 100%;
    padding: 0px @phone-padding @phone-padding 0px;
    .poster {
      overflow: hidden;
      position: relative;
      margin-bottom: 0;
      padding-bottom: 0;
      height: 100%;
      .title {
        position: absolute;
        top: 12px;
        left: 12px;
        color: @k5;
        z-index: 10;
        font-size: 10px;
      }
      .category {
        position: absolute;
        bottom: 12px;
        left: 12px;
        z-index: 10;
        font-size: 10px;
        color: @k50;
      }
      .img {
        width: 100%;
        height: 100%;
        filter: grayscale(1);
        transition: all 2s;
        &:hover {
          filter: grayscale(0);
          transform: scale(1.05, 1.05);
        }
      }
    }
  }

  .item.small {
    width: 100%;
  }
  .item.middle {
    width: 100%;
  }
  .item.lager {
    width: 100%;
  }
}
</style>