import Vue from 'vue'
import Button from 'ant-design-vue/lib/button'
import 'ant-design-vue/lib/button/style/index.less'

const components = [Button]

components.forEach(cmp => Vue.use(cmp))
