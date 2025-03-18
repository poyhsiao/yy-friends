<script setup lang="ts">
                     /**
 * ContentSection 組件
 *
 * 用於法律相關頁面的內容區塊，顯示標題和相關內容
 * 提供統一的內容區塊樣式和格式
 */

defineProps({
  /**
   * 區塊標題
   */
  title: {
    type: String,
    required: true
  },
  /**
   * 是否為最後更新區塊
   */
  isLastUpdated: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="content-section" :class="{ 'last-updated': isLastUpdated }">
    <h2 v-if="title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<style scoped>
.content-section {
  margin-bottom: 2rem;
}

.content-section h2 {
  font-size: 1.5rem;
  color: var(--el-text-color-primary);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--el-border-color);
}

.content-section :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--el-text-color-regular);
}

.content-section :deep(ul) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.content-section :deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: var(--el-text-color-regular);
}

.last-updated {
  font-style: italic;
  color: var(--el-text-color-secondary);
  text-align: right;
  margin-top: 3rem;
  margin-bottom: 0;
}
</style>