<template>
  <ARow :gutter="[24, 24]" wrap v-bind="$attrs">
    <ACol
      :span="24"
      :md="12"
      :lg="8"
      :xl="6"
      v-for="(item, index) in list"
      :key="index"
    >
      <a
        :href="item.link"
        target="_blank"
        class="fs-flex fs-flex-col fs-justify-between fs-gap-2 fs-w-full fs-p-4 fs-shadow-md fs-rounded-lg hover:fs-shadow-xl"
        style="height: 480px;"
      >
        <template v-if="item.icon">
          <span v-html="item.icon"></span>
        </template>
        <template v-else>
          <img
            class="fs-w-full fs-rounded-lg fs-overflow-hidden fs-object-cover"
            v-lazy="item.cover"
            :alt="item.title"
          />
        </template>

        <div class="wrapper fs-mt-4 fs-mb-2">
          <span
            class="fs-bg-primary fs-text-sm fs-px-4 fs-py-1 fs-rounded-lg fs-text-white"
            v-if="item.tag"
          >
            {{ item.tag }}
          </span>
        </div>

        <h3 class="fs-text-lg fs-font-bold">{{ item.title }}</h3>

        <p>
          {{ item.description }}
        </p>

        <div class="date">
          <span class="fs-text-gray-300" v-if="item.date">{{ item.date }}</span>
        </div>
      </a>
    </ACol>
  </ARow>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import * as dayjs from 'dayjs'
dayjs.locale('us')

defineProps({ list: Array as PropType<any[]> })
</script>

<style scoped></style>
