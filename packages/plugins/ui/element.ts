import Vue from 'vue'
import Button from 'ant-design-vue/lib/button'
import ABackTop from 'ant-design-vue/lib/back-top'
import ADrawer from 'ant-design-vue/lib/drawer'
import AMenu from 'ant-design-vue/lib/menu'
import ARow from 'ant-design-vue/lib/row'
import ACol from 'ant-design-vue/lib/col'
import 'ant-design-vue/lib/button/style/index.less'
import 'ant-design-vue/lib/back-top/style/index.less'
import 'ant-design-vue/lib/drawer/style/index.less'
import 'ant-design-vue/lib/menu/style/index.less'

const components = [Button, ABackTop, ADrawer, AMenu, ARow, ACol]

components.forEach(cmp => Vue.use(cmp))
