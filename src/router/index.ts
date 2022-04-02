import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/p-home.vue'
// import Integration from '../pages/p-integration.vue'
// import NotFound from '../pages/p-not-found.vue'

// const Home = () => import('../pages/p-home.vue')
// const Integration = () => import('../pages/p-integration.vue')
// const NotFound = () => import('../pages/p-not-found.vue')

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
    path: '/tools',
    component: () => import('@/pages/p-tools.vue'),
    name: 'tools',
    meta: { title: 'Tools' },
  },
  {
    path: '/blog',
    component: import('../pages/p-blog.vue'),
    name: 'blog',
    meta: {
      title: 'Blog',
    },
  },
  // {
  //   path: '/integration/:name',
  //   component: Integration,
  //   name: 'integration',
  //   meta: {
  //     title: 'Integration',
  //   },
  // },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../pages/p-not-found.vue'),
    name: 'not-found',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
