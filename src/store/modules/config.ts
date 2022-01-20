import type { ConfigState } from '@/types'
import type { Module } from 'vuex'

export const CONFIG_MODULE_NAME = 'config'
export const M_SET_APP_CONFIG = 'm-set-app-config'
export const M_SET_REGION = 'm-set-region'
export const G_CHANNEL = 'g-channel'
export const G_PLATFORM = 'g-platform'
export const G_REGION = 'g-region'

export const CONFIG_M_SET_APP_CONFIG = `${CONFIG_MODULE_NAME}/${M_SET_APP_CONFIG}`
export const CONFIG_M_SET_REGION = `${CONFIG_MODULE_NAME}/${M_SET_REGION}`

export const CONFIG_G_CHANNEL = `${CONFIG_MODULE_NAME}/${G_CHANNEL}`
export const CONFIG_G_PLATFORM = `${CONFIG_MODULE_NAME}/${G_PLATFORM}`
export const CONFIG_G_REGION = `${CONFIG_MODULE_NAME}/${G_REGION}`

const state: ConfigState = {
  appConfig: null,
  globalConfig: null,
  region: undefined,
}

const mutations = {
  [M_SET_APP_CONFIG](state, appConfig) {
    state.appConfig = appConfig
  },
  [M_SET_REGION](state, region) {
    state.region = region
  },
}

const getters = {
  [G_REGION](state) {
    return state.region
  },
  [G_CHANNEL](state) {
    return state.appConfig?.channel
  },
  [G_PLATFORM](state) {
    return state.appConfig?.platform
  },
}

export const module: Module<any, any> = {
  namespaced: true,
  state,
  mutations,
  getters,
}
