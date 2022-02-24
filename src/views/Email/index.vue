<template>
  <div class="email-container" ref="container">
    <!-- 设计网站 -->
    <!-- <div class="email">
      <div class="item"> -->
    <!-- <p>项目合作</p>
        <p>Start a project</p>
        <span>contact@dakhaandesign.com</span>
      </div>
      <div class="item">
        <p>媒体合作</p>
        <p>Publish our work</p>
        <span>press@dakhaandesign.com</span>
      </div>
      <div class="item">
        <p>加入我们</p>
        <p>Join us</p>
        <span>jobs@dakhaandesign.com</span>
      </div>
    </div> -->

    <!-- 品牌网站 -->
    <div class="email">
      <div class="item">
        <p>项目合作</p>
        <p>Start a project</p>
        <span>contact@dakhaanliving.com</span>
      </div>
      <div class="item">
        <p>媒体合作</p>
        <p>Publish our work</p>
        <span>press@dakhaanliving.com</span>
      </div>
      <div class="item">
        <p>加入我们</p>
        <p>Join us</p>
        <span>jobs@dakhaanliving.com</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.email-container {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  .email {
    width: 100%;
    box-sizing: border-box;
    padding: 0px 140px;
    display: flex;
    justify-content: space-between;
    .item {
      color: @k60;
      p {
        font-size: 36px;
        color: inherit;
        line-height: 55px;
        letter-spacing: 2px;
      }
      span {
        display: block;
        box-sizing: border-box;
        padding-top: 40px;
        font-size: 24px;
        color: inherit;
      }
    }
  }
}

@media (min-width: 1100px) and (max-width: 1440px) {
  .email-container {
    position: relative;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    .email {
      box-sizing: border-box;
      width: 100%;
      padding: 0px 80px;
      display: flex;
      justify-content: space-between;
      .item {
        color: @k60;
        p {
          font-size: 26px;
          color: inherit;
          line-height: 40px;
          letter-spacing: 2px;
        }
        span {
          display: block;
          box-sizing: border-box;
          padding-top: 30px;
          font-size: 20px;
          color: inherit;
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1099px) {
  .email-container {
    position: relative;
    height: auto;
    display: block;
    box-sizing: border-box;
    padding: 40px 0 60px 0;
    .email {
      box-sizing: border-box;
      width: 100%;
      height: auto;
      padding: 0px 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .item {
        color: @k60;
        padding: 50px 0;
        p {
          font-size: 26px;
          color: inherit;
          line-height: 40px;
          letter-spacing: 2px;
        }
        span {
          display: block;
          box-sizing: border-box;
          padding-top: 20px;
          font-size: 18px;
          color: inherit;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .email-container {
    position: relative;
    height: auto;
    display: block;
    box-sizing: border-box;
    padding: 40px 0 60px 0;
    .email {
      box-sizing: border-box;
      width: 100%;
      height: auto;
      padding: 0px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .item {
        color: @k60;
        padding: 36px 0;
        p {
          font-size: 20px;
          color: inherit;
          line-height: 34px;
          letter-spacing: 1px;
        }
        span {
          display: block;
          box-sizing: border-box;
          padding-top: 18px;
          font-size: 14px;
          color: inherit;
        }
      }
    }
  }
}
</style>