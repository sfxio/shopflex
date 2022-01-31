import { defineStore } from 'pinia'

export const USER_MODULE_NAME = 'user'
export const useUserStore = defineStore(USER_MODULE_NAME, {
  state: () => {
    return {
      platform: undefined,
      channel: 'channel user',
    }
  },
})
