<script setup lang="ts">
/**
 * TestimonialsSection 組件
 *
 * 展示用戶評價和反饋
 */

// 用戶評價
const testimonials = [
  {
    id: 1,
    name: '小明',
    age: 25,
    location: '台北',
    content: '在 YY Friends 認識了很多人，平台的配對系統真的很準確！',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: '美玲',
    age: 28,
    location: '台中',
    content: '這裡的社群氛圍很溫暖，每個人都很友善，讓我找到了真正的朋友。',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: '大偉',
    age: 30,
    location: '高雄',
    content: '參加了幾次平台舉辦的活動，認識了很多有趣的人，現在已經是好朋友了！',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];
</script>

<template>
  <section class="testimonials-section">
    <div class="section-header">
      <h2>用戶心得</h2>
      <p>聽聽他們在 YY Friends 的故事</p>
    </div>

    <el-carousel :interval="5000" type="card" height="300px">
      <el-carousel-item v-for="testimonial in testimonials" :key="testimonial.id">
        <div class="testimonial-card">
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
        </div>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<style scoped>
.testimonials-section {
  padding: 4rem 0;
  margin-bottom: 4rem;
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
}

.section-header p {
  font-size: 1.25rem;
  color: var(--el-text-color-secondary);
}

.testimonial-card {
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.testimonial-content {
  margin-bottom: 2rem;
}

.testimonial-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--el-text-color-regular);
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info h3 {
  font-size: 1.2rem;
  color: var(--el-color-primary);
  margin-bottom: 0.25rem;
}

.author-info p {
  font-size: 0.9rem;
  color: var(--el-text-color-secondary);
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 2rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .testimonial-content p {
    font-size: 1rem;
  }
}
</style>
