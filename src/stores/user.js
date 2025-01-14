import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const setToken = (t) => {token.value = t}

  return { token, setToken }
},
{
  persist: true //持久化
})
