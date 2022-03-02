import type { Module, Mutation, Action, ActionContext } from 'vuex'
import { layoutMutationTypes, layoutActionTypes } from './types'
import { layoutService } from '@shopflex-site-ssr/services'
import { layoutStateTypes } from './types'
import deepmerge from 'deepmerge'

export interface ILayoutState {
  layout: null | any
}

// type Keys = keyof typeof layoutMutationTypes
type AContext = ActionContext<ILayoutState, any>

const state = (): ILayoutState => {
  return {
    [layoutStateTypes.layout]: null,
  }
}

const mutations = {
  [layoutMutationTypes.setLayout](state: ILayoutState, layout: any) {
    state.layout = layout
  },
  [layoutMutationTypes.updateLayout](state: ILayoutState, partialLayout = {}) {
    state.layout = deepmerge(state.layout || {}, partialLayout)
    console.log('layout: ', state.layout)
  },
} as const

const actions = {
  async [layoutActionTypes.setLayout](
    ctx: AContext,
    payload: Parameters<typeof layoutService['getLayout']> = [],
  ) {
    const { commit } = ctx
    const res = await layoutService.getLayout(...payload)
    commit(layoutMutationTypes.setLayout, res)
  },
} as const

const getters = {}

export const layoutModule: Module<ReturnType<typeof state>, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

export type ILayoutModule = typeof layoutModule
export type ILayoutMutations = typeof mutations
export type ILayoutActions = typeof actions
