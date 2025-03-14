<script setup lang="ts">
/**
 * HeroSection 組件
 *
 * 網站首頁的英雄區塊，展示交友平台的主要價值主張
 * 包含吸引人的標題、簡短說明和註冊/登入按鈕
 */
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="hero-section">
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
    <div class="hero-image">
      <div class="image-placeholder">
        <el-icon><User-filled /></el-icon>
        <span>交友社群插圖</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 4rem 0;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, var(--el-color-primary-light-9) 0%, white 100%);
  border-radius: 16px;
  overflow: hidden;
}

.hero-content {
  flex: 1;
  padding: 0 2rem;
}

.hero-content h1 {
  font-size: 3rem;
  color: var(--el-color-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: 700;
}

.hero-content p {
  font-size: 1.25rem;
  color: var(--el-text-color-regular);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.image-placeholder {
  width: 100%;
  height: 400px;
  background-color: var(--el-color-primary-light-8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  color: var(--el-color-primary);
  transition: transform 0.3s ease;
}

.image-placeholder:hover {
  transform: translateY(-5px);
}

.image-placeholder .el-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-image {
    padding: 1rem;
  }

  .image-placeholder {
    height: 300px;
  }
}
</style>
