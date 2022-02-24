<template>
  <img class="logo-img logo-container" :src="url" @click="handleClick" />
</template>

<script>
export default {
  name: "Logo",
  props: {
    url: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  methods: {
    // 点击logo，返回网站首页
    handleClick() {
      this.$store.commit("changeShowMenu", false);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* 带有作用域的样式 */
.logo-img {
  object-fit: cover;
  display: block;
  width: auto;
  height: 40px;
  cursor: pointer;
}

@media (min-width: 768px) and (max-width: 1250px) {
  .logo-img {
    object-fit: cover;
    display: block;
    width: auto;
    height: 38px;
    cursor: pointer;
  }
}

@media (max-width: 767px) {
  .logo-img {
    object-fit: cover;
    display: block;
    width: auto;
    height: 30px;
    cursor: pointer;
  }
}
</style>