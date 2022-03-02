import { button } from './button'
import { col, row } from './grid'

export * from './button'
export * from './grid'

const _components = [col, row, button]

export const components = {
  install(Vue: any) {
    _components.forEach(cmp => {
      Vue.component(cmp.name, cmp)
    })
  },
}
