import { isRE } from '../common'
const authRE = /(login|auth|register)/

/**
 * @param {string} from
 * @param {string | RegEx} validator
 */
export function isAuthPath(from, validator = authRE) {
  return from === validator || (isRE(validator) && validator.test(from))
}
