<template>
  <a-layout style="height: 100vh;">
    <CHeader style="flex-shrink: 0;" />
    <a-layout style="overflow: hidden;" :style="contentStyle">
      <slot />
    </a-layout>
    <CFooter style="flex-shrink: 0;" />
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CHeader from '~/components/header/c-header.vue'
import CFooter from '~/components/footer/c-footer.vue'

export default defineComponent({
  name: 'LHeaderFooter',
  props: {
    contentStyle: {
      type: Object,
      default: () => ({
        background: 'white',
      }),
    },
  },
  setup() {
    return {}
  },
  components: { CHeader, CFooter },
})
</script>

<style scoped></style>
