<template>
  <div class="contact-container">
    <div class="contact">
      <router-link to="/contact/email">E-mail</router-link>
      <a href="https://weibo.com/zhouanbin">weibo</a>
      <router-link to="/contact/wechat">wechat</router-link>
      <a href="https://www.instagram.com/leysuredesign/">instagram</a>
      <a href="https://www.pinterest.com/LeysureDesign/boards/">pinterest</a>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-container {
  height: 360px;
  .contact {
    height: 100%;
    box-sizing: border-box;
    padding: 0 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      font-size: 22px;
      color: @k60;
      &:hover {
        color: @k90;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1250px) {
  .contact-container {
  height: 360px;
    .contact {
      height: 100%;
      box-sizing: border-box;
      padding: 0 3.2rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a {
        font-size: 16px;
        color: @k60;
        &:hover {
          color: @k90;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .contact-container {
    box-sizing: border-box;
    padding-top: 20px;
    height: 340px;
    .contact {
      height: 80%;
      box-sizing: border-box;
      padding: 0 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      a {
        font-size: 14px;
        color: @k60;
        &:hover {
          color: @k90;
        }
      }
    }
  }
}
</style>