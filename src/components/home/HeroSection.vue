<script setup lang="ts">
/**
 * HeroSection 組件
 *
 * 網站首頁的英雄區塊，展示交友平台的主要價值主張
 * 包含吸引人的標題、簡短說明和註冊/登入按鈕
 */
import { RouterLink } from 'vue-router';
import { useThemeStore } from '@/stores/theme';

// 獲取主題狀態
const themeStore = useThemeStore();
</script>

<template>
  <section class="hero-section" :class="{ 'dark-theme': themeStore.theme === 'dark' }">
    <div class="hero-background-container">
      <img src="@/assets/images/hero-background.svg" alt="交友社群背景" class="hero-background" />
    </div>
    <div class="hero-content">
      <h1>找到屬於你的真摯情誼</h1>
      <p>
        在 YY
        Friends，我們相信每個人都值得擁有真誠的友誼和美好的感情。加入我們，開啟你的社交新篇章。
      </p>
      <div class="hero-buttons">
        <RouterLink to="/register">
          <el-button type="primary" size="large">立即加入</el-button>
        </RouterLink>
        <RouterLink to="/about">
          <el-button size="large">了解更多</el-button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  padding: 6rem 0;
  margin-bottom: 4rem;
  border-radius: 16px;
  overflow: hidden;
  transition: color 0.3s;
  min-height: 500px;
  display: flex;
  align-items: center;
}

.hero-background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.hero-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
  transition: transform 0.3s ease;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 0 3rem;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 16px;
  padding: 2rem;
  margin-left: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  transition: background-color 0.3s;
}

.hero-content h1 {
  font-size: 3rem;
  color: var(--el-color-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: 700;
  transition: color 0.3s;
}

.hero-content p {
  font-size: 1.25rem;
  color: var(--el-text-color-regular);
  margin-bottom: 2rem;
  line-height: 1.6;
  transition: color 0.3s;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

/* 暗黑模式樣式 */
.dark-theme .hero-content {
  background-color: rgba(30, 30, 30, 0.85);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.dark-theme .hero-content h1 {
  color: var(--el-color-primary-light-3);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.dark-theme .hero-content p {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 1rem;
    min-height: 400px;
    margin-bottom: 2rem;
  }

  .hero-content {
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1.5rem;
    max-width: 90%;
  }

  .hero-content h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .hero-content p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 3rem 0.75rem;
    min-height: 350px;
  }

  .hero-content {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding: 1.25rem;
  }

  .hero-content h1 {
    font-size: 1.75rem;
  }

  .hero-content p {
    font-size: 1rem;
  }
}
</style>
