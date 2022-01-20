import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../pages/home/index.vue')
const NotFound = () => import('../pages/404/index.vue')

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: {
      title: 'Home',
    },
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
