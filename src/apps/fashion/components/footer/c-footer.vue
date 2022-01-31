<template>
  <footer
    class="sh-bg-white sh-border-t-1 sh-border-solid sh-border-color-lightgray"
    :style="{ height: height }"
  >
    footer
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CFooter',
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
