import axios from 'axios'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const baseURL = 'http://127.0.0.1:3008'

//配置基地址，超时时间
const instance = axios.create({
  baseURL: baseURL,
  timeout: 100000
})

//在请求头上添加token
instance.interceptors.request.use(
  config => {
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

//处理业务失败，摘取核心响应数据，处理401错误
instance.interceptors.response.use(
  res => {
    // 检查 res.data.status 而不是 res.data.code
    if (res.status === 200 && res.data.status === 0) {
      return res
    }
    return res
  },
  err => {
    const { status, data } = err.response || {}
    const errorMessage = data?.message || '发生未知错误'

    if (status === 401) {
      router.push('/login')
    }

    // 返回一个包含状态码和错误信息的对象
    return Promise.reject({
      status,
      message: errorMessage
    })
  }
)

export default instance
export { baseURL }
