<template>
  <div class="footer-container" ref="footer">
    <!--  上 -->
    <div class="top">
      <div class="address">
        <p>公司地址</p>
        <p>Our address:</p>
        <p>广东省广州市海珠区工业大道南882号B14栋</p>
        <p>building b14,no.882 south industrial avenue,haizhu district,</p>
        <p>guangzhou city,guangdong province</p>
      </div>

      <div class="contact">
        <p>欢迎联系</p>
        <p>Please feel free to send us an email:</p>
        <p>contact@dakhaanliving.com</p>
        <p>press@dakhaanliving.com</p>
        <p>jobs@dakhaanliving.com</p>
      </div>
    </div>

    <!-- 中 -->
    <div class="middle">
      <div class="code-container">
        <div class="code">
          <img :src="officialAccount" alt="" />
          <p>得闲设计公众号</p>
          <p>wechat official account</p>
        </div>
        <div class="code">
          <img :src="miniapp" alt="" />
          <p>得闲小程序商城</p>
          <p>wechat mini program</p>
        </div>
        <div class="code">
          <img :src="redbook" alt="" />
          <p>小红书</p>
          <p>red book</p>
        </div>
      </div>
      <div class="icon-container">
        <a class="icon taobao" target="_blank" href="https://dakhaan.taobao.com"></a>
        <a class="icon ins" target="_blank" href="https://www.instagram.com/dakhaanliving"></a>
        <a
          class="icon pinterest"
          target="_blank"
          href="https://www.pinterest.com/DakHaanLiving/dakhaanliving"
        ></a>
        <a class="icon behance" target="_blank" href="http://www.behance.net/dakhaanliving"></a>
      </div>
    </div>

    <!-- 下 -->
    <div class="bottom">
      <span>Design In Canton · </span>
      <span>DakHaan  ICP证：</span>
      <!-- <span>ICP证：</span> -->
      <a target="_blank" href="https://beian.miit.gov.cn">
      粤ICP备2021176278号</a>
    </div>
  </div>
</template>



<script>
import redbook from "../../assets/images/redbook.jpg";
import officialAccount from "../../assets/images/official-account.jpg";
import miniapp from "../../assets/images/miniapp.png";

export default {
  name: "Footer",

  data() {
    return {
      redbook,
      officialAccount,
      miniapp,
    };
  },

  created() {
    this.$bus.$on("toFooter", this.handleToFooter);
  },

  methods: {
    handleToFooter() {
      // console.log(111);
      this.$refs.footer.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },
};
</script>


<style lang="less" scoped>
@import "~@/styles/var.less";

.footer-container {
  box-sizing: border-box;
  padding: 0px 90px 90px 90px;
  font-size: 14px;
  line-height: 34px;
  color: @k60;
  width: 100%;
  // background: rgb(171, 208, 214);
  font-weight: lighter;

  &::before {
    display: block;
    content: "";
    border-top: 1px solid @k50;
  }

  .top {
    box-sizing: border-box;
    padding: 100px 0 0 0;
    display: flex;
    justify-content: space-between;
    .address {
      width: 50%;
      flex: 1 0 auto;
      p:first-child,
      p:nth-child(2) {
        color: @k90;
        font-size: 16px;
      }
    }
    .contact {
      flex: 0 0 auto;
      text-align: right;
      p:first-child,
      p:nth-child(2) {
        color: @k90;
        font-size: 16px;
      }
    }
  }

  .middle {
    display: flex;
    justify-content: space-between;
    line-height: 14px;
    width: 100%;

    box-sizing: border-box;
    padding: 50px 0 60px 0;
    .code-container {
      box-sizing: border-box;
      padding: 0 55px 0 0;
      display: flex;
      width: 50%;
      justify-content: space-between;
      .code {
        // width: 160px;
        text-align: center;
        img {
          width: 1.5rem;
          height: 1.5rem;
        }
        p:nth-of-type(1) {
          display: block;
          color: @k90;
          word-wrap: nowrap;
          padding: 24px 0 0 0;
        }
        p:nth-of-type(2) {
          color: @k90;
          display: block;
          word-wrap: nowrap;
          padding: 18px 0 0 0;
        }
      }
    }

    .icon-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .icon {
        width: 30px;
        height: 30px;
        display: block;
        background-size: 140px;
        background-repeat: no-repeat;
        margin-left: 30px;
        transition: 0.7s;
      }
      .taobao {
        background-image: url("~@/assets/images/icon1.png");
        background-position: 0px 0px;
      }
      .taobao:hover {
        background-image: url("~@/assets/images/icon2.png");
        background-position: 0px 0px;
      }
      .ins {
        background-image: url("~@/assets/images/icon1.png");
        background-position: -35px 0px;
      }
      .ins:hover {
        background-image: url("~@/assets/images/icon2.png");
        background-position: -35px 0px;
      }
      .pinterest {
        background-image: url("~@/assets/images/icon1.png");
        background-position: -70px 0px;
      }
      .pinterest:hover {
        background-image: url("~@/assets/images/icon2.png");
        background-position: -70px 0px;
      }
      .behance {
        background-image: url("~@/assets/images/icon1.png");
        background-position: -105px 0px;
      }
      .behance:hover {
        background-image: url("~@/assets/images/icon2.png");
        background-position: -105px 0px;
      }
    }
  }

  .bottom {
    font-size: 14px;
    text-align: center;
    border-top: 1px solid @k60;
    box-sizing: border-box;
    padding-top: 6px;
  }
}

@media (min-width: 768px) and (max-width: 1250px) {
  .footer-container {
    box-sizing: border-box;
    padding: 0px 90px 90px 90px;
    font-size: 14px;
    line-height: 34px;
    color: @k60;
    width: 100%;
    font-weight: lighter;

    &::before {
      display: block;
      content: "";
      border-top: 1px solid @k50;
    }

    .top {
      box-sizing: border-box;
      padding: 100px 0 90px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .address {
        text-align: center;
        width: 100%;
        padding-top: 90px;
        order: 2;
        p:first-child,
        p:nth-child(2) {
          color: @k90;
          font-size: 16px;
        }
      }
      .contact {
        order: 1;
        text-align: center;
        p:first-child,
        p:nth-child(2) {
          color: @k90;
          font-size: 16px;
        }
      }
    }

    .middle {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 14px;
      width: 100%;
      box-sizing: border-box;
      padding: 0 0 60px 0;
      .code-container {
        box-sizing: border-box;
        padding: 0;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
        .code {
          text-align: center;
          padding-bottom: 90px;
          img {
            width: 120px;
            height: 120px;
          }
          p:nth-of-type(1) {
            display: block;
            color: @k90;
            word-wrap: nowrap;
            padding: 24px 0 0 0;
          }
          p:nth-of-type(2) {
            color: @k90;
            display: block;
            word-wrap: nowrap;
            padding: 18px 0 0 0;
          }
        }
      }

      .icon-container {
        display: flex;
        justify-content: space-between;
        width: 210px;
        .icon {
          width: 30px;
          height: 30px;
          display: block;
          background-size: 140px;
          background-repeat: no-repeat;
          margin-left: 0;
          transition: 0.7s;
        }
      }
    }

    .bottom {
      font-size: 14px;
      border: none;
      text-align: center;
      box-sizing: border-box;
      padding-top: 6px;
    }
  }
}

@media (max-width: 767px) {
  .footer-container {
    box-sizing: border-box;
    padding: 0px 24px 90px 24px;
    font-size: 14px;
    line-height: 34px;
    color: @k60;
    width: 100%;
    font-weight: lighter;

    &::before {
      display: block;
      content: "";
      border-top: 1px solid @k50;
    }

    .top {
      box-sizing: border-box;
      padding: 90px 0 90px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .address {
        text-align: center;
        width: 100%;
        padding-top: 90px;
        order: 2;
        p:first-child,
        p:nth-child(2) {
          color: @k90;
          font-size: 16px;
        }
      }
      .contact {
        order: 1;
        text-align: center;
        p:first-child,
        p:nth-child(2) {
          color: @k90;
          font-size: 16px;
        }
      }
    }

    .middle {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 14px;
      width: 100%;
      box-sizing: border-box;
      padding: 0 0 60px 0;
      .code-container {
        box-sizing: border-box;
        padding: 0;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
        .code {
          text-align: center;
          padding-bottom: 90px;
          img {
            width: 120px;
            height: 120px;
          }
          p:nth-of-type(1) {
            display: block;
            color: @k90;
            word-wrap: nowrap;
            padding: 24px 0 0 0;
          }
          p:nth-of-type(2) {
            color: @k90;
            display: block;
            word-wrap: nowrap;
            padding: 18px 0 0 0;
          }
        }
      }

      .icon-container {
        display: flex;
        justify-content: space-between;
        width: 210px;
        .icon {
          width: 30px;
          height: 30px;
          display: block;
          background-size: 140px;
          background-repeat: no-repeat;
          margin-left: 0;
          transition: 0.7s;
        }
      }
    }

    .bottom {
      font-size: 14px;
      border: none;
      text-align: center;
      box-sizing: border-box;
      padding-top: 6px;
      span {
        display: block;
      }
    }
  }
}
</style>