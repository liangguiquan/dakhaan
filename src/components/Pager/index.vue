<template>
  <!-- 页数只有大于1时，才显示 -->
  <div class="pager-container" v-if="pageNumber >= 1">
    <!-- <a :class="{ disabled: current === 1 }" @click="handleClick(1)">首页</a> -->
    <a :class="{ disabled: current === 1 }" @click="handleClick(current - 1)">
      <img :src="arrowLeft" alt="" />
    </a>

    <a
      v-for="n in numbers"
      :key="n"
      :class="{ active: current === n }"
      v-on:click="handleClick(n)"
      >{{ n }}</a
    >

    <!-- v-on:click="handleClick($event)" 这种带括号的事件注册，$event是事件参数-->
    <!-- v-on:click="handleClick" 这种不带括号的事件注册，默认e是事件参数-->

    <a
      :class="{ disabled: current === pageNumber }"
      @click="handleClick(current + 1)"
    >
      <img :src="arrowRight" alt="" />
    </a>
    <!-- <a :class="{ disabled: current === pageNumber }" @click="handleClick(pageNumber)">尾页</a> -->
  </div>
</template>

<script>
// 分页组件
import arrowLeft from "@/assets/images/arrowLeft.png";
import arrowRight from "@/assets/images/arrowRight.png";

export default {
  data() {
    return {
      arrowLeft,
      arrowRight,
    };
  },
  props: {
    current: {
      // 当前的页码
      type: Number,
      default: 1,
    },
    total: {
      // 总数量
      type: Number,
      default: 0,
    },
    limit: {
      // 每一页中的数量
      type: Number,
      default: 10,
    },
    visibleNumber: {
      // 可见的页数
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style scoped lang="less">
// 在样式中  ~@  代表src文件夹
// 在脚本中  @  代表src文件夹
@import "~@/styles/var.less";

// pc
.pager-container {
  display: flex;
  justify-content: center;
  // background-color: rgb(198, 227, 228);
  box-sizing: border-box;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 16px;
    cursor: pointer;
    color: @k60;
    font-size: 28px;
    // font-weight: lighter;
    &.disabled {
      color: @k60;
      cursor: not-allowed;
    }
    &.active {
      color: @k90;
      cursor: text;
      // font-weight: normal;
    }
    img {
      width: 24px;
      margin-top: 10px;
    }
  }
}

// 平板
@media (min-width: 768px) and (max-width: 1280px) {
  .pager-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a {
      color: @primary;
      margin: 0 14px;
      cursor: pointer;
      color: @k60;
      font-size: 18px;
      // font-weight: lighter;
      &.disabled {
        color: @k60;
        cursor: not-allowed;
      }
      &.active {
        color: @k90;
        cursor: text;
        // font-weight: normal;
      }
      img {
        width: 18px;
        margin-top: 4px;
      }
    }
  }
}

// 小于768的，都视为手机
@media (max-width: 767px){
.pager-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a {
      color: @primary;
      margin: 0 14px;
      cursor: pointer;
      color: @k60;
      font-size: 14px;
      // font-weight: lighter;
      &.disabled {
        color: @k60;
        cursor: not-allowed;
      }
      &.active {
        color: @k90;
        cursor: text;
        // font-weight: normal;
      }
      img {
        width: 12px;
        margin-top: 2px;
      }
    }
  }
}
</style>