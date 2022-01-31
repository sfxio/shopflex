import app from './apps/fashion/main'
import './assets/global.css'
import './assets/reset.scss'
import './assets/fix-antd-ui.css'
import './assets/tailwind.css'

// 按需加载
import Antd from 'ant-design-vue'
app.use(Antd)
