/* eslint-disable import/no-named-default */
// import { default as solution1 } from './solution1.png'
// import { default as solution2 } from './solution2.png'
// import { default as solution3 } from './solution3.png'
import { default as solution11 } from './solution1-1-en.png'
import { default as solution21 } from './solution2-1-en.png'
import { default as solution22 } from './solution2-2-en.png'
import { default as solution23 } from './solution2-3-en.png'
import { default as solution31 } from './solution3-1-en.png'
import { default as solution32 } from './solution3-2-en.png'
import { default as solution33 } from './solution3-3-en.png'
import { default as solution41 } from './solution4-1-en.png'

export interface SolutionItem {
  title: { value: string; strong?: boolean }[]
  subtitle: { value: string }[]
  url: string
}
export const solutions = {
  solution11,

  solution21,
  solution22,
  solution23,

  solution31,
  solution32,
  solution33,

  solution41,
} as const
