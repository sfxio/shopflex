<template>
  <a-row :gutter="notPhone ? [24, 24] : [48, 48]" wrap v-bind="$attrs">
    <a-col
      :span="24"
      :sm="12"
      :md="8"
      :xl="6"
      v-for="(item, index) in list"
      :key="index"
    >
      <a
        class="card-item fs-flex fs-flex-col fs-border-1-lightgray fs-text-black fs-shadow hover:fs-shadow-xl"
        target="_blank"
        :href="item.link"
      >
        <header class="header fs-flex-jc-ic fs-h-20 fs-border-b-1-lightgray">
          <template v-if="item.icon && item.name">
            <div class="fs-flex-jc-ic">
              <img
                style="max-height: 84px;"
                v-lazy="item.icon"
                v-bind="item.iconProps"
              />
              <span
                class="card-name fs-text-center fs-font-bold fs-text-2xl"
                v-html="item.name"
              ></span>
            </div>
          </template>
          <template v-else-if="item.icon">
            <img
              v-lazy="item.icon"
              style="max-height: 84px;"
              v-bind="item.iconProps"
            />
          </template>
          <template v-else-if="item.name">
            <span
              class="card-name fs-text-center fs-font-bold fs-text-2xl"
              v-html="item.name"
            ></span>
          </template>
        </header>

        <section class="content fs-px-4 fs-pt-6 fs-pb-3 fs-h-36">
          <p class="description fs-h-full fs-font-medium fs-overflow-hidden">
            {{ item.description }}
          </p>
        </section>
      </a>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { useTailwindBreakpoints } from '@/hooks'
import { computed, PropType } from 'vue'

const props = defineProps({ list: Array as PropType<Array<any>> })
const list = computed(() => props.list)
const { notPhone } = useTailwindBreakpoints()
</script>

<style lang="scss" scoped>
.card-item {
  .description {
    color: #505a64;
  }

  .card-name {
    color: black;
  }
}
</style>
