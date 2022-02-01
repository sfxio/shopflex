import type { AppConfig, Category, MenuItem } from '@/types'
import type { BaseParams, BaseRes } from '@/types/api/base'

import { log } from '@/utils'
import { nanoid } from 'nanoid'
import { defaultHttp as http } from './http'
import {
  normalizeCategories,
  normalizeCategoriesWithLocation,
  transformRes,
} from './_helper'

export function getAppConfig(params = {}) {
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

  const appConfig = {
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
  return Promise.resolve([null, appConfig]) as BaseRes<AppConfig>
}

export function getCategory(params: BaseParams = {}) {
  return transformRes(
    http.get('/productCategory/aws/list/product/withChildren', { params }),
    (res) => normalizeCategories(res.data),
  ) as BaseRes<Category[]>
}

export async function getMenu() {
  const menu: MenuItem[] = [
    {
      id: nanoid(),
      title: 'Policy',
      icon: 'policy',
      location: {
        path: '/policy',
      },
    },
    {
      id: nanoid(),
      title: 'About us',
      icon: 'icon-about',
      location: {
        path: '/about',
      },
    },
    // {
    //   id: nanoid(),
    //   title: 'How to use Fashion Express',
    //   icon: 'icon-how',
    // },
    // {
    //   id: nanoid(),
    //   title: 'All Products',
    //   icon: 'icon-all',
    // },
    // {
    //   id: 1122,
    //   title: 'Best Selling',
    //   icon: 'icon-hot',
    // },
    // {
    //   id: 1123,
    //   title: 'New Arrivals',
    //   icon: 'icon-new',
    // },
  ]
  const [err, res] = await getCategory()
  if (err) {
    log.error('api', getCategory.name, ' err: ', err)
  } else {
    const category = normalizeCategoriesWithLocation(res)
    menu.push({
      id: nanoid(),
      title: 'Categories',
      icon: 'label',
      children: category,
    })
  }
  return Promise.resolve([null, menu]) as BaseRes<MenuItem[]>
}
