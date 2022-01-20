import { app } from './apps/fashion/main'
import './assets/global.css'
import './assets/reset.scss'
import './assets/fix-antd-ui.css'
import './assets/tailwind.css'
import Antd from 'ant-design-vue'

// TODO(rushui 2022-01-20): 按需加载
import 'ant-design-vue/dist/antd.less'

app.use(Antd)
