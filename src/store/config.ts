import { defineStore } from 'pinia'
import { MenuItem } from '@/types'
import { nanoid } from 'nanoid'

export const useConfigStoreId = 'config'
export const useConfigStore = defineStore(useConfigStoreId, {
  state() {
    const menu: MenuItem[] = [
      {
        id: nanoid(),
        title: 'Home',
        location: {
          path: '/',
        },
        queryTo: '.__home',
      },
      {
        id: nanoid(),
        title: 'Solutions',
        location: {
          path: '/solutions',
        },
        queryTo: '#solutions',
        children: [
          {
            id: nanoid(),
            title: 'Website Builder',
            location: {
              path: '/solutions',
            },
            queryTo: '.solution1',
          },
          {
            id: nanoid(),
            title: 'Seamless Storefront Integration',
            location: {
              path: '/solutions',
            },
            queryTo: '.solution2',
          },
          {
            id: nanoid(),
            title: 'Livestream Shopping',
            location: {
              path: '/solutions',
            },
            queryTo: '.solution3',
          },
          {
            id: nanoid(),
            title: 'ShopAI Product Recommendation',
            location: {
              path: '/solutions',
            },
            queryTo: '.solution4',
          },
        ],
      },
      {
        id: nanoid(),
        title: 'Dropshipping',
        location: {
          path: '/dropshipping',
        },
        queryTo: '#dropshipping',
      },
      {
        id: nanoid(),
        title: 'Tools',
        location: {
          path: '/tools',
        },
        queryTo: '#tools',
        children: [
          {
            id: 'N9KU9R44ukOvwpuwi03RB',
            location: { path: '/tools' },
            title: 'Statistics',
            queryTo: '#statistics',
          },
          {
            id: 'EVXg6G1BEOazI3aJO7b2R',
            location: { path: '/tools' },
            title: 'Product Research',
            queryTo: '#product-search',
          },
          {
            id: 'dFFtFqRGct10EQtAD4BIG',
            location: { path: '/tools' },
            title: 'Customer Service',
            queryTo: '#customer-service',
          },
          {
            id: 'R4OBb1CMcXLe-GwnCkkWb',
            location: { path: '/tools' },
            title: 'Product Image/Video Editing',
            queryTo: '#editing',
          },
          // {
          //   id: 'b1brzJMeQVAYG_j1KcX_D',
          //   location: { path: '/tools' },
          //   title: 'Dropshipping Sourcing',
          //   queryTo: '#dropshipping-sourcing',
          // },
          {
            id: 'enuxqtw1DzrPH-zKNk2Ep',
            queryTo: '#social-media-platform',
            location: { path: '/tools' },
            title: 'Social Media Platform',
          },
          {
            id: '-8REM2y4nea0MHLLgElk-',
            location: { path: '/tools' },
            title: 'Others',
            queryTo: '#others',
          },
        ],
      },
      {
        id: nanoid(),
        title: 'News',
        location: {
          path: '/news',
        },
        queryTo: '#news',
      },
    ]

    return {
      globalConfig: {
        pageWidth: 1320,
      },
      headerConfig: {
        height: 56,
      },
      footerConfig: {
        height: 64,
      },

      menu,
    }
  },
})
