<template>
  <div>
    <header v-if="props.title" class="fs-py-2" v-bind="props.headerProps">
      <slot name="title" :title="props.title">
        <h3 class="fs-mb-0 fs-text-xl fs-font-bold">
          {{ props.title }}
        </h3>
      </slot>
    </header>

    <section class="fs-py-4">
      <slot name="content" :list="props.list">
        <a-row :gutter="[24, 24]" wrap>
          <a-col :span="24" :sm="12" :md="8" v-for="(item, index) in list" :key="index">
            <FsLink
              :style="containerStyle"
              class="wrapper hover:fs-shadow-xl fs-overflow-hidden fs-block fs-border-4 fs-border-solid fs-border-secondary fs-p-2 fs-rounded-lg"
              :link="item.link"
              target="_blank"
            >
              <header class="fs-flex-ic fs-gap-2">
                <img v-lazy="item.icon" class="fs-w-10 fs-h-10" />
                <h3 class="fs-font-bold fs-text-xl fs-mb-0">
                  {{ item.title }}
                </h3>
              </header>
              <p
                class="fs-mt-2 fs-font-medium fs-text-black hover:fs-text-primary"
              >
                {{ item.description }}
              </p>
            </FsLink>
          </a-col>
        </a-row>
      </slot>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import FsLink from './fs-link.vue'

const props = defineProps({
  headerProps: Object,
  title: String,
  list: {
    type: Array as PropType<any>,
    required: true,
  },
  height: {
    type: Number,
    default: 172,
  },
})
const containerStyle = computed(() => {
  return {
    height: `${props.height}px`,
  }
})
</script>

<style scoped></style>
