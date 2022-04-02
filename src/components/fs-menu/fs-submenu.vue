<template>
  <ASubMenu :key="item.id">
    <template #title>
      <Item :item="item" />
      <!-- {{ item.children }} -->
    </template>

    <template #default>
      <template v-for="cItem in item.children" :key="cItem.id">
        <!-- <template v-if="cItem.children && cItem.children.length">
        <FsSubmenu :item="cItem" :key="cItem.id" />
      </template> -->

        <!-- {{ cItem }} -->
        <template>
          <AMenuItem :key="cItem.id">
            <Item :item="cItem"></Item>
          </AMenuItem>
        </template>
      </template>
    </template>
  </ASubMenu>
</template>

<script setup lang="ts">
import { MenuItem } from '@/types'
import { PropType } from 'vue'
import Item from './item.vue'

defineProps({
  item: {
    type: Object as PropType<MenuItem>,
    required: true,
  },
})
</script>
<script lang="ts">
export default {
  name: 'FsSubmenu',
}
</script>

<style lang="scss" scoped></style>
