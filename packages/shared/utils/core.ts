// is
export function isDef(v: any): boolean {
  return v !== undefined && v !== null
}

export function isUndef(v: any): boolean {
  return v === undefined || v === null
}

export function isNumber(v: any): v is Number {
  return typeof v === 'number'
}

export function isString(v: any): v is String {
  return typeof v === 'string'
}

// to
export function toSize(v: string | number, unit = 'px') {
  return isString(v) ? v : `${v}${unit}`
}

// other
export function objectPick<O, T extends keyof O>(
  obj: O,
  keys: T[],
  omitUndefined = false,
) {
  return keys.reduce((n, k) => {
    if (k in obj) if (!omitUndefined || !obj[k] === undefined) n[k] = obj[k]
    return n
  }, {} as Pick<O, T>)
}

/**
 * Increase string a value with unit
 *
 * @example '2px' + 1 = '3px'
 * @example '15em' + (-2) = '13em'
 */
export function increaseWithUnit(target: number, delta: number): number
export function increaseWithUnit(target: string, delta: number): string
export function increaseWithUnit(
  target: string | number,
  delta: number,
): string | number
export function increaseWithUnit(
  target: string | number,
  delta: number,
): string | number {
  if (typeof target === 'number') return target + delta
  const value = target.match(/^-?[0-9]+\.?[0-9]*/)?.[0] || ''
  const unit = target.slice(value.length)
  const result = parseFloat(value) + delta
  if (Number.isNaN(result)) return target
  return result + unit
}
