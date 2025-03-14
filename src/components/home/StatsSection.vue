<script setup lang="ts">
/**
 * StatsSection 組件
 *
 * 展示平台的重要統計數據
 */

// 統計數據
const stats = [
  { value: '100,000+', label: '註冊用戶', icon: 'ep:user' },
  { value: '50,000+', label: '成功配對', icon: 'ep:connection' },
  { value: '98%', label: '用戶滿意度', icon: 'ep:star-filled' },
  { value: '24/7', label: '全天候服務', icon: 'ep:service' },
];
</script>

<template>
  <section class="stats-section">
    <div v-for="(stat, index) in stats" :key="index" class="stat-item">
      <el-icon class="stat-icon"><component :is="stat.icon" /></el-icon>
      <div class="stat-value">{{ stat.value }}</div>
      <div class="stat-label">{{ stat.label }}</div>
    </div>
  </section>
</template>

<style scoped>
.stats-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 4rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--el-color-primary) 0%,
    var(--el-color-primary-light-3) 100%
  );
  padding: 3rem;
  border-radius: 16px;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.stat-item {
  flex: 1;
  min-width: 200px;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .stats-section {
    padding: 2rem;
  }

  .stat-item {
    flex-basis: calc(50% - 1rem);
    min-width: 150px;
    padding: 1rem;
  }

  .stat-value {
    font-size: 2rem;
  }
}
</style>
