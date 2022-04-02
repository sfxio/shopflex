<template>
  <ul class="solutions">
    <li class="solution-item fs-flex fs-flex-col fs-items-center fs-mb-24">
      <div class="title">
        <h2
          v-if="solution.title && solution.title.length"
          class="fs-text-center fs-text-4xl fs-font-bold"
        >
          <span
            :class="{ 'fs-text-primary': t.strong }"
            v-for="(t, index) in solution.title"
            :key="index"
          >
            {{ t.value }}
          </span>
          <!-- <span class="fs-text-primary"><Sspan>
          <span>Flex</span> -->
        </h2>
        <template v-if="solution.subtitle">
          <p
            class="fs-text-center fs-text-xl fs-font-medium fs-mt-2 fs-text-gray-500"
            v-for="(sub, index) in solution.subtitle"
            :key="index"
          >
            {{ sub.value }}
          </p>
        </template>
      </div>
      <img v-lazy="solution.url" />
    </li>

    <ARow class="fs-flex" :wrap="true">
      <ACol :span="24" :lg="12" v-for="(solution, index) in solution2" :key="index">
        <div class="title">
          <h2
            v-if="solution.title && solution.title.length"
            class="fs-text-center fs-text-4xl fs-font-bold"
          >
            <span
              :class="{ 'fs-text-primary': t.strong }"
              v-for="(t, index) in solution.title"
              :key="index"
            >
              {{ t.value }}
            </span>
            <!-- <span class="fs-text-primary"><Sspan>
          <span>Flex</span> -->
          </h2>
          <template v-if="solution.subtitle">
            <p
              class="fs-text-center fs-text-xl fs-font-medium fs-mt-2 fs-text-gray-500"
              v-for="(sub, index) in solution.subtitle"
              :key="index"
            >
              {{ sub.value }}
            </p>
          </template>
        </div>
        <img v-lazy="solution.url" style="width: 100%; max-width: 1200px;" />
      </ACol>
    </ARow>
  </ul>
</template>

<script setup lang="ts">
import { solutions } from '@/assets/images'
const solution = solutions[0]
const solution2 = solutions.slice(1)
</script>

<style scoped></style>
