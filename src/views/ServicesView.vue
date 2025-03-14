<script setup lang="ts">
/**
 * ServicesView 組件
 *
 * 展示公司提供的各種服務項目
 * 包含服務卡片、特色和客戶評價
 */
import { ref } from 'vue';

// 服務項目列表
const services = [
  {
    id: 1,
    title: '智能配對',
    description: '運用先進的演算法，為您推薦最適合的交友對象。',
    icon: 'MagicStick',
    features: ['個性化推薦', '興趣匹配', '地理位置優化', '智能篩選'],
  },
  {
    id: 2,
    title: '即時聊天',
    description: '安全、便捷的即時通訊功能，讓您輕鬆與新朋友交流。',
    icon: 'ChatDotRound',
    features: ['文字聊天', '語音通話', '表情包支持', '圖片分享'],
  },
  {
    id: 3,
    title: '興趣社群',
    description: '基於共同興趣的社群活動，讓您找到志同道合的夥伴。',
    icon: 'UserFilled',
    features: ['主題討論', '活動組織', '資源分享', '經驗交流'],
  },
  {
    id: 4,
    title: '活動配對',
    description: '定期舉辦線上線下活動，創造自然交友的機會。',
    icon: 'Calendar',
    features: ['線下聚會', '主題派對', '戶外活動', '興趣課程'],
  },
];

// 客戶評價
const testimonials = [
  {
    id: 1,
    name: '小明',
    age: 25,
    location: '台北',
    content: '透過 YY Friends 的智能配對系統，我認識了很多人，現在每週都會一起參加活動！',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: '美玲',
    age: 28,
    location: '台中',
    content: '平台的即時聊天功能很方便，介面也很友善，讓我能輕鬆地與新朋友保持聯繫。',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: '大偉',
    age: 30,
    location: '高雄',
    content: '加入興趣社群後，我找到了很多喜歡攝影的朋友，一起出去拍照真的很開心！',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];
</script>

<template>
  <div class="services-view">
    <header class="services-header">
      <h1>我們的服務</h1>
      <p>為您提供全方位的社交體驗</p>
    </header>

    <!-- 服務列表 -->
    <section class="services-list">
      <el-row :gutter="20">
        <el-col v-for="service in services" :key="service.id" :xs="24" :sm="12" :md="6">
          <el-card class="service-card" :body-style="{ padding: '20px' }">
            <div class="service-icon">
              <el-icon><component :is="service.icon" /></el-icon>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="feature-list">
              <li v-for="(feature, index) in service.features" :key="index">
                <el-icon><Check /></el-icon>
                {{ feature }}
              </li>
            </ul>
          </el-card>
        </el-col>
      </el-row>
    </section>

    <!-- 用戶評價 -->
    <section class="testimonials">
      <h2>用戶心得分享</h2>
      <el-row :gutter="20">
        <el-col v-for="testimonial in testimonials" :key="testimonial.id" :xs="24" :sm="8">
          <el-card class="testimonial-card">
            <div class="testimonial-content">
              <p>"{{ testimonial.content }}"</p>
            </div>
            <div class="testimonial-author">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="author-avatar" />
              <div class="author-info">
                <h3>{{ testimonial.name }}</h3>
                <p>{{ testimonial.age }}歲・{{ testimonial.location }}</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<style scoped>
.services-view {
  padding: 2rem;
  width: 100%;
  margin: 0;
  background-color: var(--el-bg-color-page, #faf8f6);
}

.services-header {
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInDown 0.8s ease-out;
  width: 100%;
}

.services-header h1 {
  font-size: 2.5rem;
  color: var(--el-color-primary, #e57cd8);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.services-header h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: var(--el-color-primary, #e57cd8);
  border-radius: 2px;
}

.services-header p {
  font-size: 1.2rem;
  color: var(--el-text-color-regular, #666);
}

.services-list {
  margin-bottom: 4rem;
  width: 100%;
}

.service-card {
  height: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 16px;
  border: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  background-color: var(--el-bg-color, #fff);
  animation: fadeInUp 0.8s ease-out;
  margin-bottom: 1.5rem;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(229, 124, 216, 0.15);
}

.service-icon {
  width: 72px;
  height: 72px;
  margin: 1.5rem auto;
  background-color: var(--el-color-primary-light-9, #fce7f6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1);
  background-color: var(--el-color-primary, #e57cd8);
}

.service-icon .el-icon {
  font-size: 2.2rem;
  color: var(--el-color-primary, #e57cd8);
  transition: all 0.3s ease;
}

.service-card:hover .service-icon .el-icon {
  color: var(--el-color-white, #fff);
}

.service-card h3 {
  font-size: 1.5rem;
  color: var(--el-color-primary, #e57cd8);
  margin-bottom: 1rem;
  text-align: center;
}

.service-card p {
  color: var(--el-text-color-regular, #666);
  margin-bottom: 1.5rem;
  text-align: center;
  line-height: 1.6;
  padding: 0 1.5rem;
}

.feature-list {
  list-style: none;
  padding: 0 1.5rem 1.5rem;
  margin: 0;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  color: var(--el-text-color-regular, #666);
  transition: all 0.3s ease;
}

.feature-list li:hover {
  color: var(--el-color-primary, #e57cd8);
  transform: translateX(5px);
}

.feature-list .el-icon {
  color: var(--el-color-success, #4caf50);
  font-size: 1.2rem;
}

.testimonials {
  margin-top: 4rem;
  padding: 3rem 2rem;
  background-color: var(--el-bg-color, #fff);
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  animation: fadeInUp 1s ease-out;
  width: 100%;
}

.testimonials h2 {
  text-align: center;
  font-size: 2rem;
  color: var(--el-color-primary, #e57cd8);
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.testimonials h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: var(--el-color-primary, #e57cd8);
  border-radius: 2px;
}

.testimonial-card {
  height: 100%;
  margin-bottom: 1rem;
  border: none;
  border-radius: 16px;
  background-color: var(--el-bg-color-page, #faf8f6);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(229, 124, 216, 0.12);
}

.testimonial-content {
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  position: relative;
}

.testimonial-content::before {
  content: '"';
  position: absolute;
  top: 0;
  left: 1rem;
  font-size: 3rem;
  color: var(--el-color-primary, #e57cd8);
  opacity: 0.2;
  font-family: serif;
}

.testimonial-content p {
  font-style: italic;
  color: var(--el-text-color-regular, #666);
  line-height: 1.8;
  margin-top: 1rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1.5rem 1.5rem;
}

.author-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--el-color-primary, #e57cd8);
  transition: all 0.3s ease;
}

.testimonial-card:hover .author-avatar {
  transform: scale(1.1);
  border-color: var(--el-color-success, #4caf50);
}

.author-info h3 {
  font-size: 1.2rem;
  color: var(--el-color-primary, #e57cd8);
  margin-bottom: 0.25rem;
}

.author-info p {
  font-size: 0.95rem;
  color: var(--el-text-color-regular, #666);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .services-view {
    padding: 1rem 0.5rem;
    width: 100%;
  }

  .services-header h1 {
    font-size: 1.8rem;
  }

  .services-header p {
    font-size: 1rem;
  }

  .service-card {
    margin-bottom: 1rem;
  }

  .service-icon {
    width: 60px;
    height: 60px;
    margin: 1rem auto;
  }

  .service-icon .el-icon {
    font-size: 1.8rem;
  }
}
</style>
