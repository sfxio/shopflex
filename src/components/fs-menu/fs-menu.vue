<template>
  <AMenu
    mode="horizontal"
    style="
      width: 100%;
      background: transparent;
      display: flex;
      align-items: center;
    "
  >
    <template v-for="item in menu" :key="item.id">
      <template v-if="item.children">
        <ASubMenu :key="item.id">
          <template #title>
            <a
              class="title fs-flex fs-gap-2 fs-justify-center"
              style="min-width: 80px;"
              :href="`#${item.id}`"
            >
              <span>
                {{ item.title }}
              </span>
              <svg
                class="icon"
                style="
                  margin-top: 6px;
                  width: 1em;
                  height: 1em;
                  vertical-align: middle;
                  fill: currentColor;
                  overflow: hidden;
                "
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1466"
              >
                <path
                  d="M979.0208 301.99808l-47.104-47.04768-419.98848 419.9424-419.89632-419.9424-47.0528 47.0528 419.89632 419.93728v0.00512l47.09888 47.104 47.04256-47.0528z"
                  p-id="1467"
                ></path>
              </svg>
            </a>
          </template>
          <AMenuItem v-for="cItem in item.children" :key="cItem.id">
            <a class="sub-title" :href="`#${cItem.id}`">{{ cItem.title }}</a>
          </AMenuItem>
        </ASubMenu>
      </template>

      <template v-else>
        <AMenuItem :key="item.id">
          <a class="title" :href="`#${item.id}`">{{ item.title }}</a>
        </AMenuItem>
      </template>
    </template>
  </AMenu>
</template>

<script setup lang="ts">
import { toolsItem } from '@/assets/data'
interface Item {
  title: string
  id: string
  href?: string
  as?: string
  children?: Item[]
}

const menu = [
  { title: 'Home', id: 'home', href: '/', as: 'RouterLink' },
  toolsItem,
  { title: 'News', id: 'news' },
] as Item[]
</script>

<style lang="scss" scoped>
.title {
  @apply fs-text-lg fs-font-semibold;
}

.sub-title {
  @apply fs-font-medium;
}
</style>
