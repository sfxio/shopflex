import { defineStore } from 'pinia'

export const useBannerId = 'banner'
export const useBanner = defineStore(useBannerId, {
  state() {
    return {
      title: {
        // 'B2B and Multichannel Selling SaaS',
        value:
          '<span style="color: var(--color-primary);">B2B</span> and <span style="color: var(--color-primary);">Omni-Channel</span> Selling SaaS',
        props: {
          // style: 'text-align: center',
        },
      },
      description: {
        value:
          'ShopFlex is the ideal platform for your omnichannel strategy, creating a seamless connection across sallers and influencers in order to sell all your products worldwide.',
        props: {},
      },

      benefits: {
        // props: { style: { background: '#faf7f2' } },
        props: {},
        list: [
          {
            value: 'Multiple Sales Channels',
            props: {},
            innerProps: {},
          },
          {
            value: 'Free Exposure Opportunities',
            props: {},
            innerProps: {},
          },
          {
            value: 'Low Investment',
            props: {},
            innerProps: {},
          },
        ],
      },
    }
  },
})
