<script lang="ts">
import { defineComponent } from 'vue'
import { useResponsive } from '@/hooks'

export default defineComponent({
  setup() {
    useResponsive()
    return {}
  },
  render() {
    return this.$slots.default()
  },
})
</script>

<style scoped></style>
