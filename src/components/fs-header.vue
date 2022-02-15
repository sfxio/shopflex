<template>
  <header :style="headerStyle" class="fs-border-1">
    <div
      class="header__inner fs-m-auto fs-h-full fs-flex-jb-ic"
      :style="headerInnerStyle"
    >
      <FsLogo />
      <div class="wrapper fs-h-full fs-flex-1 fs-flex-je">
        <FsMenu />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/store'
import { computed } from 'vue'
import FsLogo from './fs-logo.vue'
import FsMenu from './fs-menu/fs-menu.vue'
const store = useConfigStore()
const globalConfig = computed(() => store.globalConfig)
const headerConfig = computed(() => store.headerConfig)

const headerStyle = {
  height: `${headerConfig.value.height}px`,
}
const headerInnerStyle = {
  width: `${globalConfig.value.pageWidth}px`,
}
</script>

<style scoped></style>
