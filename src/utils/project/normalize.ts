import { clearVoidKey, pick, isArray } from '../common'

/**
 * @param { {name: string | null, nameEn: string | null} } item
 * @returns { string }
 */
function normalizeCategoryName(item) {
  return item.nameEn || item.name
}

export function normalizeCategories(cList = []) {
  if (cList.length === 1) {
    const item = cList[0]
    return {
      id: item.id,
      name: normalizeCategoryName(item),
      children: item.children ? normalizeCategories(item.children) : null,
    }
  }
  return cList.map((item) => {
    const children = item.children ? normalizeCategories(item.children) : null
    return clearVoidKey({
      id: item.id,
      name: normalizeCategoryName(item),
      children: children && children.length ? children : null,
      query: item.query,
      params: item.params,
      icon: item.icon,
      link: item.link || item.path,
    })
  })
}

// 为了统一，然后进行路由跳转
export function normalizeCategoriesAsMenu(categories = []) {
  return categories.map((c) => {
    const children = c.children
    if (children) {
      // children = normalizeCategories(children)
    }
    return {
      ...c,
      link: 'products-id',
      children,
    }
  })
}

export function normalizeUser(
  user,
): {
  id: any
  username: any
  channel: any
  platform: any
  platformStatus: any
  email: any
  regionCode: any
  shopName: any
  shopDomain: any
  phone: any
} {
  if (!user) {
    return
  }
  return pick(user, [
    'id',
    'username',
    'channel',
    'platform',
    'platformStatus',
    'email',
    'regionCode',
    'shopName',
    'shopDomain',
    'phone',
  ])
}
