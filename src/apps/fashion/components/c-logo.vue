<template>
  <ShLogo>
    <img class="sh-h-9" v-lazy="logo" />
  </ShLogo>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShLogo from '@/components/logo/sh-logo.vue'
import { logo } from '~/assets/images'

export default defineComponent({
  components: {
    ShLogo,
  },
  setup() {
    return {
      logo,
    }
  },
})
</script>

<style scoped></style>
