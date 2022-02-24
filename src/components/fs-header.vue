<template>
  <header
    class="fs-fixed fs-z-fixed fs-top-0 fs-left-0 fs-right-0 fs-border-b-1 fs-px-4 fs-transition-all"
    :style="{ ...headerStyle, ...extra }"
  >
    <PageContainer class="fs-flex-ic fs-h-16">
      <FsLogo />
      <span class="fs-flex-1"></span>
      <div v-if="notPhone" class="wrapper fs-h-full">
        <div class="inner-wrapper fs-w-full fs-h-full fs-justify-end fs-flex">
          <FsMenu
            mode="horizontal"
            style="
              width: 100%;
              background: transparent;
              display: flex;
              align-items: center;
              border-bottom: none;
            "
          />
        </div>
      </div>

      <div v-else @click="handleOpenMenu">
        <ADrawer
          class="menu-drawer"
          :bodyStyle="{ padding: 0 }"
          :zIndex="999"
          :title="null"
          :placement="'left'"
          :visible="isVisible"
        >
          <FsMenu class="fs-mt-20" mode="inline" @select="handleSelect" />
        </ADrawer>
        <svg
          class="icon"
          style="
            width: 1.5em;
            height: 1.5em;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          "
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1453"
        >
          <path
            d="M963.764706 180.705882v120.470589H60.235294V180.705882h903.529412zM60.235294 602.352941h903.529412V481.882353H60.235294v120.470588z m0 301.176471h903.529412v-120.470588H60.235294v120.470588z"
            p-id="1454"
          ></path>
        </svg>
      </div>
    </PageContainer>
  </header>
</template>

<script setup lang="ts">
import FsLogo from './fs-logo.vue'
import FsMenu from './fs-menu/fs-menu.vue'
import PageContainer from './container/page-container.vue'
<<<<<<< HEAD
import { computed, Ref, ref } from 'vue'
=======
import { computed, ref } from 'vue'
>>>>>>> bbc20bbe721263b0378ba7b7ac3df928a53fdd94
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { useScrollContext } from '@/context'

const { isTop } = useScrollContext()
const bps = useBreakpoints(breakpointsTailwind)
const notPhone = bps.sm

const headerStyle = computed(() => {
  const top = isTop.value
  return {
    'border-color': top ? 'transparent' : '#eee',
    background: top ? 'var(--color-banner-bg)' : 'white',
  }
})
<<<<<<< HEAD
const extra = ref() as Ref<any>
=======
>>>>>>> bbc20bbe721263b0378ba7b7ac3df928a53fdd94

const isVisible = ref(false)

const handleOpenMenu = () => {
  isVisible.value = !isVisible.value
<<<<<<< HEAD

  if (isVisible.value) {
    extra.value = {
      background: 'white',
    }
  } else {
    extra.value = {}
  }
=======
>>>>>>> bbc20bbe721263b0378ba7b7ac3df928a53fdd94
}

const handleSelect = () => {
  isVisible.value = false
}
</script>

<style lang="scss" scoped>
.menu-drawer {
  .ant-drawer-body {
    padding: 0;
  }
}
</style>
