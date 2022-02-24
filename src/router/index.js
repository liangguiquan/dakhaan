import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // // 动态
  // {
  //   path: '/events',
  //   name: 'Events',
  //   component: () => import('../views/Cate')
  // },
  // // 报道
  // {
  //   path: '/press',
  //   name: 'Press',
  //   component: () => import('../views/Cate')
  // },

  // 分类页 
  {
    path: '/cate/:categoryName',
    name: 'Cate',
    component: () => import('../views/Cate')
  },

  // shopping购买
  {
    path: '/shopping',
    name: 'Shopping',
    component: () => import('../views/Shopping')
  },

  // 关于
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  },

  // // 联系
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: () => import('../views/Contact')
  // },
  // // email
  // {
  //   path: '/contact/email',
  //   name: 'Email',
  //   component: () => import('../views/Email')
  // },
  //   // qrcode
  //   {
  //     path: '/contact/wechat',
  //     name: 'Wechat',
  //     component: () => import('../views/Wechat')
  //   },

  // 详情页
  {
    path: '/details/:categoryName',
    name: 'details',
    component: () => import('../views/Details')
  },

  //     // 详情页
  // {
  //   path: '/:categoryName',
  //   name: 'details',
  //   component: () => import('../views/Details')
  // },


]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  // base: '/dakhaan/',
  // base: process.env.NODE_ENV === 'production' ? '/dakhaan/' : '/',
  base: process.env.NODE_ENV === 'production' ? '/dakhaan/' : process.env.BASE_URL,

  routes,
  scrollBehavior: () => ({ y: 0 }),
})


// 以下代码解决了当前路由重复问题，即from === to时，会报错，加了一下代码可以解决这个问题
// const originalReplace = VueRouter.prototype.replace;
// VueRouter.prototype.replace = function replace(location){
//   return originalReplace.call(this, location).catch(err => err);
// }

// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location){
//   return originalPush.call(this, location).catch(err => err);
// }

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}




export default router
