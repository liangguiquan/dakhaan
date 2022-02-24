import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    showMenu: false,  // 是否显示菜单
    showSubMenu:false, // 是否显示子菜单，当点击关闭按钮时，设置为false不显示。
  },
  mutations: {
    // 切换是否显示
    changeShowMenu(state, payload) {
      state.showMenu = payload;
    },
    changeShowSubMenu(state, payload) {
      state.showSubMenu = payload;
    },
  },
  actions: {
  },
})
