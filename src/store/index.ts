import type { Store } from 'vuex'

import * as user from './modules/user'
import * as config from './modules/config'
import { decodeToken, log } from '@/utils'

export * as user from './modules/user'
export * as config from './modules/config'

export const modules = {
  [user.USER_MODULE_NAME]: user.module,
  [config.CONFIG_MODULE_NAME]: config.module,
}

export const init = () => (store: Store<any>) => {
  log.verbose('store', 'init...')
  log.verbose('store', 'init config...')
  initConfig(store)
  log.verbose('store', 'init user...')
  initUser(store)
  log.verbose('store', 'init done')
}

function initConfig(store: Store<any>) {
  const region = window.localStorage.getItem('region')
  if (region) {
    store.commit(config.CONFIG_M_SET_REGION, region)
  }
}

function initUser(store: Store<any>) {
  const token = window.localStorage.getItem('token')
  if (token) {
    store.commit(user.USER_M_SET_TOKEN, decodeToken(token))
  }
}
