const KEY = 'hm-toutiao-80-user'

export default {
  setUser (user) {
    // 存储用户信息
    // user 数据类型 对象
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  getUser () {
    // 获取用户的信息
    const jsonStr = window.sessionStorage.getItem(KEY) || '{}'
    return JSON.parse(jsonStr)
  },
  delUser () {
    // 删除用户
    window.sessionStorage.removeItem(KEY)
  }
}
