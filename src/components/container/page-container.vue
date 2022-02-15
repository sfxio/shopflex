<template>
  <div :style="containerStyle" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/store'
import { computed } from 'vue'

const configStore = useConfigStore()
const globalConfig = computed(() => configStore.globalConfig)

const containerStyle = computed(() => {
  return {
    'max-width': `${globalConfig.value.pageWidth}px`,
    margin: 'auto',
  }
})
</script>

<style scoped></style>
