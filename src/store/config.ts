import { defineStore } from 'pinia'
import { ConfigModel } from '@/api'

export const CONFIG_MODULE_NAME = 'config'
export const useConfigStore = defineStore(CONFIG_MODULE_NAME, {
  state: () => {
    return {
      appConfig: null,
      globalConfig: null,
      menu: [],
      region: undefined,
    }
  },

  actions: {
    async initAppConfigAsync(params = {}) {
      const res = await ConfigModel.getAppConfig(params)

      const [err, appConfig] = res
      if (!err) {
        this.appConfig = appConfig
      }

      return res
    },
    async initMenuAsync() {
      const res = await ConfigModel.getMenu()
      const [err, menu] = res
      if (!err) {
        this.menu = menu
      }
      return res
    },
    setMenu(menu) {
      this.menu = menu
    },
  },
})
