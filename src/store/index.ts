import * as user from './modules/user'
export * as user from './modules/user'

export const modules = {
  [user.USER_MODULE_NAME]: user.module,
}
