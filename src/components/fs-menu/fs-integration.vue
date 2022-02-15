<template>
  <div
    class="fs-bg-white fs-w-full fs-h-full fs-shadow-lg fs-border-1-lightgray fs-rounded-lg fs-cursor-default fs-p-8"
    style="width: 640px;"
  >
    <h2 class="fs-heading2 fs-text-2xl" v-if="props.title">
      {{ props.title }}
    </h2>

    <a-row :gutter="[8, 8]" wrap>
      <a-col v-for="inte in integration" :key="inte.name" :span="12">
        <FsLink :link="inte.link" :route="inte.route" :target="inte.link ? '_blank' : ''">
          <div
            class="fs-flex-ic fs-gap-4 fs-p-2 fs-rounded-lg decorator-link-hover hover:fs-cursor-pointer"
          >
            <DCircle :size="48">
              <img :src="inte.icon" class="fs-w-8 fs-h-8" />
            </DCircle>

            <span class="fs-text-lg fs-text-black fs-font-semibold">
              {{ inte.name }}
            </span>
          </div>
        </FsLink>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import DCircle from '../decorator/d-circle.vue'
import { platformIcons } from '@/assets/icons'
import FsLink from '../fs-link.vue'
const props = defineProps({
  title: String,
})
const integration: any = [
  {
    name: 'Shopify',
    icon: platformIcons.shopify,
    // link: ''
    route: {
      path: '/integration/shopify',
    },
  },
  {
    name: 'Wix',
    icon: platformIcons.wix,
    // link: ''
    route: {
      path: '/integration/wix',
    },
  },
]
</script>

<style scoped lang="scss"></style>
