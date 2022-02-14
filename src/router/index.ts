import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../pages/p-home.vue')

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: {
      title: 'Home',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
