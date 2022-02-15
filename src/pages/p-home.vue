<template>
  <LDefault>
    <PageContainer class="fs-pt-16">
      <FsBanner />
    </PageContainer>

    <PageContainer class="fs-pt-16">
      <FsBlock
        v-for="(block, index) in blocks"
        :key="index"
        :title="block.title"
        :list="block.list"
        :height="block.height"
      ></FsBlock>
    </PageContainer>
  </LDefault>
</template>

<script setup lang="ts">
import LDefault from '@/layouts/l-default.vue'
import { useConfigStore } from '@/store'
import { computed } from 'vue'
import FsBanner from '@/components/fs-banner.vue'
import PageContainer from '@/components/container/page-container.vue'
import FsBlock from '@/components/fs-block.vue'
import { useBlock } from '@/store/use-block'

const configStore = useConfigStore()
const globalConfig = computed(() => configStore.globalConfig)
const blockStore = useBlock()
const blocks = computed(() => blockStore.blocks)
</script>

<style scoped></style>
