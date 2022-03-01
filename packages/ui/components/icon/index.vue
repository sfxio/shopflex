<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { iconMap } from './iconMap'

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  render(h) {
    const src = iconMap[this.icon]
    return h('img', {
      attrs: {
        src,
        ...this.$attrs,
      },
    })
  },
})
</script>

<style scoped></style>
