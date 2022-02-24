

<template>
  <div class="about-container" v-html="content"></div>
</template>

<script>
// about页面
import { getRichText } from "../../api/richText.js";
export default {
  data() {
    return {
      content: "",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await getRichText(1); // 参数为id
      // console.log(res);
      this.content = res.content;
    },
  },
};
</script>


<style lang="less" scoped>
@import "~@/styles/var.less";

.about-container {
  margin-top: 1.4rem;
  box-sizing: border-box;
  padding: 0 2rem 90px 2rem;
  color: @k60;
  font-size: 18px;
  line-height: 2.5;
  text-align: justify;
  letter-spacing: 1px;
}

@media (min-width: 768px) and (max-width: 1250px) {
  .about-container {
    box-sizing: border-box;
    margin-top: 100px;
    padding: 0 48px 90px 48px;
    color: @k60;
    font-size: 16px;
    letter-spacing: 1px;
  }
}

@media (max-width: 767px) {
  .about-container {
    box-sizing: border-box;
    margin-top: 60px;
    padding: 0 24px 90px 24px;
    color: @k60;
    font-size: 14px;
    letter-spacing: 1px;
  }
}
</style>