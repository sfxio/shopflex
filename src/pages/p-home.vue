<template>
  <LDefault>
    <PageContainer class="fs-pt-16">
      <RespContainer>
        <FsBanner />
      </RespContainer>
    </PageContainer>

    <PageContainer class="fs-pt-16">
      <RespContainer>
        <FsBlock
          v-for="(block, index) in blocks"
          :key="index"
          :title="block.title"
          :list="block.list"
          :height="block.height"
        ></FsBlock>
      </RespContainer>
    </PageContainer>
  </LDefault>
</template>

<script setup lang="ts">
import LDefault from '@/layouts/l-default.vue'
import { computed } from 'vue'
import FsBanner from '@/components/fs-banner.vue'
import PageContainer from '@/components/container/page-container.vue'
import FsBlock from '@/components/fs-block.vue'
import { useBlock } from '@/store/use-block'
import RespContainer from '@/components/container/resp-container.vue'

const blockStore = useBlock()
const blocks = computed(() => blockStore.blocks)
</script>

<style scoped></style>
