import path from 'path'
const resolve = (...args: any[]) => path.resolve(__dirname, ...args)
const resolveUI = (...args: any[]) => resolve('./ui', ...args)
const resolvePerform = (...args: any[]) => resolve('./perform', ...args)

export const ui = resolveUI('ui.ts')
export const lazyload = resolvePerform('lazyload.ts')
