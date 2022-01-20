import * as user from './modules/user'
import * as config from './modules/config'

export * as user from './modules/user'
export * as config from './modules/config'

export const modules = {
  [user.USER_MODULE_NAME]: user.module,
  [config.CONFIG_MODULE_NAME]: config.module,
}
