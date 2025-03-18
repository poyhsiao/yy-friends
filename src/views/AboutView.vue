<script setup lang="ts">
/**
 * AboutView 組件
 *
 * 展示平台的理念、團隊和使命
 */
import { useThemeStore } from '@/stores/theme';

// 獲取主題狀態
const themeStore = useThemeStore();

// 團隊成員資料
const teamMembers = [
  {
    id: 1,
    name: '陳思穎',
    position: '創辦人 & CEO',
    bio: '擁有10年社交平台開發經驗，致力於打造安全、友善的社交環境。',
    avatar: '/images/team/member1.jpg'
  },
  {
    id: 2,
    name: '林志明',
    position: '技術總監',
    bio: '資深全端工程師，專注於用戶體驗與系統安全，打造穩定高效的平台。',
    avatar: '/images/team/member2.jpg'
  },
  {
    id: 3,
    name: '王美玲',
    position: '用戶體驗設計師',
    bio: '擁有豐富的UI/UX設計經驗，致力於創造直覺且美觀的用戶界面。',
    avatar: '/images/team/member3.jpg'
  },
  {
    id: 4,
    name: '張家豪',
    position: '市場總監',
    bio: '擁有豐富的社群營銷經驗，專注於建立品牌形象與用戶社群。',
    avatar: '/images/team/member4.jpg'
  }
];

// 公司里程碑
const milestones = [
  {
    year: '2020',
    title: '創立初期',
    description: '友友平台正式成立，開始構建核心功能與理念。'
  },
  {
    year: '2021',
    title: '產品發布',
    description: '第一版應用正式上線，獲得首批用戶的支持與反饋。'
  },
  {
    year: '2022',
    title: '快速成長',
    description: '用戶數突破10萬，獲得A輪融資，擴大團隊規模。'
  },
  {
    year: '2023',
    title: '功能升級',
    description: '推出智能配對系統與興趣社群功能，大幅提升用戶體驗。'
  },
  {
    year: '2024',
    title: '全面升級',
    description: '平台全面升級，引入更多創新功能，致力於打造最優質的社交體驗。'
  }
];
</script>

<template>
  <div class="about-page" :class="{ 'dark-theme': themeStore.theme === 'dark' }">
    <!-- 頁面標題區 -->
    <section class="hero-section">
      <div class="container">
        <h1>關於友友</h1>
        <p class="subtitle">連結人與人，創造有意義的社交體驗</p>
      </div>
    </section>

    <!-- 我們的故事 -->
    <section class="story-section">
      <div class="container">
        <h2>我們的故事</h2>
        <div class="story-content">
          <div class="story-image">
            <img src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="友友的故事" />
          </div>
          <div class="story-text">
            <p>
              在瞬息萬變的數位時代，人與人之間的連結變得前所未有的容易，卻也更加脆弱。我們渴望被理解、被接納，卻常常迷失在無數的社交訊號中，難以建立真正有意義的關係。
            </p>
            <p>
              友友平台的誕生，正是為了解決這個問題。我們相信，科技應該成為人際關係的橋樑，而非阻礙。我們致力於打造一個溫暖、真實、充滿活力的社交空間，讓每個人都能在這裡找到志同道合的夥伴，建立深厚的情誼。
            </p>
            <p>
              我們深知，真誠的交流和共同的興趣是建立長久關係的基石。因此，友友平台不僅提供多元的互動方式，更鼓勵用戶分享真實的自我，發現彼此的閃光點。
            </p>
            <p>
              加入友友，開啟一段全新的社交旅程。在這裡，你不僅能拓展人脈，更能找到屬於自己的歸屬感。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 我們的使命 -->
    <section class="mission-section">
      <div class="container">
        <h2>我們的使命</h2>
        <div class="mission-cards">
          <div class="mission-card">
            <el-icon color="#d87aa0" size="30"><Icon-mdi-account-group /></el-icon>
            <h3>連結人與人</h3>
            <p>打破社交障礙，創造真實有意義的人際連結，讓每個人都能找到屬於自己的圈子。</p>
          </div>
          <div class="mission-card">
            <el-icon color="#d87aa0" size="30"><Icon-mdi-shield-check /></el-icon>
            <h3>安全與respect</h3>
            <p>建立安全、respect的社交環境，保護用戶隱私，杜絕騷擾與不當行為。</p>
          </div>
          <div class="mission-card">
            <el-icon color="#d87aa0" size="30"><Icon-mdi-heart-multiple /></el-icon>
            <h3>豐富生活</h3>
            <p>通過有意義的社交互動和活動，豐富用戶的生活體驗，創造美好回憶。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 發展歷程 -->
    <section class="timeline-section">
      <div class="container">
        <h2>發展歷程</h2>
        <div class="timeline">
          <div v-for="milestone in milestones" :key="milestone.year" class="timeline-item">
            <div class="timeline-year">{{ milestone.year }}</div>
            <div class="timeline-content">
              <h3>{{ milestone.title }}</h3>
              <p>{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 團隊介紹 -->
    <section class="team-section">
      <div class="container">
        <h2>認識我們的團隊</h2>
        <p class="team-intro">我們擁有一支充滿熱情和創意的團隊，致力於為用戶提供最佳的社交體驗。</p>
        <div class="team-grid">
          <div v-for="member in teamMembers" :key="member.id" class="team-card">
            <div class="member-avatar">
              <img :src="member.avatar" :alt="member.name" />
            </div>
            <h3>{{ member.name }}</h3>
            <p class="member-position">{{ member.position }}</p>
            <p class="member-bio">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 聯絡我們 -->
    <section class="contact-section">
      <div class="container">
        <h2>聯絡我們</h2>
        <p>有任何問題或建議，歡迎隨時與我們聯繫</p>
        <div class="contact-info">
          <div class="contact-item">
            <el-icon color="#d87aa0" size="24"><Icon-mdi-email-outline /></el-icon>
            <p>contact@yyfriends.com</p>
          </div>
          <div class="contact-item">
            <el-icon color="#d87aa0" size="24"><Icon-mdi-phone /></el-icon>
            <p>+886 2 1234 5678</p>
          </div>
          <div class="contact-item">
            <el-icon color="#d87aa0" size="24"><Icon-mdi-map-marker /></el-icon>
            <p>台北市信義區松仁路100號</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  color: var(--el-text-color-primary);
  transition: background-color 0.3s, color 0.3s;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* 頁面標題區 */
.hero-section {
  text-align: center;
  padding: 5rem 0;
  background: linear-gradient(135deg, #f2e8f5 0%, #f8f0fa 100%); /* 更柔和的漸層 */
  margin-bottom: 4rem;
  transition: background 0.3s;
}

.hero-section h1 {
  font-size: 3.8rem; /* 稍微增大字體大小 */
  color: var(--el-color-primary);
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-section .subtitle {
  font-size: 1.5rem;
  color: var(--el-text-color-secondary);
  max-width: 700px;
  margin: 0 auto;
}

/* 通用區塊樣式 */
section {
  margin-bottom: 5rem;
}

section h2 {
  font-size: 2.5rem;
  color: var(--el-color-primary);
  text-align: center;
  margin-bottom: 2.5rem;
  font-weight: 600;
}

/* 我們的故事 */
.story-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.story-image img {
  width: 100%;
  border-radius: 24px; /* 稍微增大圓角 */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.story-text p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
}

/* 我們的使命 */
.mission-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.mission-card {
  background-color: #f9f9f9; /* 更淺的背景顏色 */
  padding: 2.5rem 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mission-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.mission-card .el-icon {
  margin-bottom: 1.5rem;
}

.mission-card h3 {
  font-size: 1.5rem;
  color: var(--el-color-primary);
  margin-bottom: 1rem;
}

.mission-card p {
  color: var(--el-text-color-regular);
  line-height: 1.6;
}

/* 發展歷程 */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 120px;
  width: 3px;
  background-color: var(--el-color-primary-light-7);
}

.timeline-item {
  position: relative;
  display: flex;
  margin-bottom: 2.5rem;
}

.timeline-year {
  width: 100px;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--el-color-primary);
  text-align: right;
  padding-right: 2rem;
  flex-shrink: 0;
}

.timeline-content {
  position: relative;
  padding-left: 3rem;
}

.timeline-content::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--el-color-primary);
}

.timeline-content h3 {
  font-size: 1.3rem;
  color: var(--el-color-primary);
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: var(--el-text-color-regular);
  line-height: 1.6;
}

/* 團隊介紹 */
  .team-intro {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 3rem;
    font-size: 1.2rem;
    color: var(--el-text-color-secondary);
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2.5rem;
  }

  .team-card {
    background-color: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .team-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  .member-avatar {
    width: 100%;
    height: 250px;
    overflow: hidden;
  }

  .member-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .team-card h3 {
    font-size: 1.5rem;
    color: var(--el-color-primary);
    margin: 1.5rem 0 0.5rem;
  }

  .member-position {
    color: var(--el-color-primary-light-3);
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .member-bio {
    padding: 0 1.5rem 1.5rem;
    color: var(--el-text-color-regular);
    line-height: 1.6;
  }

  /* 聯絡我們 */
  .contact-section {
    background-color: var(--el-color-primary-light-9);
    padding: 4rem 0;
    border-radius: 16px;
    margin-bottom: 0;
    text-align: center;
    transition: background-color 0.3s;
  }

  .contact-section h2 {
    margin-bottom: 1rem;
  }

  .contact-section > .container > p {
    font-size: 1.2rem;
    color: var(--el-text-color-secondary);
    margin-bottom: 3rem;
  }

  .contact-info {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .contact-item p {
    font-size: 1.1rem;
    color: var(--el-text-color-primary);
  }

  /* 暗黑模式樣式 */
  .dark-theme .hero-section {
    background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
  }

  .dark-theme .mission-card,
  .dark-theme .team-card {
    background-color: var(--el-bg-color-overlay);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }

  .dark-theme .mission-card:hover,
  .dark-theme .team-card:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  .dark-theme .timeline::before {
    background-color: var(--el-color-primary-light-5);
  }

  .dark-theme .contact-section {
    background-color: var(--el-color-primary-light-1);
  }

  .dark-theme .contact-item p {
    color: var(--el-color-white);
  }

  /* 響應式設計 */
  @media (max-width: 992px) {
    .story-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .mission-cards {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      padding: 3rem 0;
    }

    .hero-section h1 {
      font-size: 2.5rem;
    }

    .hero-section .subtitle {
      font-size: 1.2rem;
    }

    section h2 {
      font-size: 2rem;
    }

    .timeline::before {
      left: 80px;
    }

    .timeline-year {
      width: 70px;
      font-size: 1.2rem;
    }

    .timeline-content {
      padding-left: 2rem;
    }

    .contact-info {
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>
