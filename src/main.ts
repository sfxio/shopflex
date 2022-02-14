import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import VueLazyLoad from 'vue3-lazyload'
import App from './App.vue'
import router from './router'
import { loadingPending } from './assets/images'
import './assets/global.css'
import './assets/reset.scss'
import './assets/fix-antd-ui.css'
import './assets/tailwind.css'
// 按需加载
import Antd from 'ant-design-vue'

const head = createHead()
const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(head)
app.use(pinia)

app.use(VueLazyLoad, {
  loading: loadingPending,
})
app.use(Antd)

app.mount('#app')
