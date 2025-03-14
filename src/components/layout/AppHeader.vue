<script setup lang="ts">
/**
 * AppHeader 组件
 *
 * 网站的顶部导航栏，包含logo、导航菜单和用户操作按钮
 * 支持响应式设计，在移动设备上会转换为抽屉菜单
 */
import { ref, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

// 控制移动端菜单的显示状态
const mobileMenuVisible = ref(false);

// 获取当前路由，用于高亮当前菜单项
const route = useRoute();

// 导航菜单项
const navItems = [
  { name: '首頁', path: '/' },
  { name: '關於我們', path: '/about' },
  { name: '服務項目', path: '/services' },
  { name: '聯絡我們', path: '/contact' },
];

// 切换移动端菜单的显示状态
const toggleMobileMenu = () => {
  mobileMenuVisible.value = !mobileMenuVisible.value;
};

// 关闭移动端菜单
const closeMobileMenu = () => {
  mobileMenuVisible.value = false;
};

// 计算当前是否为移动设备视图
const isMobile = computed(() => {
  // 这里可以根据实际需求调整断点
  return window.innerWidth < 768;
});
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      <!-- Logo 区域 -->
      <div class="logo-container">
        <RouterLink to="/" class="logo-link">
          <img src="@/assets/logo.svg" alt="YY Friends Logo" class="logo" />
          <span class="logo-text">YY Friends</span>
        </RouterLink>
      </div>

      <!-- 桌面端导航菜单 -->
      <nav class="desktop-nav" :class="{ hidden: isMobile }">
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.name" class="nav-item">
            <RouterLink
              :to="item.path"
              class="nav-link"
              :class="{ active: route.path === item.path }"
            >
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- 用户操作按钮 -->
      <div class="user-actions">
        <el-button type="primary" size="small" class="login-button">
          <el-icon><User /></el-icon>
          登入
        </el-button>

        <!-- 移动端菜单按钮 -->
        <el-button v-if="isMobile" class="menu-toggle" @click="toggleMobileMenu">
          <el-icon><Menu /></el-icon>
        </el-button>
      </div>

      <!-- 移动端抽屉菜单 -->
      <el-drawer
        v-model="mobileMenuVisible"
        title="選單"
        direction="rtl"
        size="70%"
        :with-header="true"
      >
        <nav class="mobile-nav">
          <ul class="mobile-nav-list">
            <li v-for="item in navItems" :key="item.name" class="mobile-nav-item">
              <RouterLink
                :to="item.path"
                class="mobile-nav-link"
                :class="{ active: route.path === item.path }"
                @click="closeMobileMenu"
              >
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
          <div class="mobile-user-actions">
            <el-button type="primary" class="mobile-login-button">
              <el-icon><User /></el-icon>
              登入
            </el-button>
          </div>
        </nav>
      </el-drawer>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--el-color-primary);
}

.logo {
  height: 40px;
  width: 40px;
  margin-right: 0.5rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 600;
}

.desktop-nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1.5rem;
}

.nav-link {
  color: var(--el-text-color-primary);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s;
}

.nav-link:hover,
.nav-link.active {
  color: var(--el-color-primary);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--el-color-primary);
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.login-button {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.menu-toggle {
  display: none;
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav-item {
  margin-bottom: 1rem;
}

.mobile-nav-link {
  display: block;
  padding: 0.8rem 0;
  color: var(--el-text-color-primary);
  text-decoration: none;
  font-size: 1.1rem;
  border-bottom: 1px solid var(--el-border-color-lighter);
  transition: color 0.3s;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: var(--el-color-primary);
}

.mobile-user-actions {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-login-button {
  width: 100%;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .logo-text {
    font-size: 1.2rem;
  }

  .login-button {
    display: none;
  }
}

@media (min-width: 769px) {
  .hidden {
    display: none !important;
  }
}
</style>
