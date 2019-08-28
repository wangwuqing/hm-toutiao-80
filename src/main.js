import Vue from 'vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import './styles/index.less'

import App from './App.vue'
// @是vue-cli 提供的src绝对路径别名
import router from './router/routeu'

// 简单配置axios
import axios from './api'
Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({

  router,

  render: h => h(App)

}).$mount('#app')
