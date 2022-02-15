import { defineStore } from 'pinia'

export const useConfigStoreId = 'config'
export const useConfigStore = defineStore(useConfigStoreId, {
  state() {
    return {
      globalConfig: {
        pageWidth: 1200,
      },
      headerConfig: {
        height: 56,
      },
      footerConfig: {
        height: 64,
      },
    }
  },
})
