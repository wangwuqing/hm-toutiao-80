import Vue from 'vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import './styles/index.less'

import App from './App.vue'
// @是vue-cli 提供的src绝对路径别名
import router from './router/routeu'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',

  router,

  render: h => h(App)

}).$mount('#app')
