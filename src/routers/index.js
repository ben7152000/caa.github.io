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
    path: '/subjects',
    name: 'Subjects',
    component: () => import('../views/subjects.vue')
  },
  {
    path: '/subjects/:testTopic',
    name: "Subject",
    component: () => import('../views/subject.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
