<template>
  <div :style="containerStyle" v-bind="$attrs">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const containerStyle = computed(() => {
      return {
        'max-width': `1320px`,
        margin: 'auto',
      }
    })
    return {
      containerStyle,
    }
  },
})
</script>

<style scoped></style>
