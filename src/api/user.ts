import { defaultHttp as http } from './http'
import { transformRes } from './_helper'

export function getUserByToken(token) {
  return transformRes(
    http.get('/admin/0/new', {
      headers: {
        Authorization: token,
      },
    }),
    (res) => {
      const data = res.data
      return {
        ...data.admin,
        shopInfoList: data.shopInfoList,
      }
    },
  )
}
