import { defineStore } from 'pinia'
import { ConfigState } from '~/../../types'

export const CONFIG_MODULE_NAME = 'config'
export const useConfigStore = defineStore<
  typeof CONFIG_MODULE_NAME,
  ConfigState
>(CONFIG_MODULE_NAME, {
  state: () => {
    return {
      appConfig: null,
      globalConfig: null,
    }
  },
})
