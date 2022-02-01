import type { AppConfig } from '@/types'

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
}
