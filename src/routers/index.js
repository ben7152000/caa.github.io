import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/subject',
    name: 'Subject',
    component: () => import('../views/subject.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
