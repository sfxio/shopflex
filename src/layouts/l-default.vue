<template>
  <div
    ref="rootRef"
    style="height: 100vh;"
    class="fs-relative fs-flex fs-flex-col fs-overflow-x-hidden"
  >
    <FsHeader />
    <main class="fs-flex-1">
      <slot />
    </main>
    <FsFooter />
  </div>
</template>

<script lang="ts" setup>
import FsHeader from '@/components/fs-header.vue'
import FsFooter from '@/components/fs-footer.vue'
import { useScrollProvide } from '@/context'
import { ref } from 'vue'

const rootRef = ref<HTMLElement | null>(null)
useScrollProvide(rootRef)
</script>

<style scoped></style>
