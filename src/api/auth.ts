import type { LoginForm, RegisterForm } from '@/types'
import { authErrorRE, log } from '@/utils'
import { defaultHttp } from './http'
import { ERR_CODE_OK } from './_constant'

function fetchAuth(form: any) {
  const res = defaultHttp
    .post('/admin/merchant/login', form)
    .then((res: any) => {
      // eslint-disable-next-line prefer-const
      let { code, data, message } = res
      if (code === ERR_CODE_OK && data) {
        return `${data.tokenHead}${data.token}`
      }

      // message = ' password is ...' | 'username is ...' | unknown error
      if (!authErrorRE.test(message)) {
        message = 'Unknown error'
      }

      return Promise.reject(new Error(message))
    })
    .catch((e) => {
      log.http('api', 'fetch login error - ', e)
      let message = e.message
      if (!authErrorRE.test(message)) {
        message = 'Unknown error'
      }

      return Promise.reject(new Error(message))
    })
}

export function fetchLogin(form: LoginForm) {
  return fetchAuth({
    ...form,
    // 这是后端要求的...
    newStatus: 2,
  })
}

export function fetchRegister(form: RegisterForm) {
  return fetchAuth({
    ...form,
    newStatus: 1,
  })
}
