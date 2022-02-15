<template>
  <div class="fs-flex-ic fs-h-full fs-gap-1 fs-dropdown fs-dropdown-hover">
    <div tabindex="0" :style="props.titleStyle" :class="props.titleClasses">
      <slot name="title" />
    </div>

    <div
      class="fs-dropdown-content"
      :style="props.contentStyle"
      :class="props.contentClasses"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { cssProps } from '@/utils'

const props = defineProps({
  titleStyle: cssProps,
  titleClasses: cssProps,
  contentStyle: cssProps,
  contentClasses: cssProps,
})
</script>

<style scoped></style>
