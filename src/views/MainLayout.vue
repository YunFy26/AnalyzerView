<template>
  <div class="main-layout">
    <NavBar />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
.main-layout {
  /* min-height: 200vh; */
  background: #13132B;
}

.main-content {
  width: 100%;
  /* 移除所有内边距，让子页面自己控制布局 */
}

/* NavBar 的样式可以单独控制 */
:deep(.nav-bar) {
  padding: 0 40px;
}
</style> 