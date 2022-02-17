<template>
  <header
    class="fs-fixed fs-z-fixed fs-top-0 fs-left-0 fs-right-0 fs-border-b-1 fs-px-4 fs-transition-all"
    :style="headerStyle"
  >
    <PageContainer class="fs-flex-ic fs-h-16">
      <FsLogo />
      <div class="wrapper fs-h-full fs-flex-1">
        <div
          class="inner-wrapper fs-w-full fs-h-full fs-justify-end fs-hidden md:fs-flex"
        >
          <FsMenu />
        </div>
      </div>
    </PageContainer>
  </header>
</template>

<script setup lang="ts">
import FsLogo from './fs-logo.vue'
import FsMenu from './fs-menu/fs-menu.vue'
import PageContainer from './container/page-container.vue'
import { computed } from 'vue'
import { useScrollContext } from '@/context'

const { isTop } = useScrollContext()

const headerStyle = computed(() => {
  const top = isTop.value
  return {
    'border-color': top ? 'transparent' : '#eee',
    background: top ? '#f7faff' : 'white',
  }
})
</script>

<style scoped></style>
