<template>
  <div
    class="fs-bg-white fs-w-full fs-h-full fs-shadow-lg fs-border-1-lightgray fs-rounded-lg fs-cursor-default fs-p-8"
    style="width: 540px;"
  >
    <a-row :gutter="[8, 8]" wrap>
      <a-col v-for="sup in suppliers" :key="sup.id" :span="12">
        <FsLink
          :link="sup.link"
          :route="sup.route"
          target="_blank"
          class="fs-flex-ic fs-h-14 decorator-link-hover fs-p-2 fs-rounded-lg"
        >
          <img v-lazy="sup.icon" class="fs-h-4/5" />
        </FsLink>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { useSuppliers } from '@/store'
import { computed } from 'vue'
import FsLink from '../fs-link.vue'
const suppliersStore = useSuppliers()

const suppliers = computed(() => suppliersStore.suppliers)
</script>

<style scoped></style>
