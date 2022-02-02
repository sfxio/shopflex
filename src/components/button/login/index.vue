<template>
  <component :is="is" v-bind="$attrs" @click="handleClick">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { useUserStore } from '@/store'
import { useAuth } from '@/hooks'
import { isNotVoid, upperCaseWord } from '@/utils'
import { defineComponent, defineAsyncComponent, computed, PropType } from 'vue'

export default defineComponent({
  name: 'SHLoginBtn',
  components: {
    DefaultBtn: defineAsyncComponent(() => import('./default.vue')),
  },
  props: {
    type: {
      type: String as PropType<'default'>,
      default: 'default',
    },
    authLocation: {
      type: [String],
      default: '/auth',
    },
    beforeClick: {
      type: Function,
      default: () => true,
    },
  },
  setup(props) {
    const is = computed(() => {
      const type = props.type
      return `${upperCaseWord(type)}Btn`
    })

    const { toAuth } = useAuth()
    const userStore = useUserStore()
    const handleClick = async () => {
      if (!props.beforeClick()) {
        return
      }
      const token = window.localStorage.getItem('token')
      if (isNotVoid(token)) {
        const [err] = await userStore.setUserByTokenAsync(token)
        if (!err) {
          return
        } else {
          window.localStorage.removeItem('token')
        }
      }

      toAuth(props.authLocation)
    }
    return {
      is,
      handleClick,
    }
  },
})
</script>

<style scoped></style>
