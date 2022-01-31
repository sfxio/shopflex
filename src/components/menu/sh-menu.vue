<template>
  <a-menu
    v-bind="$attrs"
    @click="(o) => handler('ShClick', o)"
    @select="(o) => handler('ShSelect', o)"
  >
    <template v-for="item in data">
      <template v-if="item.children && item.children.length">
        <ShSubMenu :item="item" :key="item.id" />
      </template>
      <template v-else>
        <ShMenuItem :item="item" :key="item.id" />
      </template>
    </template>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ShSubMenu from './sh-sub-menu.vue'
import ShMenuItem from './sh-menu-item.vue'

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<any[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const handler = (type: 'ShClick' | 'ShSelect', { keyPath }) => {
      const itemPath = []

      keyPath.reduce((prev, key, index) => {
        const item = prev.find((item) => item.id === key)
        itemPath.push(item)
        if (index + 1 !== keyPath.length) {
          prev = item.children
        }
        return prev
      }, props.data)

      return emit(type, {
        itemPath,
        item: itemPath[itemPath.length - 1],
      })
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return {
      handler,
    }
  },
  components: { ShSubMenu, ShMenuItem },
})
</script>

<style scoped></style>
