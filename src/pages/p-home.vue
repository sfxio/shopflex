<template>
  <LDefault>
    <div id="home" class="anchor"></div>
    <div class="wrapper" :style="{ background: 'var(--color-banner-bg)' }">
      <PageContainer class="fs-pt-32">
        <RespContainer>
          <FsBanner />
        </RespContainer>
      </PageContainer>
      <div class="wave fs-h-52" :style="waveStyle"></div>
    </div>

    <div class="wrapper fs-mb-10 fs-flex fs-flex-col fs-gap-8">
      <PageContainer class="fs-w-full">
        <RespContainer>
          <FsTools />
        </RespContainer>
      </PageContainer>

      <PageContainer class="fs-w-full">
        <RespContainer>
          <FsNews />
        </RespContainer>
      </PageContainer>
    </div>
  </LDefault>
</template>

<script setup lang="ts">
import LDefault from '@/layouts/l-default.vue'
import FsBanner from '@/components/fs-banner.vue'
import PageContainer from '@/components/container/page-container.vue'
import RespContainer from '@/components/container/resp-container.vue'
import { icons } from '@/assets/icons'
import FsTools from '../components/fs-tools/fs-tools.vue'
import FsNews from '@/components/fs-news/fs-news.vue'

// const blocks = computed(() => blockStore.blocks)
const waveStyle = {
  'background-image': `url(${icons.bgWave})`,
  height: '48rem',
  'margin-top': '-29rem',
}
</script>

<style scoped></style>
