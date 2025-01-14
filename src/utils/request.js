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

//处理业务失败，摘取核心响应数据
instance.interceptors.response.use(
  res => {
    if(res.status === 200) {
      return res
    }
  },
  err => {
    if (err.response?.status === 401) {
      router.push('/login')
    }
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
