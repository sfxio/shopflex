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

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { nanoid } from 'nanoid'
import FsList from './fs-list.vue'
import { news } from '@/assets/data'

export default defineComponent({
  components: { FsList },
  setup() {
    const data = {
      title: 'News',
      id: nanoid(),
      description: undefined,
      list: news,
    }
    return {
      data,
    }
  },
})
</script>

<style scoped></style>
