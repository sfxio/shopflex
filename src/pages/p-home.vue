<template>
  <LDefault>
    <div class="wrapper" :style="{ background: 'var(--color-banner-bg)' }">
      <PageContainer class="fs-pt-32">
        <RespContainer>
          <FsBanner />
        </RespContainer>
      </PageContainer>
      <div class="wave fs-h-52" :style="waveStyle"></div>
    </div>

    <div class="wrapper fs-flex fs-flex-col fs-gap-8">
      <PageContainer class="fs-w-full">
        <RespContainer>
          <FsList></FsList>
        </RespContainer>
      </PageContainer>

      <PageContainer>
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
    </div>
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
import { icons } from '@/assets/icons'
import FsList from '../components/fs-list.vue'

const blockStore = useBlock()
const blocks = computed(() => blockStore.blocks)
const waveStyle = {
  'background-image': `url(${icons.bgWave})`,
  height: '48rem',
  'margin-top': '-29rem',
}
</script>

<style scoped></style>
