<template>
  <header
    id="header"
    class="fs-fixed fs-z-fixed fs-top-0 fs-left-0 fs-right-0 fs-border-b-1 fs-px-4 fs-transition-all"
    :style="{ ...headerStyle, ...extra }"
  >
    <PageContainer class="fs-flex-ic fs-h-16">
      <ARow type="flex" style="width: 100%; height: 100%;" align="middle">
        <ACol>
          <FsLogo />
        </ACol>

        <ACol
          flex="1 0 800px"
          style="display: flex; justify-content: end; height: 100%;"
        >
          <FsMenu
            :menu="menu"
            mode="horizontal"
            :style="{
              background: 'transparent',
              border: 'none',
              width: '100%',
              justifyContent: 'end',
            }"
          />
        </ACol>
      </ARow>
    </PageContainer>
  </header>
</template>

<script setup lang="ts">
import FsLogo from './fs-logo.vue'
import FsMenu from './fs-menu/fs-menu.vue'
import PageContainer from './container/page-container.vue'
import { computed, Ref, ref } from 'vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { useScrollContext } from '@/context'
import { useRoute } from 'vue-router'
import { useConfigStore } from '@/store'

const { isTop, y } = useScrollContext()
const route = useRoute()
const bps = useBreakpoints(breakpointsTailwind)
// const notPhone = bps.sm
const configStore = useConfigStore()
const menu = computed(() => configStore.$state.menu)

const headerStyle = computed(() => {
  const top = isTop.value
  const isHome = route.path === '/'
  return {
    'border-color': top && isHome ? 'transparent' : '#eee',
    background: top && isHome ? 'var(--color-banner-bg)' : 'white',
  }
})
const extra = ref() as Ref<any>

const isVisible = ref(false)

const handleOpenMenu = () => {
  isVisible.value = !isVisible.value

  if (isVisible.value) {
    extra.value = {
      background: 'white',
    }
  } else {
    extra.value = {}
  }
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
