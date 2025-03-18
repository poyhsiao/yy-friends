<script setup lang="ts">
     /**
 * LegalPageContainer 組件
 *
 * 法律相關頁面的容器元件，提供統一的頁面結構和樣式
 * 包含頁面的基本佈局和響應式設計
 */
</script>

<template>
  <div class="legal-page">
    <slot></slot>
  </div>
</template>

<style scoped>
.legal-page {
  padding: 2rem 0;
}

.legal-page :deep(.content-container) {
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--el-bg-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 2rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .legal-page :deep(.content-container) {
    padding: 1.5rem;
  }
}
</style>