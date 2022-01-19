import { isUndef } from '../common'

export function handleDelivery(company, sn) {
  if (isUndef(company)) {
    return
  }
  company = company.toLowerCase()
  switch (company) {
    case 'fedex':
      window.open(`https://www.fedex.com/fedextrack/?action=track&cntry_code=us&locale=en-us&trackingnumber=${sn}`)
      break
    case 'ups':
      window.open(` https://track.aftership.com/trackings?language=en&tracking-numbers=${sn}`)
      break
  }
}
