<template>
  <div class="item">
    <RouterLink :to="item.location">
      {{ item.title }}
    </RouterLink>
    <svg
      v-if="showIcon && item.children && item.children.length"
      class="icon"
      style="
        margin-left: 4px;
        width: 1em;
        height: 1em;
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
      "
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1466"
    >
      <path
        d="M979.0208 301.99808l-47.104-47.04768-419.98848 419.9424-419.89632-419.9424-47.0528 47.0528 419.89632 419.93728v0.00512l47.09888 47.104 47.04256-47.0528z"
        p-id="1467"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { MenuItem } from '@/types'
import { PropType } from 'vue'

defineProps({
  item: {
    type: Object as PropType<MenuItem>,
    required: true,
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
})
</script>

<style lang="scss" scoped>
.item {
  @apply fs-text-lg fs-font-semibold;
  @apply fs-flex fs-items-center;
  @apply fs-h-full;

  transition: all 500ms;
}
</style>
