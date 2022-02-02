<template>
  <button
    class="sh-btn sh-border-none sh-btn-sm sh-w-full hover:sh-btn-primary"
    :style="btnStyle"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot>
      <span class="sh-font-semibold">
        Log Out
      </span>
    </slot>
  </button>
</template>

<script lang="ts">
import { useUserStore } from '@/store'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    btnClass: {
      type: String,
      default: '',
    },
    btnStyle: {
      type: Object,
      default: () => ({
        'text-transform': 'none',
      }),
    },
    beforeClick: {
      type: Function as PropType<() => boolean>,
      default: () => true,
    },
    afterClick: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    const userStore = useUserStore()
    const handleClick = () => {
      if (!props.beforeClick()) {
        return
      }
      userStore.logout()
      window.localStorage.removeItem('token')
      props.afterClick()
    }
    return {
      handleClick,
    }
  },
})
</script>

<style scoped></style>
