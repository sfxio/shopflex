import { log } from '@/utils'

import { ERR_CODE_OK } from './_constant'

export const transformRes = (record, resolver?) => {
  const [err, res] = record
  if (!resolver) {
    resolver = (res) => res.data
  }

  if (err) {
    log.error('api', 'error with - ', err)
    return [err, null]
  }
  if (res.code !== ERR_CODE_OK) {
    log.http('api', 'error with - ', res)
    return [new Error(res.message || 'Unknown error'), null]
  }
  return [null, resolver(res)]
}
