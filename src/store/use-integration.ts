import { platformIcons } from '@/assets/icons'
import { defineStore } from 'pinia'

export const useIntegrationId = 'integration'
export const useIntegration = defineStore(useIntegrationId, {
  state() {
    return {
      list: [
        {
          name: 'Shopify',
          icon: platformIcons.shopify,
          // link: ''
          route: {
            path: '/integration/shopify',
          },
        },
        {
          name: 'Wix',
          icon: platformIcons.wix,
          // link: ''
          route: {
            path: '/integration/wix',
          },
        },
      ],
    }
  },
})
