import type { UserState } from '@/types'
import type { Module } from 'vuex'

export const USER_MODULE_NAME = 'user'

export const M_SET_TOKEN = 'm-set-token'
export const G_TOKEN = 'g-token'

export const USER_M_SET_TOKEN = `${USER_MODULE_NAME}/${M_SET_TOKEN}`
export const USER_G_TOKEN = `${USER_MODULE_NAME}/${G_TOKEN}`

const state: UserState = {
  user: null,
  token: undefined,
}

const mutations = {
  [M_SET_TOKEN](state, token) {
    state.token = token
  },
}

const getters = {
  [G_TOKEN](state) {
    return state.token
  },
}

export const module: Module<any, any> = {
  namespaced: true,
  state,
  mutations,
  getters,
}
