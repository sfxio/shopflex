import type { ProductListParams } from '@/types'

import { defineStore } from 'pinia'
import { ProductModel } from '@/api'
import { isDef } from '@/utils'

export const COLLECTION_MODULE_NAME = 'collection'
export const useCollectionStore = defineStore(COLLECTION_MODULE_NAME, {
  state: () => {
    return {
      collectionItems: Object.create({}) as any,
      currentItemKey: undefined,
    }
  },

  actions: {
    setCollectionItem(id, item) {
      this.collectionItems[id] = item
    },

    setCurrentCollectionItem(id, item) {
      this.setCurrentItemKey(id)
      this.setCollectionItem(id, item)
    },

    async setCollectionItemAsync(id, params: ProductListParams = {}) {
      let requestId = id
      if (id === 'All') {
        requestId = undefined
      }

      const [err, res] = await ProductModel.getProduct({
        id: requestId,
        ...params,
      })
      if (!err) {
        this.setCollectionItem(id, res)
      }
      return [err, res]
    },

    setCurrentCollectionItemAsync(id, params: ProductListParams = {}) {
      this.setCurrentItemKey(id)
      this.setCollectionItemAsync(id, params)
    },

    clearCollectionItems() {
      this.collectionItems = Object.create({})
      this.currentItemKey = undefined
    },

    setCurrentItemKey(newKey) {
      this.currentItemKey = newKey
    },
  },

  getters: {
    currentItem() {
      return this.collectionItems[this.currentItemKey] || null
    },
    hasItemById() {
      return (id) => isDef(this.collectionItems[id])
    },
  },
})
