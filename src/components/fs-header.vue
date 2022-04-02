<template>
  <header
    id="header"
    class="fs-fixed fs-z-fixed fs-top-0 fs-left-0 fs-right-0 fs-border-b-1 fs-px-4 fs-transition-all"
    :style="{ ...headerStyle, ...extra }"
  >
    <PageContainer class="fs-flex-ic fs-h-16">
      <ARow type="flex" style="width: 100%; height: 100%;" align="middle">
        <ACol :span="lg ? undefined : 12">
          <FsLogo />
        </ACol>

        <ACol
          flex="1 0 800px"
          style="display: flex; justify-content: end; height: 100%;"
          :span="lg ? undefined : 12"
        >
          <template v-if="lg">
            <FsMenu
              :menu="menu"
              :show-icon="true"
              mode="horizontal"
              :style="{
                background: 'transparent',
                border: 'none',
                width: '100%',
                justifyContent: 'end',
              }"
            />
          </template>

          <template v-else>
            <div @click="handleOpenMenu" class="fs-flex-ic">
              <ADrawer
                class="menu-drawer"
                :bodyStyle="{ padding: 0 }"
                :zIndex="999"
                :title="null"
                :placement="'left'"
                :visible="isVisible"
                width="320px"
              >
                <FsMenu class="fs-mt-20" mode="inline" :menu="menu" />
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
          </template>
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
import { useScrollContext } from '@/context'
import { useRoute } from 'vue-router'
import { useConfigStore } from '@/store'
import { useResponsiveInject } from '@/hooks'

const { isTop, y } = useScrollContext()
const route = useRoute()
// const notPhone = bps.sm
const configStore = useConfigStore()
const menu = computed(() => configStore.$state.menu)
const { notPhone, lg } = useResponsiveInject()

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
