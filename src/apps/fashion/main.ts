import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { useInitConfig } from './store/plugins/init'
import { useEnhanceHttp } from './store/plugins/enhance-http'
import { defaultHttp as http } from '@/api'
import { appConfig } from './config'

// import { store } from './store'

const head = createHead()
const pinia = createPinia()
const app = createApp(App)
pinia.use(
  useInitConfig({
    appConfig,
  }),
)
pinia.use(useEnhanceHttp(http))

app.use(router)
app.use(head)
app.use(pinia)

app.mount('#app')
export default app
