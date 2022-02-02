import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { useEnhanceHttp } from '@/store/plugins'
import { defaultHttp as http } from '@/api'

// import { store } from './store'

const head = createHead()
const pinia = createPinia()
pinia.use(useEnhanceHttp(http))

const app = createApp(App)
app.use(router)
app.use(head)
app.use(pinia)

app.mount('#app')
export default app
