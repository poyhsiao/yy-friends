<script setup lang="ts">
/**
 * NotFoundView 組件
 *
 * 404 頁面，當用戶訪問不存在的路由時顯示
 */
import { useThemeStore } from '@/stores/theme';
import { useRouter } from 'vue-router';

// 獲取主題狀態
const themeStore = useThemeStore();

// 獲取路由器
const router = useRouter();

// 返回首頁
const goHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="not-found-page" :class="{ 'dark-theme': themeStore.theme === 'dark' }">
    <div class="container">
      <div class="error-content">
        <h1>404</h1>
        <h2>頁面未找到</h2>
        <p>抱歉，您訪問的頁面不存在或已被移除。</p>
        <el-button type="primary" @click="goHome">
          <el-icon><Icon-mdi-home /></el-icon>
          返回首頁
        </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--el-bg-color);
  color: var(--el-text-color-primary);
  transition: background-color 0.3s, color 0.3s;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
}

.error-content {
  padding: 3rem 0;
}

h1 {
  font-size: 8rem;
  color: var(--el-color-primary);
  margin: 0;
  line-height: 1;
}

h2 {
  font-size: 2.5rem;
  margin: 1rem 0;
}

p {
  font-size: 1.2rem;
  color: var(--el-text-color-secondary);
  margin-bottom: 2rem;
}

.el-button {
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
}

.el-icon {
  margin-right: 0.5rem;
}
</style>