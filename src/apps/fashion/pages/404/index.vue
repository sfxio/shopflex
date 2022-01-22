<template>
  <div>
    not found
    <button @click="handleClick" style="padding: 20px; background: lightgreen;">
      back home
    </button>
    <SHBtn />
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import SHBtn from '@/components/button/login/index.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PNotFound',
  components: {
    SHBtn,
  },
  setup() {
    const router = useRouter()
    const handleClick = () => {
      router.push({
        path: '/',
      })
    }

    return {
      handleClick,
    }
  },
})
</script>

<style lang="scss" scoped></style>
