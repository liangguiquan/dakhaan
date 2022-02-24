import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './eventBus'

import './styles/global.less'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import {VueMasonryPlugin} from 'vue-masonry'
Vue.use(VueMasonryPlugin);

// 注册全局指令
import vLoading from '@/directives/loading'
Vue.directive('loading', vLoading);
import vLazy from '@/directives/lazy'
Vue.directive('lazy', vLazy);

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
