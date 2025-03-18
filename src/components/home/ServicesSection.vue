<script setup lang="ts">
/**
 * ServicesSection 組件
 *
 * 展示平台提供的主要功能和服務
 */
import { useThemeStore } from '@/stores/theme';
import ServiceCard from '@/components/home/ServiceCard.vue';

// 獲取主題狀態
const themeStore = useThemeStore();

// 服務項目列表
const services = [
  {
    id: 1,
    title: '智能配對',
    description: '運用先進的演算法，為您推薦最適合的交友對象。',
    icon: 'Icon-ipo-ai-intelligence',
  },
  {
    id: 2,
    title: '即時聊天',
    description: '安全、便捷的即時通訊功能，讓您輕鬆與新朋友交流。',
    icon: 'Icon-ipo-chat-bubble',
  },
  {
    id: 3,
    title: '興趣社群',
    description: '基於共同興趣的社群活動，讓您找到志同道合的夥伴。',
    icon: 'Icon-ipo-group',
  },
  {
    id: 4,
    title: '活動配對',
    description: '定期舉辦線上線下活動，創造自然交友的機會。',
    icon: 'Icon-ipo-calendar',
  },
];
</script>

<template>
  <section class="services-section" :class="{ 'dark-theme': themeStore.theme === 'dark' }">
    <div class="section-header">
      <h2>我們的特色</h2>
      <p>打造優質的社交體驗，讓每個人都能找到屬於自己的圈子</p>
    </div>

    <div class="services-grid">
      <ServiceCard v-for="service in services" :key="service.id" :service="service" />
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding: 4rem 0;
  margin-bottom: 4rem;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--el-color-primary);
  margin-bottom: 1rem;
  font-weight: 600;
  transition: color 0.3s;
}

.section-header p {
  font-size: 1.25rem;
  color: var(--el-text-color-secondary);
  transition: color 0.3s;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

/* .service-card {
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
} */

/* .service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
} */

/* .service-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  background-color: var(--el-color-primary-light-9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
} */

/* .service-icon .el-icon {
  font-size: 2rem;
  color: var(--el-color-primary);
  transition: color 0.3s;
} */

/* .service-card h3 {
  font-size: 1.5rem;
  color: var(--el-color-primary);
  margin-bottom: 1rem;
  transition: color 0.3s;
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
}

.learn-more:hover {
  color: var(--el-color-primary-light-3);
} */

/* 暗黑模式樣式 */
.dark-theme .section-header h2 {
  color: var(--el-color-primary-light-3);
}

.dark-theme .section-header p {
  color: var(--el-text-color-primary);
}

/* .dark-theme .service-card {
  background-color: var(--el-bg-color-overlay);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.dark-theme .service-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.dark-theme .service-icon {
  background-color: var(--el-color-primary-light-1);
}

.dark-theme .service-icon .el-icon {
  color: var(--el-color-white);
}

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
} */

@media (max-width: 768px) {
  .services-section {
    padding: 2rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
