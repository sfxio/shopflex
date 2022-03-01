<template>
  <div id="news">
    <header v-if="data.title" class="fs-py-2 fs-mb-8">
      <h2 :id="data.id" class="fs-text-center fs-mb-0 fs-text-4xl fs-font-bold">
        {{ data.title }}
      </h2>
      <p v-if="data.description">{{ data.description }}</p>
    </header>

    <FsList :list="data.list" />
  </div>
</template>

<script setup lang="ts">
import { news } from '@/assets/data'
import { nanoid } from 'nanoid'
import FsList from './fs-list.vue'

const data = {
  title: 'News',
  id: nanoid(),
  description: undefined,
  list: news,
}
</script>

<style scoped></style>
