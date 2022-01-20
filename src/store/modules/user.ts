import type { UserState } from '../../types'
import { Module } from 'vuex'

export const USER_MODULE_NAME = 'user'

const state: UserState = {
  user: null,
  token: undefined,
}

export const module: Module<any, any> = {
  namespaced: true,
  state,
}
