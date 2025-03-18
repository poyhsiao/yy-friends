<script setup lang="ts">
/**
 * ServiceCard 組件
 *
 * 展示單一服務項目的卡片
 */
import { useThemeStore } from '@/stores/theme';
import { computed } from 'vue';

const themeStore = useThemeStore();

interface Props {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
}

const props = defineProps<Props>();

const iconColor = computed(() => {
    return themeStore.theme === 'dark' ? 'var(--el-color-white)' : 'var(--el-color-primary)';
});

</script>

<template>
  <div class="service-card" :class="{ 'dark-theme': themeStore.theme === 'dark' }">
    <div class="service-icon">
      <el-icon :color="iconColor" size="20" v-if="props.service.id === 1"><Icon-mdi-magic /></el-icon>
      <el-icon :color="iconColor" size="20" v-if="props.service.id === 2"><Icon-ic-baseline-chat /></el-icon>
      <el-icon :color="iconColor" size="20" v-if="props.service.id === 3"><Icon-ic-round-groups /></el-icon>
      <el-icon :color="iconColor" size="20" v-if="props.service.id === 4"><Icon-mdi-calendar-month-outline/></el-icon>
    </div>
    <h3>{{ props.service.title }}</h3>
    <p>{{ props.service.description }}</p>
    <RouterLink :to="`/services#${props.service.id}`" class="learn-more">
      了解更多 <el-icon><arrow-right /></el-icon>
    </RouterLink>
  </div>
</template>

<style scoped>
.service-card {
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: 100%; /* Make cards equal height */
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.service-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  background-color: var(--el-color-primary-light-9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.service-icon .el-icon {
  font-size: 2rem;
  /* color: var(--el-color-primary); */
  transition: color 0.3s;
}

.service-card h3 {
  font-size: 1.5rem;
  color: var(--el-color-primary);
  margin-bottom: 1rem;
  transition: color 0.3s;
  flex: 1; /* Allow title to grow and push other content down */
}

.service-card p {
  color: var(--el-text-color-regular);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  transition: color 0.3s;
}

.learn-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--el-color-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  margin-top: auto; /* Push to bottom */
}

.learn-more:hover {
  color: var(--el-color-primary-light-3);
}

/* 暗黑模式樣式 */
.dark-theme .service-card {
  background-color: var(--el-bg-color-overlay);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.dark-theme .service-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.dark-theme .service-icon {
  background-color: var(--el-color-primary-light-1);
}

/* .dark-theme .service-icon .el-icon {
  color: var(--el-color-white);
} */

.dark-theme .service-card h3 {
  color: var(--el-color-primary-light-3);
}

.dark-theme .service-card p {
  color: var(--el-text-color-primary);
}

.dark-theme .learn-more {
  color: var(--el-color-primary-light-3);
}

.dark-theme .learn-more:hover {
  color: var(--el-color-primary-light-5);
}
</style>
