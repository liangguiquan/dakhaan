<template>
  <div class="menu-container">
    <span
      class="item"
      v-for="item in items"
      :key="item.name"
      @click="handleClick(item)"
    >
      {{ item.title }}
    </span>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          title: "关于 About",
          name: "About",
        },
        {
          title: "产品 Products",
          name: "Products",
        },
        {
          title: "动态 Events",
          name: "Events",
        },
        {
          title: "报道 Press",
          name: "Press",
        },
        {
          title: "购买 Shopping",
          name: "Shopping",
        },
        {
          title: "联系 Contact",
          name: "Contact",
        },
      ],
    };
  },
  computed: {
    showMenu() {
      // 是否显示菜单
      return this.$store.state.showMenu;
    },
  },

  methods: {
    /** 点击切换是否显示菜单
     *  参数：show  boolean
     */
    handleChangeShowMenu(show) {
      this.$store.commit("changeShowMenu", show);
    },

    handleClick(item) {
      if (item.name === "About" || item.name === "Shopping") {
        this.$router.push(`/${item.name}`);
      } else if (item.name === "Contact") {
        this.$bus.$emit("toFooter");
      } else {
        this.$router.push(`/cate/${item.name}`);
      }

      this.handleChangeShowMenu(false);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.menu-container {
  margin-top: 0.8rem;
  // background-color: turquoise;
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .item {
    cursor: pointer;
    line-height: 60px;
    font-size: 20px;
    font-weight: lighter;
    color: @lightWords;
  }
}

@media (min-width: 768px) and (max-width: 1250px) {
  .menu-container {
    margin-top: 80px;
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    align-items: center;
    .item {
      line-height: 60px;
      font-size: 16px;
      font-weight: lighter;
      color: @lightWords;
      cursor: pointer;
    }
  }
}

@media (max-width: 767px) {
  .menu-container {
    margin-top: 80px;
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    align-items: center;
    .item {
      line-height: 44px;
      font-size: 14px;
      font-weight: lighter;
      color: @lightWords;
    }
  }
}
</style>