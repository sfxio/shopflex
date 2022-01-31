import { iconMap } from '@/assets/icons'
import { h } from 'vue'

export interface Item {
  title: string
  icon?: string
  badge?: any
}

export function renderChildren(item: Item) {
  const children = [h('span', { class: 'sh-flex-1' }, [item.title])]

  if (item.icon) {
    const icon = iconMap[item.icon]
    if (icon) {
      children.unshift(h(icon))
    }
  }

  if (item.badge) {
    children.push(
      h(
        'span',
        {
          style:
            'display: flex; justify-content: center; align-items: center; min-width: 24px; height: 20px; flex-shrink: 0; background: #4b5563; color: white; border-radius: 4px;',
        },
        item.badge.count,
      ),
    )
  }
  return children
}

export function renderItem(item: Item) {
  return h(
    'span',
    {
      class: 'sh-flex sh-items-center sh-gap-2',
      style: 'font-weight: 500',
    },
    renderChildren(item),
  )
}
