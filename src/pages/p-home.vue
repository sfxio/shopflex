<template>
  <div class="__home __anchor"></div>
  <div class="wrapper" :style="{ background: 'var(--color-banner-bg)' }">
    <PageContainer class="fs-pt-32">
      <RespContainer>
        <FsBanner />
      </RespContainer>
    </PageContainer>
    <div class="wave fs-h-52" :style="waveStyle"></div>
  </div>

  <div class="wrapper fs-mb-10 fs-flex fs-flex-col fs-gap-20">
    <PageContainer class="fs-w-full">
      <RespContainer>
        <FsSolutions style="margin-top: -24px;" />

        <!-- <h2 class="fs-text-3xl fs-font-bold fs-text-center fs-mb-8">
          Dropshipping
        </h2>
        <FsDropship :show-title="false" /> -->
      </RespContainer>
    </PageContainer>

    <!-- <PageContainer class="fs-w-full">
        <RespContainer>
          <FsNews />
        </RespContainer>
      </PageContainer> -->
  </div>
</template>

<script setup lang="ts">
import FsBanner from '@/components/fs-banner.vue'
import PageContainer from '@/components/container/page-container.vue'
import RespContainer from '@/components/container/resp-container.vue'
import { icons } from '@/assets/icons'
import FsSolutions from '@/components/fs-solutions.vue'
import FsDropship from '@/components/fs-tools/fs-dropship.vue'
// import FsTools from '../components/fs-tools/fs-tools.vue'
// import FsNews from '@/components/list/fs-news.vue'
// import FsMenu from '@/components/fs-menu/fs-menu.vue'

// const blocks = computed(() => blockStore.blocks)
const waveStyle = {
  'background-image': `url(${icons.bgWave})`,
  height: '48rem',
  'margin-top': '-29rem',
}
</script>

<style scoped></style>
