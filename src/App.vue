<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';
import { useThemeStore } from './stores/theme';
import { onMounted } from 'vue';

// 初始化主題
const themeStore = useThemeStore();
onMounted(() => {
  themeStore.initTheme();
});
</script>

<template>
  <div class="app" :class="{ 'dark-mode': themeStore.theme === 'dark' }">
    <AppHeader />
    <main class="main-content">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 2rem 1rem;
  margin: 0 auto;
  width: 100%;
  margin-top: 60px; /* 為固定定位的導航欄添加頂部間距 */
}

@media (max-width: 768px) {
  .main-content {
    padding: 1rem 0.5rem;
  }
}
</style>
