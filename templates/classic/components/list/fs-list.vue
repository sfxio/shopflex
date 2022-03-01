<template>
  <ARow
    class="fs-grid fs-gap-6 fs-grid-cols-1 md:fs-grid-cols-2 lg:fs-grid-cols-3 xl:fs-grid-cols-4"
    v-bind="$attrs"
  >
    <ACol v-for="(item, index) in list" :key="index">
      <a
        :href="item.link"
        target="_blank"
        class="fs-flex fs-flex-col fs-justify-between fs-gap-2 fs-w-full fs-p-4 fs-shadow-md fs-rounded-lg hover:fs-shadow-xl hover:fs-text-black"
        style="height: 480px"
      >
        <template v-if="item.icon">
          <span v-html="item.icon"></span>
        </template>
        <template v-else>
          <img
            v-lazy="item.cover"
            class="fs-w-full fs-rounded-lg fs-overflow-hidden fs-object-cover"
            :alt="item.title"
          />
        </template>

        <div class="wrapper fs-mt-4 fs-mb-2">
          <span
            v-if="item.tag"
            class="fs-bg-primary fs-text-sm fs-px-4 fs-py-1 fs-rounded-lg fs-text-white"
          >
            {{ item.tag }}
          </span>
        </div>

        <h3 class="fs-text-lg fs-font-bold">{{ item.title }}</h3>

        <p>
          {{ item.description }}
        </p>

        <div class="date">
          <span v-if="item.date" class="fs-text-gray-300">{{ item.date }}</span>
        </div>
      </a>
    </ACol>
  </ARow>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import type { Item } from './index'

export default defineComponent({
  props: {
    list: {
      type: Array as PropType<Item[]>,
      default: () => [],
    },
  },
  setup() {},
})
</script>

<style scoped></style>
