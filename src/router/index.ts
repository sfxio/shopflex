import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../pages/p-home.vue')
const Integration = () => import('../pages/p-integration.vue')

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/integration/:name',
    component: Integration,
    name: 'integration',
    meta: {
      title: 'Integration',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
