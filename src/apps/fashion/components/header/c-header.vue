<template>
  <header
    class="sh-flex sh-justify-between sh-items-center sh-font-sans sh-bg-white sh-z-1 sh-border-b-1 sh-border-solid sh-border-color-lightgray"
    :style="{ height: height }"
  >
    <div class="left sh-flex-center-col" style="width: 300px;">
      <CLogo />
    </div>
    <div class="middle sh-flex-1 sh-px-4">
      <h1 class="sh-mb-0 sh-font-bold sh-text-xl">{{ appConfig.title }}</h1>
      <p class="sh-mb-0">{{ appConfig.description }}</p>
    </div>
    <div
      class="right sh-flex sh-justify-end sh-items-center sh-gap-2 sh-pr-4"
      style="width: 300px;"
    >
      <template v-if="isLogin">
        <a-dropdown>
          <span class="sh-cursor-default">hello, {{ user.username }}</span>
          <template #overlay>
            <div class="menu sh-w-40 sh-bg-white sh-px-4 sh-py-2 sh-rounded">
              <ShLogoutBtn />
            </div>
          </template>
        </a-dropdown>
      </template>
      <template v-else>
        <LoginBtn />
      </template>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useConfigStore, useUserStore } from '@/store'
import CLogo from '../c-logo.vue'
import LoginBtn from '@/components/button/login/index.vue'
import ShLogoutBtn from '@/components/button/sh-logout-btn.vue'

export default defineComponent({
  name: 'CHeader',
  components: { CLogo, LoginBtn, ShLogoutBtn },
  props: {
    height: {
      type: String,
      default: '56px',
    },
  },
  setup() {
    const configStore = useConfigStore()
    const userStore = useUserStore()
    const appConfig = computed(() => configStore.appConfig)

    const isLogin = computed(() => userStore.isLogin)
    const user = computed(() => userStore.user)

    return {
      appConfig,
      isLogin,
      user,
    }
  },
})
</script>

<style scoped></style>
