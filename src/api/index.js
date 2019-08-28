// 引入
import axios from 'axios'
import store from '../views/store'

// import router from '../router'

// 配置
// 基准地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 请求头token

// axios.defaults.headers.Authorization = `Bearer ${store.getUser().token}`
// 请求拦截器
axios.interceptors.request.use(config => {
// 修改配置 加token
  config.headers.Authorization = `Bearer ${store.getUser().token}`
  return config
}, (err) => {
  return Promise.reject(err)
})
// 响应拦截器
axios.interceptors.response.use(res => res, err => {
// 1.获取状态码
  // const status = err.response.status
  // 2.判断404
  if (err.response.status === 401) {
    // 3.清除无效token
    // store.delUser()
    // router.push('/login')
    location.hash = '#/login'
  }
  return Promise.reject(err)
})

export default axios
