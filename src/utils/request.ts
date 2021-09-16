import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { store } from '@/store'
import router from '@/router/'
// 如果直接只使用import router from '@/router'， 引用时可能会导致router.d.ts与router/index.ts混淆

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASEURL
  // baseURL: '/admin' //可能存在多个域名，因此不建议在这里配置
}) // 相当于clone对象

// request 不支持泛型
// request.get、post、put支持响应式数据泛型
// 由于我们的后端又包装了一层数据data, 导致我们访问数据比较麻烦,所以我们自己封装了一个request

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置用户身份token
  const user = store.state.user
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// 控制处理登录过期的锁
let isRefreshing = false
// 响应拦截器
request.interceptors.response.use(function (response) {
  // 统一处理接口响应错误，比如token过期无效，服务端异常等
  // 自定义状态码处理
  // if (response.data.status && response.data.status !== 200) {
  //   ElMessage.error(response.data.msg || '请求失败，请稍后重试')
  //   return Promise.reject(response.data)
  // }
  // return response
  const status = response.data.status
  if (!status || status === 200) {
    return response
  }
  // 错误情况, 比如token无效...
  // 统一处理登录过期
  if (status === 410000) {
    if (isRefreshing) {
      return Promise.reject(response)
    }
    isRefreshing = true
    ElMessageBox.confirm('您的登录已过期，您可以取消停留在此页面，或确认重新登录', '登录过期', {
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    }).then(() => {
    // 清除本地过期的登录状态
      store.commit('setUser', null)
      // 跳转到登录页面
      router.push({
        name: 'login',
        query: {
          redirect: router.currentRoute.value.fullPath
        }
      })
    // 抛出异常
    }).finally(() => {
      isRefreshing = false // 释放锁
    })
    // 在内部消化掉这个业务异常
    return Promise.reject(response)
  }
  // 其他错误情况
  ElMessage.error(response.data.msg || '请求失败，请稍后重试')
  return Promise.reject(response.data)
}, function (error) {
  // http状态码处理
  return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    // 在获取图片数据时，数据是二进制只有res.data,没有res.data.data,因此这里我们使用或运算
    return (res.data.data || res.data) as T
  })
}
