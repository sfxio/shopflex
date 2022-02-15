<template>
  <header class="fs-border-1 fs-py-2 fs-px-4">
    <PageContainer class="fs-flex-ic">
      <FsLogo />
      <div class="wrapper fs-h-full fs-flex-1">
        <div class="inner-wrapper fs-w-full fs-h-full fs-justify-end fs-hidden md:fs-flex">
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
</script>

<style scoped></style>
