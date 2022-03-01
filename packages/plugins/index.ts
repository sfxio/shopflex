import path from 'path'
const resolve = (...args: any[]) => path.resolve(__dirname, ...args)
const resolveUI = (...args: any[]) => resolve('./ui', ...args)

export const elementUI = resolveUI('element.ts')
export const responsive = resolveUI('responsive.ts')
