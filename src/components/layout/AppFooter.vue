<script setup lang="ts">
/**
 * AppFooter 组件
 *
 * 移動端友好的頁腳組件，提供主要功能按鈕
 * 桌面端顯示完整頁腳內容和聯絡資訊
 */
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

// 獲取當前路由
const route = useRoute();

// 移動端導航按鈕
const navItems = [
  { name: '首頁', path: '/', icon: 'House' },
  { name: '配對', path: '/matching', icon: 'Connection' },
  { name: '發現', path: '/discover', icon: 'Compass' },
  { name: '聊天', path: '/chat', icon: 'ChatDotRound' },
  { name: '個人', path: '/profile', icon: 'User' },
];

// 頁腳導航連結
const footerLinks = [
  { name: '關於我們', path: '/about' },
  { name: '服務項目', path: '/services' },
  { name: '隱私政策', path: '/privacy' },
  { name: '使用條款', path: '/terms' },
  { name: '聯絡我們', path: '/contact' },
];
</script>

<template>
  <!-- 移動端導航欄 -->
  <footer class="app-footer">
    <!-- 移動端導航 -->
    <div class="mobile-nav-container">
      <RouterLink
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="mobile-nav-item"
        :class="{ active: route.path === item.path }"
      >
        <el-icon><component :is="item.icon" /></el-icon>
        <span>{{ item.name }}</span>
      </RouterLink>
    </div>

    <!-- 桌面端頁腳 -->
    <div class="desktop-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>友友配對</h3>
          <p>讓您找到志同道合的朋友，建立真誠的社交連結</p>
        </div>

        <div class="footer-section">
          <h3>快速連結</h3>
          <ul class="footer-links">
            <li v-for="link in footerLinks" :key="link.name">
              <RouterLink :to="link.path">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>聯絡我們</h3>
          <p>電子郵件：contact@yyfriends.com</p>
          <p>電話：+886 2 1234 5678</p>
          <p>地址：台北市信義區信義路五段7號</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} 友友配對. 保留所有權利.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: var(--el-bg-color);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
}

/* 移動端導航樣式 */
.mobile-nav-container {
  display: none;
}

.mobile-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--el-text-color-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.7rem 0;
  flex: 1;
  transition: all 0.3s;
}

.mobile-nav-item .el-icon {
  font-size: 1.7rem;
  margin-bottom: 0.3rem;
}

.mobile-nav-item.active {
  color: var(--el-color-primary);
}

/* 桌面端頁腳樣式 */
.desktop-footer {
  padding: 3rem 2rem 1rem;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin-bottom: 1.5rem;
  padding-right: 2rem;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--el-color-primary);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--el-text-color-regular);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--el-color-primary);
}

.footer-bottom {
  border-top: 1px solid var(--el-border-color-lighter);
  padding-top: 1.5rem;
  text-align: center;
  color: var(--el-text-color-secondary);
  font-size: 0.9rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .app-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }

  .mobile-nav-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
  }

  .desktop-footer {
    display: none;
  }
}
</style>
