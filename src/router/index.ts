import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../pages/p-home.vue')
const Integration = () => import('../pages/p-integration.vue')
const NotFound = () => import('../pages/p-not-found.vue')

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
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    name: 'not-found',
  },
]

const router = createRouter({
  history: createWebHistory('/shopflex/'),
  routes,
})

export default router
