<template>
  <div class="banner">
    <section>
      <h1
        class="fs-font-bold fs-text-4xl fs-text-center xl:fs-text-left"
        v-bind="bannerStore.title.props"
      >
        {{ bannerStore.title.value }}
      </h1>
      <p
        class="fs-font-medium fs-text-xl"
        v-bind="bannerStore.description.props"
      >
        {{ bannerStore.description.value }}
      </p>
    </section>

    <section class="benifit fs-mt-8">
      <h2 class="fs-font-semibold fs-text-xl fs-mb-5">
        You will benefits from ShopFlex:
      </h2>

      <a-row
        class="fs-px-4"
        :gutter="[8, 8]"
        wrap
        v-bind="bannerStore.benefits.props"
      >
        <a-col
          v-for="(item, index) in bannerStore.benefits.list"
          :span="24"
          :sm="12"
          :md="8"
          :key="index"
          v-bind="item.props"
        >
          <li
            class="fs-py-4 fs-font-semibold fs-text-xl"
            v-bind="item.innerProps"
          >
            {{ item.value }}
          </li>
        </a-col>
      </a-row>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useBanner } from '@/store'

const bannerStore = useBanner()
</script>

<style scoped></style>
