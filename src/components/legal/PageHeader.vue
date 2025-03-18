<script setup lang="ts">
                     /**
 * PageHeader 組件
 *
 * 用於法律相關頁面（如使用條款、隱私政策等）的頁面標題區塊
 * 提供統一的標題樣式和格式
 */

defineProps({
  /**
   * 頁面主標題
   */
  title: {
    type: String,
    required: true
  },
  /**
   * 頁面副標題
   */
  subtitle: {
    type: String,
    required: true
  }
});
</script>

<template>
  <section class="page-header">
    <h1>{{ title }}</h1>
    <p class="subtitle">{{ subtitle }}</p>
  </section>
</template>

<style scoped>
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: var(--el-text-color-primary);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--el-text-color-secondary);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>