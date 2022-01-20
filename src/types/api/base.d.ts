export interface BaseParams {
  regionCode?: string
  channel?: string
  platform?: string | string[]
}

export interface BasePagination<T> {
  list: T[]
  total: number
  pageSize: number
  pageNum: number
  totalPage?: number
}
