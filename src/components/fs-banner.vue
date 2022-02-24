<template>
  <div class="banner fs-flex">
    <section class="fs-flex-1 fs-flex fs-flex-col fs-gap-8 fs-z-1">
      <h1
        class="fs-font-extrabold fs-text-3xl"
        v-bind="bannerStore.title.props"
        v-html="bannerStore.title.value"
      ></h1>
      <p
        class="fs-font-medium fs-text-xl"
        v-html="bannerStore.description.value"
        v-bind="bannerStore.description.props"
      ></p>

      <section class="benifit">
        <h2 class="fs-font-semibold fs-text-xl fs-mb-5">
          You will benefits from ShopFlex:
        </h2>

        <a-row class="fs-px-4" :gutter="notPhone ? [8, 8] : [16, 16]" wrap>
          <a-col
            v-for="(item, index) in bannerStore.benefits.list"
            :span="24"
            :key="index"
            v-bind="item.props"
          >
            <li
              class="fs-py-2 fs-font-semibold fs-text-lg sm:fs-py-4"
              v-bind="item.innerProps"
            >
              {{ item.value }}
            </li>
          </a-col>
        </a-row>
      </section>

      <div class="wrapper">
        <FsContactForm />
      </div>
    </section>

    <section class="fs-flex-jc-ic fs-hidden md:fs-flex" style="width: 40%;">
      <img
        class="fs-absolute"
        style="width: 800px; margin-left: -20px; margin-top: 28px; z-index: 0;"
        alt="banner"
        v-lazy="banner"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useBanner } from '@/store'
import { banner } from '@/assets/images'
import FsContactForm from './fs-contact-form.vue'
import { useTailwindBreakpoints } from '@/hooks'

const { notPhone } = useTailwindBreakpoints()

const bannerStore = useBanner()
</script>

<style lang="scss" scoped>
// .item {
//   &::before {
//     content: '';
//     width: 4px;
//     height: 4px;
//   }
// }
</style>
