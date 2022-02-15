<template>
  <div
    class="fs-inline-flex fs-justify-center fs-items-center fs-rounded-full"
    :style="circleStyle"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: Number,
    required: true,
  },
  background: {
    type: String,
    default: '#f7faff',
  },
})

const circleStyle = computed(() => {
  const size = `${props.size}px`
  return {
    width: size,
    height: size,
    background: props.background,
  }
})
</script>

<style scoped></style>
