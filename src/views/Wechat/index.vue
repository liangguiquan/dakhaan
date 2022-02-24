<template>
  <div class="qrcode-container">
    <img :src="Qrcode" alt="" />
  </div>
</template>

<script>
import Qrcode from "../../assets/images/code.jpg";
export default {
  data() {
    return {
      Qrcode,
    };
  },
};
</script>

<style lang="less" scoped>
.qrcode-container {
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 60px 0 90px 0;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .qrcode-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 280px;
      height: 280px;
    }
  }
}

@media (max-width: 768px) {
  .qrcode-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
      height: 200px;
    }
  }
}
</style>