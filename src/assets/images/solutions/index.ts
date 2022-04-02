/* eslint-disable import/no-named-default */
import { default as solution1 } from './solution1.png'
import { default as solution2 } from './solution2.png'
import { default as solution3 } from './solution3.png'

export interface SolutionItem {
  title: { value: string; strong?: boolean }[]
  subtitle: { value: string }[]
  url: string
}
export const solutions: Array<SolutionItem> = [
  {
    title: [{ value: 'Shop', strong: true }, { value: 'Flex' }],
    subtitle: [{ value: '出海电商多渠道B2B SaaS' }],
    url: solution1,
  },
  {
    title: [{ value: '大 B ', strong: true }, { value: '流量渠道' }],
    subtitle: [{ value: '一键拓展超过600+家电商平台、零售渠道及线下门店等' }],
    url: solution2,
  },
  {
    title: [{ value: '小 B ', strong: true }, { value: '流量渠道' }],
    subtitle: [],
    url: solution3,
  },
]
