<template>
  <a-row :gutter="[24, 24]" wrap v-bind="$attrs">
    <a-col :span="6" v-for="(item, index) in list" :key="index">
      <a
        class="card-item fs-flex fs-flex-col fs-border-1-lightgray fs-text-black hover:fs-shadow-lg"
        target="_blank"
        :href="item.link"
      >
        <header class="header fs-flex-jc-ic fs-h-20 fs-border-b-1-lightgray">
          <template v-if="item.icon && item.name">
            <div class="fs-flex-jc-ic">
              <img :src="item.icon" :alt="item.name" v-bind="item.iconProps" />
              <span
                class="card-name fs-font-bold fs-text-2xl"
                v-html="item.name"
              ></span>
            </div>
          </template>
          <template v-else-if="item.icon">
            <img :src="item.icon" :alt="item.name" v-bind="item.iconProps" />
          </template>
          <template v-else-if="item.name">
            <span
              class="card-name fs-font-bold fs-text-2xl"
              v-html="item.name"
            ></span>
          </template>
        </header>

        <section class="content fs-px-4 fs-py-6 fs-h-44">
          <p class="description">{{ item.description }}</p>
        </section>
      </a>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'

const props = defineProps({ list: Array as PropType<Array<any>> })
const list = computed(() => props.list)
</script>

<style lang="scss" scoped>
.card-item {
  &:hover {
    .description {
      color: var(--color-primary);
    }
  }

  .card-name {
    color: black;
  }

  .description {
    color: #505a64;
  }
}
</style>
