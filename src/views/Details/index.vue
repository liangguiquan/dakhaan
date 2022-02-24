<template>
  <div class="details-container" v-if="data">
    <!--  详情页顶部图片 -->
    <div class="topPictrue-container">
      <img class="img" :src="baseUrl + data.banner_url" :alt="data.title" />
    </div>

    <!-- 详情内容 -->
    <div class="content">
      <div class="header">
        <div class="info">
          <span class="ctime">{{ data.ctime }}</span> -
          <span class="category">{{ data.categoryItem }}</span>
        </div>
        <div class="title">{{ data.title }}</div>
      </div>

      <!-- 购买链接 -->
      <div class="buy_link" v-if="data.buy_link">
        <a :href="data.buy_link" target="_blank">
          <span>点击购买</span>
        </a>
      </div>

      <!-- 描述 -->
      <div class="description" v-html="data.details"></div>
    </div>
  </div>
</template>

<script>
import { getArticleById } from "../../api/article";
import { baseUrl } from "../../settings.js";

export default {
  data() {
    return {
      isLoading: true,
      data: null,
      baseUrl,
      categoryMap: [
        {
          title: "动态 Events",
          name: "Events",
        },
        {
          title: "报道 Press",
          name: "Press",
        },
        {
          title: "产品 Products",
          name: "Products",
        },
      ],
    };
  },
  async created() {
    const id = this.$route.query.id;
    this.data = await getArticleById(id);
    // console.log(this.data);
    this.data.ctime = this.data.created_at.split("T")[0];
    const temp = this.categoryMap.filter(
      (it) => it.name === this.data.category
    )[0].title;
    this.data.categoryItem = temp;
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.details-container {
  // 首页，分类页面，详情页，都需要往上平移160px, 108px, 98px
  margin-top: -@headerHeight;
  margin-top: -1.6rem;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 90px;
  .topPictrue-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      object-fit: cover;
    }
  }
  .content {
    box-sizing: border-box;
    padding: 90px 90px 0px 90px;
    overflow: hidden;
    letter-spacing: 1px;
    word-wrap: break-word;
    font-size: 18px;
    width: 100%;
    color: @k60;
    .header {
      margin-bottom: 30px;
    }
    .ctime {
      padding-right: 10px;
    }
    .category {
      padding-left: 10px;
    }
    .title {
      font-size: 60px;
      color: @k90;
      margin-top: 140px;
    }
  }
  .buy_link {
    color: @k60;
    font-size: 26px;
    a {
      display: block;
      color: @k60;
      position: relative;
      &::before {
        display: block;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 26px;
        height: 26px;
        margin: 5px;
        background-image: url("~@/assets/images/arrowRight.png");
        background-size: 26px;
      }
      span {
        margin-left: 50px;
      }
      &:hover {
        color: @k90;
        &::before {
          display: block;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 26px;
          height: 26px;
          margin: 5px;
          background-image: url("~@/assets/images/arrowRight2.png");
          background-size: 26px;
        }
      }
    }
  }
  .description {
    margin-top: 90px;
    box-sizing: border-box;
    width: 100%;
    font-size: 18px;
    color: @k60;
    line-height: 2.5;
  }
}

@media (min-width: 768px) and (max-width: 1280px) {
  .details-container {
    // 首页，分类页面，详情页，都需要往上平移160px, 108px, 98px
    margin-top: -108px;
    width: 100%;
    box-sizing: border-box;
    .topPictrue-container {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .img {
        // width: 100%;
        object-fit: cover;
      }
    }
    .content {
      box-sizing: border-box;
      padding: 48px 48px 0px 48px;
      overflow: hidden;
      font-size: 16px;
      width: 100%;
      color: @k60;
      letter-spacing: 1px;
      word-wrap: break-word;
      .header {
        margin-bottom: 30px;
      }
      .ctime {
        padding-right: 10px;
      }
      .category {
        padding-left: 10px;
      }
      .title {
        font-size: 36px;
        color: @k90;
        margin-top: 120px;
      }
    }
    .buy_link {
      color: @k60;
      font-size: 18px;
      a {
        display: block;
        color: @k60;
        position: relative;
        &::before {
          display: block;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 18px;
          height: 18px;
          margin: 4px;
          background-image: url("~@/assets/images/arrowRight.png");
          background-size: 18px;
        }
        span {
          margin-left: 30px;
        }
        &:hover {
          color: @k90;
          &::before {
            display: block;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 18px;
            height: 18px;
            margin: 4px;
            background-image: url("~@/assets/images/arrowRight2.png");
            background-size: 18px;
          }
        }
      }
    }
    .description {
      margin-top: 90px;
      box-sizing: border-box;
      width: 100%;
      color: @k60;
      font-size: 16px;
      line-height: 2.5;
    }
  }
}

@media (max-width: 767px) {
  .details-container {
    // 首页，分类页面，详情页，都需要往上平移160px, 108px, 98px
    margin-top: -98px;
    width: 100%;
    box-sizing: border-box;
    .topPictrue-container {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .img {
        object-fit: cover;
      }
    }
    .content {
      box-sizing: border-box;
      padding: 40px 24px 0px 24px;
      overflow: hidden;
      font-size: 14px;
      letter-spacing: 1px;
      word-wrap: break-word;
      width: 100%;
      color: @k60;
      .header {
        margin-bottom: 30px;
      }
      .ctime {
        padding-right: 10px;
      }
      .category {
        padding-left: 10px;
      }
      .title {
        font-size: 32px;
        color: @k90;
        margin-top: 100px;
      }
    }
    .buy_link {
      color: @k60;
      font-size: 14px;
      a {
        display: block;
        color: @k60;
        position: relative;
        &::before {
          display: block;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 14px;
          height: 14px;
          margin: 2px;
          background-image: url("~@/assets/images/arrowRight.png");
          background-size: 14px;
        }
        span {
          margin-left: 20px;
        }
        &:hover {
          color: @k90;
          &::before {
            display: block;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 14px;
            height: 14px;
            margin: 2px;
            background-image: url("~@/assets/images/arrowRight2.png");
            background-size: 14px;
          }
        }
      }
    }
    .description {
      margin-top: 90px;
      box-sizing: border-box;
      width: 100%;
      font-size: 14px;
      color: @k60;
      line-height: 2.5;
      // p {
      //   width: 100%;
      //   font-size: 24px;
      //   color: @k60;
      //   white-space: wrap;
      //   text-align: justify;
      //   line-height: 40px;
      //   box-sizing: border-box;
      //   padding-bottom: 45px;
      // }
      // img {
      //   width: 100%;
      //   padding-bottom: 45px;
      //   box-sizing: border-box;
      // }
    }
  }
}
</style>