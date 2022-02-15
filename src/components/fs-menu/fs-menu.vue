<template>
  <ul class="menu fs-h-full fs-flex fs-gap-4">
    <li class="item">
      <RouterLink class="fs-text-black" to="/">Home</RouterLink>
    </li>

    <li class="item item-integration">
      <Dropdown
        content-style="top: 95%; left: 50%; transform: translate(-60%);"
      >
        <template #title>
          <span>Integration</span>
          <DownOutlined />
        </template>

        <template #content>
          <FsIntegration title="Integration" />
        </template>
      </Dropdown>
    </li>

    <li class="item item-suppliers">
      <Dropdown
        content-style="top: 95%; left: 50%; transform: translate(-60%);"
      >
        <template #title>
          <span>Suppliers</span>
          <DownOutlined />
        </template>

        <template #content>
          <FsSupplies />
        </template>
      </Dropdown>
    </li>

    <li class="item">
      <span>Tools</span>
    </li>

    <li class="item">
      <span>Resources</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import FsIntegration from './fs-integration.vue'
import { DownOutlined } from '@ant-design/icons-vue'
import Dropdown from '../dropdown.vue'
import FsSupplies from './fs-supplies.vue'
</script>

<style lang="scss" scoped>
.menu {
  .item {
    @apply fs-font-medium fs-text-lg fs-inline-flex fs-items-center fs-h-full fs-cursor-pointer;
    color: #222939;

    &.active {
      @apply fs-text-primary;
    }
  }
}

.item-integration {
}
</style>
