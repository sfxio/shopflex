<template>
  <div style="height: 100vh;">
    <FsHeader />
    <main>
      <slot />
    </main>
    <FsFooter />
  </div>
</template>

<script lang="ts" setup>
import FsHeader from '@/components/fs-header.vue'
import FsFooter from '@/components/fs-footer.vue'
import { useConfigStore } from '@/store'
import { computed } from 'vue'

const configStore = useConfigStore()
const headerConfig = computed(() => configStore.headerConfig)
</script>

<style scoped></style>
