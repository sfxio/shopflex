import { defineStore } from 'pinia'
import { suppliersSiteIcon } from '@/assets/icons'

let id = 0
const useSuppliersId = 'suppliersId'
export const useSuppliers = defineStore(useSuppliersId, {
  state() {
    return {
      suppliers: [
        {
          id: id++,
          name: 'Fashion Express',
          icon: 'https://fashionexpress.us/_nuxt/static/logo.png',
          description: 'Worldwide Women Fashion Dropshipping',
          link: 'https://fashionexpress.us/',
          route: {},
        },
        {
          id: id++,
          name: 'MixShop',
          icon: 'https://mixshop.world/_nuxt/static/logo.png',
          description:
            'With 13 warehouses in USA & UK, 3-7 Days FREE Shipping.',
          link: 'https://mixshop.world/',
          route: {},
        },
        {
          id: id++,
          name: 'Instocks',
          icon: suppliersSiteIcon.instocks,
          link: '/',
        },
        {
          id: id++,
          name: 'Vendorslink',
          icon: suppliersSiteIcon.vendorslink,
          link: '/',
        },
        {
          id: id++,
          name: '5 Dollar Dropshipping',
          icon: suppliersSiteIcon.dollar,
          link: '/',
        },
      ] as const,
    }
  },
})
