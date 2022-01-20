import type { Category, ProductItem } from '@/types'
import { isString, isArray, isNotVoid } from '../common'

export function normalizeCateItem(cate): Category {
  const children = cate.children
  const res: Category = {
    id: cate.id,
    name: cate.name || cate.nameEn,
    description: cate.description,
    icon: cate.icon,
  }

  if (isArray(children)) {
    res.children = children.map((c) => normalizeCateItem(c))
  }

  return res
}

export function normalizeCategoryList(list): Category[] {
  return isArray(list) ? list.map((item) => normalizeCateItem(item)) : []
}

export function normalizeProductItem(item): ProductItem {
  let imgList = item.imgList
  if (!imgList) {
    imgList = isString(item.albumPics) ? item.albumPics.split(',') : []
    imgList = imgList.filter((img) => isNotVoid(img))
  }
  const res: ProductItem = {
    id: item.id,
    cover: item.cover || item.pic,
    attrList: item.attrList,
    imgList,
    name: item.name,
    description: item.description,
    mpn: item.mpn,
    cost: item.cost,
    price: item.price,
    stock: item.stock,
    region: item.region || item.regionCode,
    categoryId: item.categoryId,
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
