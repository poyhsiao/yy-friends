<script setup lang="ts">
/**
 * HeroSection 組件
 *
 * 網站首頁的英雄區塊，展示交友平台的主要價值主張
 * 包含吸引人的標題、簡短說明和註冊/登入按鈕
 */
import { RouterLink } from 'vue-router';
import { useThemeStore } from '@/stores/theme';
import { Icon } from '@iconify/vue';

// 獲取主題狀態
const themeStore = useThemeStore();
</script>

<template>
  <section class="hero-section" :class="{ 'dark-theme': themeStore.theme === 'dark' }">
    <div class="hero-background-container">
      <img src="https://images.unsplash.com/photo-1519671845924-1fd18db430b8?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="交友社群背景" class="hero-background" />
    </div>
    <div class="hero-content">
      <h1>在YY Friends，遇見妳的知心好友</h1>
      <p>
        專為女性打造的溫馨友善社群，讓妳輕鬆找到志同道合的新朋友，分享生活、互相支持。
      </p>
      <div class="hero-buttons">
        <RouterLink to="/auth">
          <el-button type="primary" size="large"><Icon icon="material-symbols:person-add" style="margin-right: 0.5em;" />立即加入</el-button>
        </RouterLink>
        <RouterLink to="/about">
          <el-button size="large"><Icon icon="material-symbols:info" style="margin-right: 0.5em;" />了解更多</el-button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  padding: 4rem 0; /* Reduced padding */
  margin-bottom: 2rem; /* Reduced margin */
  border-radius: 16px;
  overflow: hidden;
  transition: color 0.3s;
  min-height: 400px; /* Reduced height */
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
  background-color: rgba(255, 228, 230, 0.8); /* Lighter pink with transparency */
  border-radius: 16px;
  padding: 2rem;
  margin-left: 3rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* More subtle shadow */
  backdrop-filter: blur(5px);
  transition: background-color 0.3s;
}

.hero-content h1 {
  font-size: 2.5rem; /* Slightly smaller font size */
  color: var(--el-color-primary);
  margin-bottom: 1rem;
  line-height: 1.2;
  font-weight: 600; /* Slightly less bold */
  transition: color 0.3s;
}

.hero-content p {
  font-size: 1.1rem; /* Slightly smaller font size */
  color: var(--el-text-color-regular);
  margin-bottom: 1.5rem; /* Reduced margin */
  line-height: 1.6;
  transition: color 0.3s;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

/* 暗黑模式樣式 */
.dark-theme .hero-content {
  background-color: rgba(30, 30, 30, 0.85);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.dark-theme .hero-content h1 {
  color: var(--el-color-primary-light-3);
}

.dark-theme .hero-content p {
  color: var(--el-text-color-primary);
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
    .hero-buttons {
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.75rem;
    }
}
</style>
