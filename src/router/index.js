import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    { path: '/check', component: () => import('@/views/CheckPage.vue') },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/layout/HomePage.vue')
        },
        {
          path: 'web',
          component: () => import('@/views/layout/WebPage.vue')
        },
        {
          path: 'android',
          component: () => import('@/views/layout/AndroidPage.vue')
        },
        {
          path: 'ios',
          component: () => import('@/views/layout/IosPage.vue')
        },
        {
          path: 'server',
          component: () => import('@/views/layout/ServerPage.vue')
        },
      ]
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
