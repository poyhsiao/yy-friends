<script setup lang="ts">
/**
 * HomeView 組件
 *
 * 網站首頁，包含英雄區塊、服務介紹、關於我們簡介和客戶評價等部分
 * 支持響應式設計
 */
import HeroSection from '@/components/home/HeroSection.vue';
import ServicesSection from '@/components/home/ServicesSection.vue';
import AboutSection from '@/components/home/AboutSection.vue';
import StatsSection from '@/components/home/StatsSection.vue';
import TestimonialsSection from '@/components/home/TestimonialsSection.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="home-view">
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <StatsSection />
    <TestimonialsSection />

    <!-- 聯絡我們 -->
    <section class="contact-cta">
      <h2>準備好開始了嗎？</h2>
      <p>聯絡我們，了解我們如何幫助您實現目標</p>
      <RouterLink to="/contact">
        <el-button type="primary" size="large">立即聯絡</el-button>
      </RouterLink>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  padding: 0;
}

/* 聯絡我們 CTA */
.contact-cta {
  text-align: center;
  padding: 4rem 0;
  background-color: var(--el-color-primary-light-9);
  border-radius: 16px;
  margin-bottom: 4rem;
}

.contact-cta h2 {
  font-size: 2rem;
  color: var(--el-color-primary);
  margin-bottom: 1rem;
}

.contact-cta p {
  font-size: 1.2rem;
  color: var(--el-text-color-regular);
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .contact-cta {
    padding: 2rem;
  }
}
</style>
