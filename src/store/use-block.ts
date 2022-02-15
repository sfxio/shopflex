import { suppliersIcons } from '@/assets/icons'
import { defineStore } from 'pinia'

export const uesBlockId = 'block'
export const useBlock = defineStore(uesBlockId, {
  state() {
    return {
      blocks: [
        {
          title: 'Independent station',
          height: 172,
          list: [
            {
              title: 'MixShop',
              description:
                ' Bridging Chinese Suppliers and Local sellers to provide Amazon level shipping speed and customer experience.',
              link: 'https://mixshop.world/',
              icon: suppliersIcons.mix,
            },
            {
              title: 'Fashion Express',
              description:
                'Recommend trending fashion products for influencers selling to their followers.',
              link: 'https://FashionExpress.us',
              icon: suppliersIcons.fashion,
            },
          ],
        },
      ],
    }
  },
})
