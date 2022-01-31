<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'ShItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  render() {
    const item = this.$props.item
    console.log('item: ', item)
    return h('span', { class: 'sh-flex sh-w-full sh-items-center' }, [
      h(item.prepend),
      h('span', { class: 'sh-flex-1' }, item.content),
      item.append,
    ])
  },
})
</script>

<style scoped></style>
