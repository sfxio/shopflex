import { platformIcons } from '@/assets/icons'
import { defineStore } from 'pinia'

/**
 * @deprecated unused
 */
export const useIntegrationId = 'integration'

/**
 * @deprecated unused
 */
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
