<template>
  <div class="shoping-container">
    <h1>线上商城</h1>
    <div class="shop" v-for="shop in onlineShops" :key="shop.id">
      <div class="left">
        <h3 class="title">{{ shop.platform }}</h3>
        <div class="info">{{ shop.name }}</div>
      </div>
      <div class="right">
        <a class="link" :href="shop.shop_link" v-if="shop.shop_link"
          >点击进入店铺</a
        >
        <img class="qrcode" :src="shop.image_url" alt="" v-else />
      </div>
    </div>

    <h1>实体店铺</h1>
    <div class="shop offline" v-for="shop in offlineShops" :key="shop.id">
      <div class="left">
        <h3 class="title">{{ shop.name }}</h3>
        <div class="info">
          <div class="address">
            {{ shop.address }}
          </div>
          <span class="open-hours">{{ shop.open_hours }}</span> |
          <span class="phone">{{ shop.mobile }}</span>
          <span class="contact"> {{ shop.contact }}</span>
        </div>
      </div>
      <div class="right">
        <img class="image" :src="shop.image_url" alt="" />
      </div>
    </div>
  </div>
</template>


<script>
import { getShops } from "../../api/shop.js";
export default {
  data() {
    return {
      onlineShops: [],
      offlineShops: [],
    };
  },

  async created() {
    await this.fetchData();
  },

  methods: {
    async fetchData() {
      const res = await getShops().then((res) => res.data);
      this.onlineShops = res.filter((it) => it.type === "online");
      this.offlineShops = res.filter((it) => it.type === "offline");
    },
  },
};
</script>



<style lang="less" scoped>
@import "~@/styles/var.less";

.shoping-container {
  box-sizing: border-box;
  padding: 40px 2rem 0px 2rem;
  color: @k60;
  letter-spacing: 2px;
  h1 {
    font-size: 36px;
    color: @k60;
    font-weight: 600;
    box-sizing: border-box;
    padding: 90px 0 0 0;
  }
  .shop {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid @k60;
    box-sizing: border-box;
    padding: 0 0 26px 0;
    &:last-child {
      border-bottom: 1px solid transparent;
    }
    .left {
      padding-right: 40px;
      .title {
        color: inherit;
        font-size: 28px;
        font-weight: 500;
        box-sizing: border-box;
        padding: 90px 0;
      }
      .info {
        font-size: 16px;
        .address {
          margin-bottom: 10px;
        }
        .contact {
          padding-left: 6px;
        }
      }
    }
    .right {
      box-sizing: border-box;
      padding-top: 90px;
      font-size: 16px;
      position: relative;
      .link:hover {
        color: @k90;
      }
      .qrcode {
        box-sizing: border-box;
        width: 160px;
        height: 160px;
        object-fit: cover;
        bottom: 0;
        left: 0;
      }
      .image {
        box-sizing: border-box;
        width: 320px;
        max-height: 200px;
        object-fit: cover;
        bottom: 0;
        left: 0;
        // height: 160px;
      }
    }
  }
  .offline {
    padding: 0 0 90px 0;
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .shoping-container {
    padding: 20px 2rem 0px 2rem;
    color: @k60;
    letter-spacing: 2px;
    h1 {
      font-size: 32px;
      color: @k60;
      font-weight: 600;
      box-sizing: border-box;
      padding: 90px 0 0 0;
    }
    .shop {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-bottom: 1px solid @k60;
      padding: 0 0 26px 0;
      .left {
        box-sizing: border-box;
        padding-right: 40px;
        .title {
          color: inherit;
          font-size: 26px;
          font-weight: 500;
          box-sizing: border-box;
          padding: 90px 0;
        }
        .info {
          font-size: 16px;
          .address {
            margin-bottom: 10px;
          }
          .contact {
            padding-left: 6px;
          }
        }
      }
      .right {
        font-size: 16px;
        padding-top: 90px;
        position: relative;
        box-sizing: border-box;

        .link:hover {
          color: @k90;
        }
        .qrcode {
          width: 160px;
          bottom: 0;
          left: 0;
          height: 160px;
          object-fit: cover;
        }
        .image {
          box-sizing: border-box;
          width: 160px;
          height: auto;
          bottom: 0;
          left: 0;
          object-fit: cover;
          // height: 160px;
        }
      }
    }
    .offline {
      padding: 0 0 90px 0;
    }
  }
}

@media (max-width: 767px) {
  .shoping-container {
    padding: 20px 24px 0px 24px;
    color: @k60;
    letter-spacing: 2px;
    h1 {
      font-size: 28px;
      color: @k60;
      font-weight: 600;
      box-sizing: border-box;
      padding: 70px 0 0 0;
    }
    .shop {
      display: block;
      border-bottom: 1px solid @k60;
      padding: 0 0 26px 0;
      .left {
        box-sizing: border-box;
        padding-right: 40px;
        .title {
          color: inherit;
          font-size: 20px;
          font-weight: 600;
          line-height: 30px;
          box-sizing: border-box;
          padding: 50px 0;
        }
        .info {
          font-size: 16px;
          line-height: 30px;
          .address {
            margin-bottom: 10px;
          }
          .contact {
            padding-left: 6px;
          }
        }
      }
      .right {
        font-size: 16px;
        box-sizing: border-box;
        padding-top: 30px;
        .link:hover {
          color: @k90;
        }
        .qrcode {
          width: 160px;
          height: 160px;
          object-fit: cover;
        }
        .image {
          object-fit: cover;
          width: 160px;
          height: auto;
          // height: 160px;
        }
      }
    }
    .offline {
      padding: 0 0 70px 0;
    }
  }
}
</style>