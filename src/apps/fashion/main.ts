import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import { enhanceHttp } from '@/plugins'
import { http } from '@/api'
import store from './store'

// import { store } from './store'

const head = createHead()
export const app = createApp(App)

enhanceHttp(http, store)
app.use(store)
app.use(router)
app.use(head)

app.mount('#app')
