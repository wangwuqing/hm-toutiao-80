// 创建一个routeu实例  导出给main使用
import Vue from 'vue'
// 导入
import VueRouter from 'vue-router'

import Login from '../views/login/index.vue'
// 注册
Vue.use(VueRouter)
// 初始化router对象
const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login }
  ]
})
// 导出
export default router
