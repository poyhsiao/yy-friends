<script setup lang="ts">
/**
 * AppFooter 组件
 *
 * 应用的页脚组件，包含版权信息、链接和社交媒体图标
 * 支持响应式设计
 */
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// 当前年份
const currentYear = new Date().getFullYear();

// 页脚导航链接
const footerLinks = [
  { name: '首頁', path: '/' },
  { name: '關於我們', path: '/about' },
  { name: '服務項目', path: '/services' },
  { name: '隱私政策', path: '/privacy' },
  { name: '使用條款', path: '/terms' },
];

// 社交媒体链接
const socialLinks = [
  { name: 'Facebook', icon: 'ep:connection', url: '#' },
  { name: 'Instagram', icon: 'ep:picture', url: '#' },
  { name: 'LinkedIn', icon: 'ep:user', url: '#' },
];
</script>

<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-logo">
          <img src="@/assets/logo.svg" alt="Logo" class="logo" />
          <h3>YY Friends</h3>
          <p>專業友善的服務，為您提供最佳體驗</p>
        </div>

        <div class="footer-links">
          <div class="link-group">
            <h4>快速連結</h4>
            <ul>
              <li v-for="link in footerLinks" :key="link.name">
                <RouterLink :to="link.path">{{ link.name }}</RouterLink>
              </li>
            </ul>
          </div>

          <div class="link-group">
            <h4>聯絡我們</h4>
            <ul>
              <li>
                <el-icon><Icon-mdi-Location /></el-icon>
                <span>台北市信義區松高路1號</span>
              </li>
              <li>
                <el-icon><Icon-mdi-Phone /></el-icon>
                <span>+886 2 1234 5678</span>
              </li>
              <li>
                <el-icon><Icon-mdi-Message /></el-icon>
                <span>info@yyfriends.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-newsletter">
          <h4>訂閱電子報</h4>
          <p>獲取最新消息和優惠信息</p>
          <div class="newsletter-form">
            <el-input placeholder="您的電子郵件" />
            <el-button type="primary">訂閱</el-button>
          </div>
          <div class="social-links">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :title="social.name"
            >
              <el-icon v-if="social.name === 'Facebook'"><Icon-mdi-Facebook /></el-icon>
              <el-icon v-else-if="social.name === 'Instagram'"><Icon-mdi-Instagram /></el-icon>
              <el-icon v-else><Icon-mdi-Linkedin /></el-icon>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} YY Friends. 版權所有。</p>
        <p>本網站使用 Supabase 提供技術支持</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: var(--el-color-primary-light-9);
  color: var(--el-text-color-primary);
  padding: 3rem 0 1rem;
  margin-top: 2rem;
}

.footer-container {
  width: 100%;
  padding: 0 1rem;
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
  justify-content: space-between;
}

.footer-logo {
  flex: 1;
  min-width: 250px;
}

.footer-logo .logo {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}

.footer-logo h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.footer-links {
  display: flex;
  flex: 2;
  gap: 2rem;
  flex-wrap: wrap;
}

.link-group {
  flex: 1;
  min-width: 150px;
}

.link-group h4 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--el-color-primary);
}

.link-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-group li {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.link-group a {
  color: var(--el-text-color-regular);
  text-decoration: none;
  transition: color 0.3s;
}

.link-group a:hover {
  color: var(--el-color-primary);
}

.footer-newsletter {
  flex: 1;
  min-width: 250px;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--el-color-primary-light-8);
  color: var(--el-color-primary);
  transition: all 0.3s;
}

.social-links a:hover {
  background-color: var(--el-color-primary);
  color: white;
}

.footer-bottom {
  border-top: 1px solid var(--el-border-color-lighter);
  padding-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: var(--el-text-color-secondary);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    gap: 2rem;
  }

  .footer-links {
    flex-direction: column;
    gap: 1.5rem;
  }

  .newsletter-form {
    flex-direction: column;
  }
}
</style>
