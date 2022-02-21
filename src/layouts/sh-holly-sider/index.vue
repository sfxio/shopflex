<template>
  <div class="sh-holly-sider-layout">
    <header class="sh-holly-sider-layout-header"><slot name="header" /></header>
    <section class="sh-holly-sider-layout-section">
      <template v-if="position === 'right'">
        <main class="sh-holly-sider-layout-main"><slot name="main" /></main>
        <aside class="sh-holly-sider-layout-sider" :class="position">
          <slot name="sider" />
        </aside>
      </template>
      <template v-else>
        <aside class="sh-holly-sider-layout-sider" :class="position">
          <slot name="sider" />
        </aside>
        <main class="sh-holly-sider-layout-main"><slot name="content" /></main>
      </template>
    </section>
    <footer class="sh-holly-sider-layout-footer"><slot name="footer" /></footer>
  </div>
</template>

<script>
export default {
  name: 'SHHollySiderLayout',
  props: {
    position: {
      type: String,
      default: 'left',
    },
  },
}
</script>

<style scoped>
.sh-holly-sider-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.sh-holly-sider-layout-header,
.sh-holly-sider-layout-footer {
  padding: 8px 0;
}

.sh-holly-sider-layout-header {
  border-bottom: 1px solid #eee;
}

.sh-holly-sider-layout-section {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.sh-holly-sider-layout-main {
  flex: 1;
  padding: 12px;
  overflow: auto;
}

.sh-holly-sider-layout-sider {
  min-width: 196px;
  overflow: auto;
}

.right {
  border-left: 1px solid #eee;
}

.left {
  border-right: 1px solid #eee;
}

.sh-holly-sider-layout-footer {
  border-top: 1px solid #eee;
}
</style>
