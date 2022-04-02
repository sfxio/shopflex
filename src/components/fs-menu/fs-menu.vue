<template>
  <AMenu
    v-if="menu && menu.length"
    v-bind="$attrs"
    v-model:selectedKeys="selectedKeys"
    class="__fs-menu"
    @click="onClick"
  >
    <template v-for="item in menu" :key="item.id">
      <template v-if="item.children && item.children.length">
        <!-- <FsSubmenu :key="item.id" :item="item" /> -->
        <ASubMenu :key="item.id">
          <template #title>
            <Item :showIcon="showIcon" :item="item" />
            <!-- {{ item.children }} -->
          </template>
          <template #default>
            <AMenuItem v-for="cItem in item.children" :key="cItem.id">
              <Item :showIcon="showIcon" :item="cItem" />
            </AMenuItem>
          </template>
        </ASubMenu>
      </template>
      <template v-else>
        <AMenuItem :key="item.id">
          <Item :showIcon="showIcon" :item="item" />
        </AMenuItem>
      </template>
    </template>
  </AMenu>
</template>

<script setup lang="ts">
import { MenuItem } from '@/types'
import { PropType, ref } from 'vue'
import FsSubmenu from './fs-submenu.vue'
import Item from './item.vue'

const props = defineProps({
  menu: {
    type: Object as PropType<MenuItem[]>,
    required: true,
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
})
const selectedKeys = ref<any>()

const onClick = (payload: { keyPath: string[] }) => {
  const { keyPath } = payload
  const currentItem = keyPath.reduce((prev, key, index) => {
    const res = prev.find((item) => item.id === key)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return index === keyPath.length - 1 ? res : res.children
  }, props.menu) as MenuItem
  setTimeout(() => {
    selectedKeys.value = [...keyPath]
  }, 200)

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
