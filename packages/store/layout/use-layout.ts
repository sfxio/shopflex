import { OmitParam0 } from '@shopflex-site-ssr/tsconfig/@types'
import { useContext } from '@nuxtjs/composition-api'
import {
  ILayoutActions,
  ILayoutMutations,
  ILayoutState,
  layoutModule,
} from './module'
import { LAYOUT_MODULE_NAME } from './types'

type Func = (a: string, b: number) => number

export const useLayout = () => {
  const ctx = useContext()
  const store = ctx.store
  const state = store.state[LAYOUT_MODULE_NAME] as ILayoutState

  const mutations = Object.keys(layoutModule.mutations).reduce(
    (prev, key) => {
      prev[key] = (...args) =>
        store.commit(`${LAYOUT_MODULE_NAME}/${key}`, ...args)
      return prev
    },
    {} as {
      [key in keyof ILayoutMutations]: OmitParam0<ILayoutMutations[key]>
    },
  )

  const actions = Object.keys(layoutModule.actions).reduce(
    (prev, key) => {
      prev[key] = (...args) =>
        store.dispatch(`${LAYOUT_MODULE_NAME}/${key}`, ...args)
      return prev
    },
    {} as {
      [key in keyof ILayoutActions]: OmitParam0<ILayoutActions[key]>
    },
  )

  return {
    state,
    actions,
    mutations,
  }
}
