<template>
  <div class="nav-container">
    <router-link
      v-for="item in items"
      :key="item.name"
      :to="{
        params: { categoryName: item.title_en },
      }"
    >
      <span class="title">{{ item.title_cn }}</span>
      <span class="title">{{ item.title_en }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title_cn: "动态",
          title_en: "Events",
        },
        {
          title_cn: "报道",
          title_en: "Press",
        },
        {
          title_cn: "产品",
          title_en: "Products",
        },
      ],
    };
  },
};
</script>


<style lang="less" scoped>
@import "~@/styles/var.less";
.nav-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  a {
    color: @k60;
    font-size: 18px;
    text-align: center;
    &:hover {
      color: @k5;
    }
    span {
      display: inline-block;
    }
  }
}

@media (min-width: 768px) and (max-width: 1280px) {
  .nav-container {
    // background-color: cadetblue;
    width: 100%;
    display: flex;
    justify-content: space-around;
    a {
      color: @k60;
      font-size: 14px;
      text-align: center;
      // text-shadow: 1px 1px 1px #000;
      &:hover {
        color: @k5;
      }
      span {
        display: inline-block;
      }
    }
  }
}

@media (max-width: 767px) {
  // display: none;
  .nav-container {
    // background-color: cadetblue;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    a {
      color: @k60;
      font-size: 14px;
      text-align: center;
      // text-shadow: 1px 1px 1px #000;
      &:hover {
        color: @k5;
      }
      span {
        display: block;
      }
    }
  }
}
</style>