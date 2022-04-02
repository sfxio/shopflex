<template>
  <AMenu v-if="menu && menu.length" v-bind="$attrs" class="__fs-menu">
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

defineProps({
  menu: {
    type: Object as PropType<MenuItem[]>,
    required: true,
  },
})
</script>

<style lang="scss">
.__fs-menu {
  .ant-menu-submenu-title {
    height: 100%;
  }
}
</style>
