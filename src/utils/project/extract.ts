import { clearVoidKey, pick } from '../common'

export function pickUser(user) {
  return pick(user, ['id', 'username', 'channel', 'platform', 'platformStatus', 'email', 'regionCode', 'myCode', 'shopName', 'shopDomain'])
}

/**
 * @param {import('types').MenuItem} item
 * @returns {import('types').MenuItem}
 */
export function getRouteLocation(item) {
  // eslint-disable-next-line prefer-const
  let { link, name, ...rest } = item
  if (!link) return item
  rest.rawName = name

  // link = 'products-id'
  let params = item.params || {}
  if (link.includes('-')) {
    const path = link.split('-')
    const keys = path.slice(1)
    rest.name = link

    keys.forEach(key => {
      params[key] = rest[key]
    })
    params = clearVoidKey(params)
  } else {
    // link = '/products' or 'how' (how is a route page name)
    link.startsWith('/') ? (rest.path = link) : (rest.name = link)
  }

  rest.params = params
  return clearVoidKey(rest)
}
