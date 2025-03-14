<script setup lang="ts">
/**
 * AboutSection 組件
 *
 * 展示平台理念和社群價值
 */
import { RouterLink } from 'vue-router';
import { useThemeStore } from '@/stores/theme';

// 獲取主題狀態
const themeStore = useThemeStore();
</script>

<template>
  <section class="about-section" :class="{ 'dark-theme': themeStore.theme === 'dark' }">
    <div class="about-content">
      <div class="section-header">
        <h2>關於 YY Friends</h2>
        <p>一個充滿溫暖與真誠的社交平台</p>
      </div>
      <p class="about-description">
        YY Friends
        成立於2023年，是一個致力於創造優質社交體驗的平台。我們相信，在這個數位時代，每個人都應該有機會建立真誠的友誼和找到心靈的歸屬。
      </p>
      <p class="about-description">
        我們的使命是為用戶提供一個安全、友善且充滿活力的社交環境，讓每個人都能在這裡找到志同道合的朋友，分享生活，互相支持與成長。
      </p>
      <RouterLink to="/about">
        <el-button>探索我們的故事</el-button>
      </RouterLink>
    </div>
    <div class="about-image">
      <div class="image-placeholder">
        <el-icon><Icon-ic-baseline-group /></el-icon>
        <span>社群活動剪影</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 4rem 0;
  margin-bottom: 4rem;
  background-color: var(--el-color-primary-light-9);
  border-radius: 16px;
  padding: 3rem;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.about-content {
  flex: 1;
}

.about-content .section-header {
  text-align: left;
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--el-color-primary);
  margin-bottom: 0.5rem;
  font-weight: 600;
  transition: color 0.3s;
}

.section-header p {
  font-size: 1.25rem;
  color: var(--el-text-color-secondary);
  transition: color 0.3s;
}

.about-description {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: var(--el-text-color-regular);
  font-size: 1.1rem;
  transition: color 0.3s;
}

.about-image {
  flex: 1;
}

.image-placeholder {
  width: 100%;
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  color: var(--el-color-primary);
  transition:
    transform 0.3s ease,
    background-color 0.3s,
    color 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.image-placeholder:hover {
  transform: translateY(-5px);
}

.image-placeholder .el-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  transition: color 0.3s;
}

/* 暗黑模式樣式 */
.dark-theme {
  background-color: var(--el-color-primary-light-1);
}

.dark-theme .section-header h2 {
  color: var(--el-color-white);
}

.dark-theme .section-header p {
  color: var(--el-text-color-primary);
}

.dark-theme .about-description {
  color: var(--el-text-color-primary);
}

.dark-theme .image-placeholder {
  background-color: var(--el-bg-color-overlay);
  color: var(--el-color-primary-light-3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .about-section {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .about-content .section-header {
    text-align: center;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .image-placeholder {
    height: 300px;
  }
}
</style>
