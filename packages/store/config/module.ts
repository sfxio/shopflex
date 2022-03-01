import type { Module, Mutation, Action, ActionContext } from 'vuex'
import { configMutationTypes, configActionTypes } from './types'
import { layoutService } from '@shopflex-site-ssr/services'
import { configStateTypes } from './types'
export interface IConfigState {
  baseConfig: null | any
}

// type Keys = keyof typeof layoutMutationTypes
type AContext = ActionContext<IConfigState, any>

const state = (): IConfigState => {
  return {
    [configStateTypes.baseConfig]: null,
  }
}

const mutations = {
  [configMutationTypes.setBaseConfig](state: IConfigState, baseConfig: any) {
    state.baseConfig = baseConfig
  },
} as const

const actions = {
  async [configActionTypes.setBaseConfig](
    ctx: AContext,
    payload: Parameters<typeof layoutService['getLayout']> = [],
  ) {
    const { commit } = ctx
    const res = await layoutService.getLayout(...payload)
    commit(configMutationTypes.setBaseConfig, res)
  },
} as const

const getters = {}

export const configModule: Module<ReturnType<typeof state>, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

export type IConfigModule = typeof configModule
export type IConfigMutations = typeof mutations
export type IConfigActions = typeof actions
