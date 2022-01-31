<template>
  <a-sub-menu :key="item.id" :title="title">
    <template v-for="cItem in item.children">
      <template v-if="cItem.children && cItem.children.length">
        <ShSubMenu :item="cItem" :key="cItem.id" />
      </template>
      <template v-else>
        <ShMenuItem :item="cItem" :key="cItem.id" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import ShMenuItem from './sh-menu-item.vue'
import { renderItem } from './_helper'

export default defineComponent({
  name: 'ShSubMenu',
  components: {
    ShMenuItem,
  },
  props: {
    item: {
      type: Object as PropType<any>,
      required: true,
    },
  },
  setup(props) {
    const title = ref(renderItem(props.item))
    return {
      title,
    }
  },
})
</script>

<style scoped></style>
