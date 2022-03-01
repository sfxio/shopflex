import { layoutModule, LAYOUT_MODULE_NAME } from './layout'
import { CONFIG_MODULE_NAME } from './config'
export * from './layout'
export * from './config'

export const modules = {
  [LAYOUT_MODULE_NAME]: layoutModule,
}
