<template>
  <component :is="is" v-bind="$attrs" @click="handleClick">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { useAuth } from '@/hooks'
import { upperCaseWord } from '@/utils'
import { defineComponent, defineAsyncComponent, computed } from 'vue'

export default defineComponent({
  name: 'SHLoginBtn',
  components: {
    DefaultBtn: defineAsyncComponent(() => import('./default.vue')),
  },
  setup(props: {
    type: string
    authLocation?: string | ((route?: any, router?: any) => any)
  }) {
    const is = computed(() => {
      const type = props.type ?? 'default'
      return `${upperCaseWord(type)}Btn`
    })

    const { toAuth } = useAuth()
    const handleClick = () => toAuth(props.authLocation ?? '/auth')
    return {
      is,
      handleClick,
    }
  },
})
</script>

<style scoped></style>
