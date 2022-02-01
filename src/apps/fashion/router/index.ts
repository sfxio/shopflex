import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../pages/home/index.vue')
const Auth = () => import('../pages/auth/index.vue')
const Collection = () => import('../pages/collection/index.vue')
const CollectionId = () => import('../pages/collection/_id.vue')
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
  {
    path: '/auth',
    component: Auth,
    name: 'auth',
    meta: {
      title: 'Auth',
    },
  },
  {
    path: '/collection',
    name: 'Collection',
    component: Collection,
    meta: {
      title: 'Collection',
    },
  },
  {
    path: '/collection/:id',
    name: 'CollectionId',
    component: CollectionId,
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
