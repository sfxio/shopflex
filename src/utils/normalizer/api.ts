import { ProductListParams } from '@/types'

export const normalizeProductListParams = (
  params: any = {},
): ProductListParams => {
  const { id, sortBy, orderBy, ...rest } = params
  // 特殊情况，不要太纠结
  if (id === 1122) {
    rest.id = id
    rest.newStatus = 1
  } else if (id === 1123) {
    rest.id = 1122
    rest.status = 2
  }
  // 搞不懂为什么不按照数据库的格式来传参。。。
  if (sortBy) {
    rest.sortCode = sortBy
  }
  if (orderBy) {
    rest.sortBy = orderBy
  }

  return rest
}
