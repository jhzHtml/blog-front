import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home/index.vue'),
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import('@/views/Message/index.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About/index.vue'),
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: () => import('@/views/Timeline/index.vue'),
    },
    {
      path: '/chatRoom',
      name: 'ChatRoom',
      component: () => import('@/views/ChatRoom/index.vue'),
    },
  ],
})

export default router
