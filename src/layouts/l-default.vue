<template>
  <div style="height: 100vh;" class="fs-flex fs-flex-col fs-overflow-x-hidden">
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
</script>

<style scoped></style>
