
<template>
  <div class="header-container" :style="{ background: bgColor }">
    <!--  logo -->
    <div class="logo">
      <Logo :url="logoSrc" />
    </div>

    <!-- 菜单按钮 -->
    <div class="menuBtn" :class="menuBtnClass" @click="handleClick">
      <img :src="menuBtnSrc" alt="" />
    </div>

    <!-- 菜单 -->
    <div class="menu" v-show="showMenu">
      <Menu />
    </div>
  </div>
</template>

<script>
import Logo from "../Logo";
import Button from "../Button";
import Menu from "../Menu";

import LogoWhite from "../../assets/images/logowhite.png";
import LogoBlack from "../../assets/images/logoblack.png";
import MenuBlack from "../../assets/images/menu1.png";
import MenuWhite from "../../assets/images/menu2.png";
import Close from "../../assets/images/close.png";

export default {
  components: {
    Logo,
    Button,
    Menu,
  },
  data() {
    return {
      logoSrc: LogoWhite, // logo的颜色
      menuBtnSrc: MenuWhite, // 菜单按钮的颜色样式
      bgColor: "rgba(255, 255, 255, 0)", // 背景的颜色
      allowChange: true, // header的颜色是不是不能改变，因为有些页面颜色不需要改变
      menuBtnClass: "",
    };
  },
  computed: {
    showMenu() {
      // 是否显示菜单
      return this.$store.state.showMenu;
    },
  },

  watch: {
    // 监听window的滚动事件，根据滚动的距离设置header的背景色，切换logo，切换菜单按钮的样式
    $route(to, from) {
      window.removeEventListener("scroll", this.handleScroll);
      window.addEventListener("scroll", this.handleScroll);
      // console.log(to, from);

      // 以下页面，header的颜色都不用改变，一直是black的
      if (
        to.name === "About" ||
        to.name === "Shopping" ||
        to.name === "Contact" ||
        to.name === "Email" ||
        to.name === "Wechat"
      ) {
        this.allowChange = false;
        this.bgColor = "rgba(255, 255, 255, 1)";
        this.logoSrc = LogoBlack;
        this.menuBtnSrc = MenuBlack;
        this.menuBtnClass = "";
      } else {
        this.allowChange = true;
        this.bgColor = "rgba(255, 255, 255, 0)";
        this.logoSrc = LogoWhite;
        this.menuBtnSrc = MenuWhite;
        this.menuBtnClass = "";
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll, true);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    /** 点击切换是否显示菜单
     *  参数：show  boolean
     */
    handleChangeShowMenu(show) {
      this.$store.commit("changeShowMenu", show);
    },

    handleClick() {
      this.handleChangeShowMenu(!this.showMenu); // 修改是否要显示menu
      // 显示菜单的情况
      if (this.showMenu) {
        this.bgColor = "rgba(255, 255, 255, 1)";
        this.logoSrc = LogoBlack;
        this.menuBtnSrc = Close;
        this.menuBtnClass = "close";
      }
      // 不显示菜单的情况
      else {
        this.menuBtnClass = "";
        // 不能改变header颜色的页面，才要进入下面的代码
        if (!this.allowChange) {
          // 关闭按钮要变回黑色的菜单按钮
          this.menuBtnSrc = MenuBlack;
        } else {
          // 能改变header颜色的页面，触发事件，重新设置颜色
          window.scrollBy(0, 1);
        }
      }
    },

    // 滚动事件处理
    handleScroll() {
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight; // 容器的高度
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop; // 滚动的距离
      // console.log(clientHeight, scrollTop);
      // 可以改变header颜色的页面，并且在不显示菜单的情况下
      // console.log(this.allowChange, this.showMenu);
      if (this.allowChange && !this.showMenu) {
        this.menuBtnClass = "";
        if (scrollTop <= clientHeight - 90) {
          this.bgColor = "rgba(255, 255, 255, 0)";
          this.logoSrc = LogoWhite;
          this.menuBtnSrc = MenuWhite;
        } else {
          this.bgColor = "rgba(255, 255, 255, 1)";
          this.logoSrc = LogoBlack;
          this.menuBtnSrc = MenuBlack;
        }
      } else if (this.showMenu) {
        // 显示菜单的情况下，一直保持以下状态
        this.bgColor = "rgba(255, 255, 255, 1)";
        this.logoSrc = LogoBlack;
        this.menuBtnSrc = Close;
        this.menuBtnClass = "close";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.header-container {
  position: relative;
  height: 1.6rem;
  width: 100%;
  .logo {
    position: absolute;
    top: 0.9rem;
    left: 0.9rem;
  }

  .menuBtn {
    position: absolute;
    top: 0.9rem;
    right: 0.9rem;
    width: 0.44rem;
    height: 0.35rem;
    font-size: 0;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .close {
    width: 0.44rem;
    height: 0.35rem;
    font-size: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .menu {
    position: absolute;
    top: 1.6rem;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    .menu-container{
      width: 100%;
      height: 100%;
    }
  }
}

@media (min-width: 768px) and (max-width: 1280px) {
  .header-container {
    position: relative;
    height: 108px;
    width: 100%;
    .logo {
      position: absolute;
      top: 48px;
      left: 48px;
    }

    .menuBtn {
      position: absolute;
      top: 48px;
      right: 48px;
      width: 23px;
      height: 19px;
      font-size: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .close {
      width: 23px;
      height: 19px;
      font-size: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .button-container {
      width: 23px;
      height: 19px;
    }

    .menu {
      position: absolute;
      top: 108px;
      left: 0;
      width: 100%;
      height: 100vh;
      background: #fff;
    }
    .menu-container {
      width: 100%;
      height: 100%;
    }
  }
}

@media (max-width: 767px) {
  .header-container {
    position: relative;
    height: 98px;
    width: 100%;
    .logo {
      position: absolute;
      top: 40px;
      left: 24px;
    }

    .menuBtn {
      position: absolute;
      top: 40px;
      right: 24px;
      width: 23px;
      height: 19px;
      font-size: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .close {
      width: 23px;
      height: 19px;
      font-size: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .button-container {
      width: 23px;
      height: 19px;
    }

    .menu {
      position: absolute;
      top: 98px;
      left: 0;
      width: 100%;
      height: 100vh;
      background: #fff;
    }
    .menu-container {
      width: 100%;
      height: 100%;
    }
  }
}
</style>