<template>
  <div class="banner fs-flex">
    <section class="fs-flex-1 fs-flex fs-flex-col fs-gap-8">
      <h1
        class="fs-font-extrabold fs-text-4xl fs-text-center xl:fs-text-left"
        v-bind="bannerStore.title.props"
        v-html="bannerStore.title.value"
      ></h1>
      <p
        class="fs-font-medium fs-text-xl fs-text-center xl:fs-text-left"
        v-html="bannerStore.description.value"
        v-bind="bannerStore.description.props"
      ></p>

      <section class="benifit">
        <h2 class="fs-font-semibold fs-text-xl fs-mb-5">
          You will benefits from ShopFlex:
        </h2>

        <a-row class="fs-px-4" :gutter="[8, 8]" wrap>
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

      <div class="wrapper">
        <FsContactForm />
      </div>
    </section>

    <section class="fs-flex-1 fs-flex-ic fs-hidden md:fs-flex">
      <img alt="banner" v-lazy="banner" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useBanner } from '@/store'
import { banner } from '@/assets/images'
import FsContactForm from './fs-contact-form.vue'

const bannerStore = useBanner()
</script>

<style scoped></style>
