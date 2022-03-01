<template>
  <div id="home" class="anchor">
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
          <FsTools />
        </RespContainer>
      </PageContainer>

      <PageContainer class="fs-w-full">
        <RespContainer>
          <FsNews />
        </RespContainer>
      </PageContainer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import FsTools from '../components/fs-tools/fs-tools.vue'
import FsBanner from '@/components/fs-banner.vue'
import PageContainer from '@/components/container/page-container.vue'
import RespContainer from '@/components/container/resp-container.vue'
import { icons } from '@/assets/icons'
import FsNews from '@/components/list/fs-news.vue'
// import FsMenu from '@/components/fs-menu/fs-menu.vue'

export default defineComponent({
  components: {
    PageContainer,
    RespContainer,
    FsBanner,
    FsTools,
    FsNews,
  },
  setup() {
    const waveStyle = {
      'background-image': `url(${icons.bgWave})`,
      height: '48rem',
      'margin-top': '-29rem',
    }
    return {
      waveStyle,
    }
  },
})
</script>

<style scoped></style>
