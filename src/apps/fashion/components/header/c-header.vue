<template>
  <header
    class="sh-bg-white sh-z-1 sh-border-b-1 sh-border-solid sh-border-color-lightgray"
    :style="{ height: height }"
  >
    header
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CHeader',
  props: {
    height: {
      type: String,
      default: '48px',
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
