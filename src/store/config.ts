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
        queryTo: '#header',
      },
      {
        id: nanoid(),
        title: 'Solutions',
        location: {
          path: '/solutions',
        },
      },
      {
        id: nanoid(),
        title: 'Dropshipping',
        location: {
          path: '/dropshipping',
        },
      },
      {
        id: nanoid(),
        title: 'Tools',
        location: {
          path: '/tools',
        },
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
          },
          {
            id: 'dFFtFqRGct10EQtAD4BIG',
            location: { path: '/tools' },
            title: 'Customer Service',
          },
          {
            id: 'R4OBb1CMcXLe-GwnCkkWb',
            location: { path: '/tools' },
            title: 'Product Image/Video Editing',
          },
          {
            id: 'b1brzJMeQVAYG_j1KcX_D',
            location: { path: '/tools' },
            title: 'Dropshipping Sourcing',
          },
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
          },
        ],
      },
      {
        id: nanoid(),
        title: 'News',
        location: {
          path: 'News',
        },
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
