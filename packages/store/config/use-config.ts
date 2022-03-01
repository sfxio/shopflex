import { useContext, computed } from '@nuxtjs/composition-api'
import {
  IConfigActions,
  IConfigMutations,
  IConfigState,
  configModule,
} from './module'
import { CONFIG_MODULE_NAME } from './types'

type Func = (a: string, b: number) => number

type OmittedFunc<T> = T extends (param: any, payload: infer P) => infer R
  ? (payload: P) => R
  : T

export const useConfig = () => {
  const ctx = useContext()
  const store = ctx.store
  const state = store.state[CONFIG_MODULE_NAME] as IConfigState

  const mutations = Object.keys(configModule.mutations).reduce(
    (prev, key) => {
      prev[key] = (...args) =>
        store.commit(`${CONFIG_MODULE_NAME}/${key}`, ...args)
      return prev
    },
    {} as {
      [key in keyof IConfigMutations]: OmittedFunc<IConfigMutations[key]>
    },
  )

  const actions = Object.keys(configModule.actions).reduce(
    (prev, key) => {
      prev[key] = (...args) =>
        store.dispatch(`${CONFIG_MODULE_NAME}/${key}`, ...args)
      return prev
    },
    {} as {
      [key in keyof IConfigActions]: OmittedFunc<IConfigActions[key]>
    },
  )

  return {
    state,
    actions,
    mutations,
  }
}
