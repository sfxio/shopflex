import type { Category, MenuItem, ProductItem } from '@/types'

import { isNotVoid, isString, log } from '@/utils'
import { isArray } from '@vue/shared'

import { ERR_CODE_OK } from './_constant'

// 将服务器返回的结果进行统一。
// 返回的结果为
// error: [Error, null]。后续可以通过 Error.message 进行正确输出
// ok   : [null, result]
export const transformRes = async (record, resolver?) => {
  const [err, res] = await record
  if (err) {
    log.error('api', 'error with - ', err)
    return [err, null]
  }

  if (res.code !== ERR_CODE_OK) {
    log.http('api', 'error with - ', res)
    return [new Error(res.message || 'Unknown error'), null]
  }

  if (!resolver) {
    resolver = (res) => res.data
  }
  return [null, resolver(res)]
}

export function normalizeCategories(cates: any[]) {
  return cates.map((cate) => {
    let children = cate.children || null

    if (isArray(children)) {
      children = normalizeCategories(children)
      if (children.length === 1) {
        return children[0]
      }
      children = children.length ? children : null
    }

    return {
      id: cate.id,
      name: cate.name || cate.nameEn,
      location: cate.location,
      icon: cate.icon,
      badge: cate.badge,
      children,
      description: cate.description,
    }
  })
}

export function normalizeCategoriesWithLocation(cate: Category[]): MenuItem[] {
  return cate.map((cate) => {
    let children: any = cate.children
    if (children) {
      children = normalizeCategoriesWithLocation(children)
    }

    return {
      ...cate,
      title: cate.name,
      location: {
        path: `/collection/${cate.id}`,
      },
      children,
    } as any
  })
}

export function normalizeProductItem(item): ProductItem {
  let imgList = item.imgList
  if (!imgList) {
    imgList = isString(item.albumPics) ? item.albumPics.split(',') : []
    imgList = imgList.filter((img) => isNotVoid(img))
  }
  const res: ProductItem = {
    id: item.id,
    cover: item.cover ?? item.pic,
    attrList: item.attrList,
    imgList,
    name: item.name,
    description: item.description,
    mpn: item.mpn,
    cost: item.cost,
    price: item.price,
    stock: item.stock,
    region: item.region ?? item.regionCode,
    categoryId: item.categoryId ?? item.productCategoryId,
    categoryName: item.categoryName ?? item.productCategoryName,
    currencyCode: item.currencyCode,
    skuList: normalizeSkuList(item.skuList),
  }

  return res
}

export function normalizeSkuList(list) {
  return list
}

export function normalizeProductList(list) {
  return isArray(list) ? list.map((item) => normalizeProductItem(item)) : []
}
