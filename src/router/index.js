import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue')
    }
  ]
})

//身份验证失败就跳转登录页
router.beforeEach(to => {
  const userStore = useUserStore()
  if(!userStore.token && to.path !== '/login') {
    return '/login'
  }
})

export default router
