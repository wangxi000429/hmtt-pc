// 提供存储用户信息相关的API
// 约定：一个头部的key key = 'hmtt-pc-user-key'
const KEY = 'hmtt-pc-user-key'
const local = {
  // 存储
  setUser (user) {
    // 把user对象转成json字符串
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  // 获取
  getUser () {
    const jsonStr = window.sessionStorage.getItem(KEY)
    return JSON.parse(jsonStr)
    // 把通过key 得到的json字符串转成 对象
  },
  // 清除
  delUser () {
    window.sessionStorage.removeItem(KEY)
  }
}
export default local
