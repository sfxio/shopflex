<template>
  <AMenu
    v-if="menu && menu.length"
    v-bind="$attrs"
    class="__fs-menu"
    @select="onSelect"
  >
    <template v-for="item in menu" :key="item.id">
      <template v-if="item.children && item.children.length">
        <!-- <FsSubmenu :key="item.id" :item="item" /> -->
        <ASubMenu :key="item.id">
          <template #title>
            <Item :item="item" />
            <!-- {{ item.children }} -->
          </template>
          <template #default>
            <AMenuItem v-for="cItem in item.children" :key="cItem.id">
              <Item :item="cItem" />
            </AMenuItem>
          </template>
        </ASubMenu>
      </template>
      <template v-else>
        <AMenuItem :key="item.id">
          <Item :item="item" />
        </AMenuItem>
      </template>
    </template>
  </AMenu>
</template>

<script setup lang="ts">
import { MenuItem } from '@/types'
import { PropType } from 'vue'
import FsSubmenu from './fs-submenu.vue'
import Item from './item.vue'

const props = defineProps({
  menu: {
    type: Object as PropType<MenuItem[]>,
    required: true,
  },
})
const onSelect = (payload: { keyPath: string[] }) => {
  const { keyPath } = payload
  const currentItem = keyPath.reduce((prev, key, index) => {
    const res = prev.find((item) => item.id === key)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return index === keyPath.length - 1 ? res : res.children
  }, props.menu) as MenuItem

  if (!currentItem) return
  console.log('menu select: currentItem = ', currentItem)
  if (currentItem.queryTo) {
    setTimeout(() => {
      const el = document.querySelector(currentItem.queryTo)
      console.log('menu select: el = ', el)
      if (el) {
        // el.scrollTo({ top: el.scrollTop, 'behavior': 'smooth' })
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    }, 200)
  }
}
</script>

<style lang="scss">
.__fs-menu {
  .ant-menu-submenu-title {
    height: 100%;
  }
}
</style>
