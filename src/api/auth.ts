import type { LoginForm, RegisterForm } from '@/types'
// import { isNotVoid } from '@/utils'
import { defaultHttp as http } from './http'
import { transformRes } from './_helper'

function auth(form: any) {
  // const token = window.localStorage.getItem('token')
  // if (isNotVoid(token)) {
  //   return Promise.resolve([null, token])
  // }
  return transformRes(http.post('/admin/merchant/login', form), (res) => {
    const data = res.data
    const token = `${data.tokenHead}${data.token}`
    return token
  })
}

export function login(form: LoginForm) {
  return auth({
    ...form,
    newStatus: 2,
  })
}

export function register(form: RegisterForm) {
  return auth({
    ...form,
    newStatus: 1,
  })
}
