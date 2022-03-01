<template>
  <AMenu v-bind="$attrs">
    <template v-for="item in menu">
      <template v-if="item.children">
        <ASubMenu :key="item.id">
          <template #title>
            <a
              class="title"
              :class="
                mode === 'horizontal'
                  ? 'fs-flex fs-justify-center fs-gap-2'
                  : 'fs-flex-ic'
              "
              style="min-width: 80px; line-height: 44px"
            >
              <!-- :href="`#${item.id}`" -->
              <span>
                {{ item.title }}
              </span>
              <svg
                v-if="mode === 'horizontal'"
                class="icon"
                style="
                  margin-top: 14px;
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
          <template v-if="item.location">
            <RouterLink class="title" :to="item.location">
              {{ item.title }}
            </RouterLink>
          </template>
          <template v-else>
            <a class="title" :href="item.href">{{ item.title }}</a>
          </template>
        </AMenuItem>
      </template>
    </template>
  </AMenu>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from '@nuxtjs/composition-api'
import { toolsItem } from '@/assets/data'

interface Item {
  title: string
  id: string
  href?: string
  as?: string
  location?: any
  children?: Item[]
}

export default defineComponent({
  setup(props, { attrs }) {
    const menu = [
      { title: 'Home', id: 'home', href: '/#home', as: 'RouterLink' },
      toolsItem,
      { title: 'News', id: 'news', href: '/#news' },
      {
        title: 'Blog',
        id: 'blog',
        location: {
          path: '/blog',
        },
      },
    ] as Item[]

    const mode = computed(() => attrs.mode || 'vertical') as ComputedRef<
      'vertical' | 'inline' | 'horizontal'
    >

    return {
      menu,
      mode,
    }
  },
})
</script>

<style lang="scss" scoped>
.title {
  @apply fs-text-lg fs-font-semibold;
  line-height: 2.75rem;
}

.sub-title {
  @apply fs-font-semibold;
}
</style>
