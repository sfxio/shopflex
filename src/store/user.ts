import { defineStore } from 'pinia'
import { UserModel } from '@/api'
import { isDef } from '@/utils'

export const USER_MODULE_NAME = 'user'
export const useUserStore = defineStore(USER_MODULE_NAME, {
  state: () => {
    return {
      token: undefined,
      user: null,
    }
  },

  actions: {
    setToken(token) {
      this.token = token
    },
    setUser(user) {
      this.user = user
    },
    async setUserByTokenAsync(token) {
      const [err, user] = await UserModel.getUserByToken(token)
      if (!err) {
        this.token = token
        this.user = user
      } else {
        this.logout()
      }

      return [err, user]
    },
    logout() {
      console.log('token: ', this.token)
      this.token = undefined
      this.user = null
    },
  },
  getters: {
    isLogin() {
      return isDef(this.user)
    },
  },
})
