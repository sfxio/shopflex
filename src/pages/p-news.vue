<template>
  <LDefault>
    <!-- 锚点 -->
    <!-- <div class="__news __anchor"></div> -->
    <PageContainer class="fs-w-full fs-py-12">
      <RespContainer>
        <FsNews />
      </RespContainer>
    </PageContainer>
  </LDefault>
</template>

<script setup lang="ts">
import LDefault from '@/layouts/l-default.vue'
import PageContainer from '@/components/container/page-container.vue'
import RespContainer from '@/components/container/resp-container.vue'
import FsNews from '@/components/list/fs-news.vue'
// import FsMenu from '@/components/fs-menu/fs-menu.vue'

// const blocks = computed(() => blockStore.blocks)
</script>

<style scoped></style>
