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
    <div class="about-background-container">
      <img src="@/assets/images/about-background.svg" alt="社群活動背景" class="about-background" />
    </div>
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
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
  margin-bottom: 4rem;
  border-radius: 16px;
  overflow: hidden;
  min-height: 450px;
  display: flex;
  align-items: center;
  transition: color 0.3s;
}

.about-background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.about-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
  transition: transform 0.3s ease;
}

.about-content {
  position: relative;
  z-index: 1;
  padding: 3rem;
  max-width: 650px;
  margin-left: 2rem;
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

/* 暗黑模式樣式 */
.dark-theme .section-header h2 {
  color: var(--el-color-white);
}

.dark-theme .section-header p {
  color: var(--el-text-color-primary);
}

.dark-theme .about-description {
  color: var(--el-text-color-primary);
}

@media (max-width: 768px) {
  .about-section {
    text-align: center;
    padding: 2rem;
  }

  .about-content {
    margin-left: 0;
    padding: 2rem;
    max-width: 90%;
    margin: 0 auto;
  }

  .about-content .section-header {
    text-align: center;
  }

  .section-header h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 1.5rem;
    min-height: 400px;
  }

  .about-content {
    padding: 1.5rem;
  }

  .section-header h2 {
    font-size: 1.75rem;
  }

  .section-header p {
    font-size: 1.1rem;
  }

  .about-description {
    font-size: 1rem;
  }
}
</style>
