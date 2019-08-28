// 创建一个routeu实例  导出给main使用
import Vue from 'vue'
// 导入
import VueRouter from 'vue-router'

import Login from '../views/login'
import Home from '../views/home'
import Welcome from '../views/welcome'

import NotFound from '../views/404'
import store from '../views/store'

import Article from '../views/article'
// 注册
Vue.use(VueRouter)
// 初始化router对象
const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login },

    {
      path: '/',
      component: Home,
      children: [
        { path: '/', name: 'welcome', component: Welcome },
        { path: '/article', name: 'article', component: Article }
      ]
    },
    { path: '*', name: '404', component: NotFound }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !store.getUser().token) return next('/login')
  next()
})
// 导出
export default router
