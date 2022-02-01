import type { Category, MenuItem } from '@/types'
import type { BaseParams, BaseRes } from '@/types/api/base'

import { log } from '@/utils'
import { nanoid } from 'nanoid'
import { defaultHttp as http } from './http'
import {
  normalizeCategories,
  normalizeCategoriesWithLocation,
  transformRes,
} from './_helper'

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
