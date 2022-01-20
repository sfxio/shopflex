/* eslint-disable */
// @ts-nocheck
import { parse as _parse } from 'qs'
import dayjs from 'dayjs'
export { stringify } from 'qs'

export function parse(query) {
  return query ? _parse(query) : {}
}

const _hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * @param { Object } o
 * @returns { boolean } o is an empty object
 */
export function isEmptyObject(o) {
  return typeof o !== 'object' || Object.keys(o).length === 0
}

export function isPlainObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]'
}

export function isVoid(v) {
  return v === null || v === undefined || v === ''
}

export function isString(v): v is string {
  return typeof v === 'string'
}

export function isNotVoid(v) {
  return v !== null && v !== undefined && v !== ''
}

export function isUndef(v) {
  return v === null || v === undefined
}

export function isDef(v) {
  return v !== null && v !== undefined
}

export function isNumber(v) {
  return typeof v === 'number' || !Number.isNaN(parseInt(v))
}

export function isObject(v) {
  return typeof v === 'object' && v !== null
}

export function isFunction(v) {
  return typeof v === 'function'
}

export const isArray = Array.isArray

/**
 * @param {*} r
 * @returns {r is RegExp}
 */
export function isRE(r) {
  return r instanceof RegExp
}

const emailRE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export function isEmail(val) {
  return emailRE.test(val)
}

/**
 * Pick value by keys.
 * @param { {[key in string]: any } } obj
 * @param { string[] } keys
 * @returns { {[key in string]: any} }
 * @example pick({a: 'a', b: 'b'}, ['a']) = {a: 'a'}
 */
export function pick(obj, keys) {
  if (!obj) return {}
  return keys.reduce((prev, key) => {
    prev[key] = obj[key]
    return prev
  }, {})
}

/**
 * @param { object } obj
 * @param {string | string[]} keys
 * @example ignore({a: 'a', b: 'b'}, ['a']) => {b: 'b'}
 * @returns { object }
 */
export function ignore(obj = {}, keys) {
  if (!keys) {
    return obj
  }
  if (!Array.isArray(keys)) {
    keys = [keys]
  }
  const res = { ...obj }
  keys.forEach((key) => {
    if (_hasOwnProperty.call(obj, key)) {
      delete res[key]
    }
  })

  return res
}

export function freeze(o) {
  return Object.freeze ? Object.freeze(o) : o
}

export function clear(obj, clearFn) {
  if (!isPlainObject(obj)) {
    return {}
  }

  return Object.keys(obj).reduce((prev, key) => {
    const value = obj[key]
    if (!clearFn(value)) {
      prev[key] = value
    }
    return prev
  }, {})
}

/**
 * @param {*} obj
 * @example clear({a: 'aaa', b: undefined, c: ''}) => {a: 'aaa'}
 * @returns {object}
 */
export function clearVoidKey(obj) {
  return clear(obj, isVoid)
}

export function toNumber(v) {
  const n = parseFloat(v)
  return isNaN(n) ? v : n
}

export function toBoolean(v) {
  if (v === 'true') return true
  if (v === 'false') return false
  return !!v
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 * @see https://github.com/facebook/fbjs/blob/main/packages/fbjs/src/core/shallowEqual.js
 */
export function shallowEqual(objA, objB) {
  if (Object.is(objA, objB)) {
    return true
  }

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false
  }

  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  if (keysA.length !== keysB.length) {
    return false
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    if (
      !_hasOwnProperty.call(objB, keysA[i]) ||
      !Object.is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false
    }
  }

  return true
}

export function looseEqual(a, b) {
  if (a === b) return true
  const isObjectA = isObject(a)
  const isObjectB = isObject(b)
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a)
      const isArrayB = Array.isArray(b)
      if (isArrayA && isArrayB) {
        return (
          a.length === b.length &&
          a.every((e, i) => {
            return looseEqual(e, b[i])
          })
        )
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        return (
          keysA.length === keysB.length &&
          keysA.every((key) => {
            return looseEqual(a[key], b[key])
          })
        )
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Camelize a hyphen-delimited string.
 */
const camelizeRE = /-(\w)/g
export function upperCaseWord(str) {
  const res = str.replace(camelizeRE, (_, c) =>
    c ? ' ' + c.toUpperCase() : '',
  )
  return res.charAt(0).toUpperCase() + res.slice(1)
}

export function formatDate(date, pattern = 'YYYY-MM-DD HH:MM') {
  return dayjs(date).format(pattern) // display
}

/**
 * @param {*} obj
 * @example {a: 'A', b: 'B' } => { A: 'a', B: 'b' }
 */
export function reverseObject(obj) {
  if (!isObject(obj)) {
    return {}
  }
  return Object.keys(obj).reduce((prev, key) => {
    prev[obj[key]] = key
    return prev
  }, Object.create(null))
}
