import VueLazyLoad from 'vue3-lazyload'
import app from './apps/fashion/main'
import './assets/global.css'
import './assets/reset.scss'
import './assets/fix-antd-ui.css'
import './assets/tailwind.css'
import { loadingPending } from './assets/images'

// 按需加载
import Antd from 'ant-design-vue'

app.use(VueLazyLoad, {
  loading: loadingPending,
})
app.use(Antd)
