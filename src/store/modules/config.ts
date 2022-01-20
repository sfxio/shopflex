import type { ConfigState } from '@/types'
import type { Module } from 'vuex'

export const CONFIG_MODULE_NAME = 'config'
export const M_SET_APP_CONFIG = 'm-set-app-config'

export const CONFIG_M_SET_APP_CONFIG = `${CONFIG_MODULE_NAME}/${M_SET_APP_CONFIG}`

const state: ConfigState = {
  appConfig: null,
  globalConfig: null,
}

const mutations = {
  [M_SET_APP_CONFIG](state, appConfig) {
    state.appConfig = appConfig
  },
}

export const module: Module<any, any> = {
  namespaced: true,
  state,
  mutations,
}
