import { defaultHttp as http } from './http'

export function getCategory() {
  return http.get('/productCategory/aws/list/product/withChildren')
}
