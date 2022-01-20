import type { AppConfig } from '@/types'
let menuId = 0

const channel = 'fas'
const platform = 'sho'
const shopifyLink = 'https://apps.shopify.com/fashionexpress-dropshipping'

const name = 'Fashion Express'
const title = 'Women Fashion Drop Shopping.'
const description =
  'Fast & Free Shipping for order above $200. Flat Shipping rate of $12.99 for all order under $200.'
const email = 'sandy@fashionexpress.us'
const telephone = '+1 (720) 336-9688'
const telephoneHref = 'tel:sandy@fashionexpress.us'
const policy =
  'https://docs.google.com/document/d/e/2PACX-1vSjB_veZKGH42Qx8iq_wgKdkbYF7z-dKhtT-nkpxVF9CMX7nZ7OwHDJRyl2ujvltM4iR3wjEttlgUOQ/pub?embedded=true'

// TODO(rushui 2022-01-13): modify link
const about =
  'https://docs.google.com/document/d/e/2PACX-1vSjB_veZKGH42Qx8iq_wgKdkbYF7z-dKhtT-nkpxVF9CMX7nZ7OwHDJRyl2ujvltM4iR3wjEttlgUOQ/pub?embedded=true'
const usage =
  'https://docs.google.com/document/d/e/2PACX-1vSjB_veZKGH42Qx8iq_wgKdkbYF7z-dKhtT-nkpxVF9CMX7nZ7OwHDJRyl2ujvltM4iR3wjEttlgUOQ/pub?embedded=true'
const shopLinks = {
  sho: shopifyLink,
  shopify: shopifyLink,
  Shopify: shopifyLink,
}

const menu = {
  public: [
    {
      id: menuId--,
      name: 'Policy',
      icon: 'icon-policy',
      link: '/policy',
    },
    { id: menuId--, name: 'About us', icon: 'icon-about', link: '/about' },
    {
      id: menuId--,
      name: `How to use ${name}`,
      icon: 'icon-how',
      link: '/how',
    },
    {
      id: menuId--,
      name: 'All Products',
      link: '/products',
      icon: 'icon-all',
    },
    {
      id: 1122,
      name: 'Best Selling',
      link: 'products-id',
      icon: 'icon-hot',
    },
    {
      id: 1123,
      link: 'products-id',
      name: 'New Arrivals',
      icon: 'icon-new',
    },
  ],
}

export const appConfig: AppConfig = {
  name,
  title,
  description,
  channel,
  platform,
  email,
  telephone,
  telephoneHref,
  policy,
  about,
  usage,
  shopLinks,
  menu,
}
