import { defineStore } from 'pinia'

export const useBannerId = 'banner'
export const useBanner = defineStore(useBannerId, {
  state() {
    return {
      title: {
        value: 'Cross-border e-commerce and multi-sale channels SaaS',
        props: {},
      },
      description: {
        value:
          'ShopFlex is the ideal platform for your omnichannel strategy, creating a seamless connection across sallers and cyber celebrities in order to sell all your products.',
        props: {},
      },

      benefits: {
        props: { style: { background: '#faf7f2' } },
        list: [
          {
            value: 'Mutiple sale channels',
            props: {},
            innerProps: {},
          },
          {
            value: 'Free exposure opportunities',
            props: {},
            innerProps: {},
          },
          {
            value: 'Low investment',
            props: {},
            innerProps: {},
          },
        ],
      },
    }
  },
})
