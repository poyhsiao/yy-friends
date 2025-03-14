<script setup lang="ts">
/**
 * AppHeader 组件
 *
 * 网站的顶部导航栏，包含logo、导航菜单和用户操作按钮
 * 支持响应式设计，在移动设备上会转换为抽屉菜单
 */
import { ref, computed, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useThemeStore } from '@/stores/theme';

// 使用主题 store
const themeStore = useThemeStore();

// 控制移动端菜单的显示状态
const mobileMenuVisible = ref(false);

// 获取当前路由，用于高亮当前菜单项
const route = useRoute();

// 导航菜单项
const navItems = [
  { name: '首頁', path: '/', icon: 'House' },
  { name: '關於我們', path: '/about', icon: 'InfoFilled' },
  { name: '服務項目', path: '/services', icon: 'Service' },
  { name: '聯絡我們', path: '/contact', icon: 'Message' },
];

// 切换移动端菜单的显示状态
const toggleMobileMenu = () => {
  mobileMenuVisible.value = !mobileMenuVisible.value;
};

// 关闭移动端菜单
const closeMobileMenu = () => {
  mobileMenuVisible.value = false;
};

// 切換主題
const toggleTheme = () => {
  themeStore.toggleTheme();
};

// 添加窗口宽度的响应式引用
const windowWidth = ref(0);

// 更新窗口宽度的函数
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  // 初始化窗口宽度
  updateWindowWidth();
  // 添加窗口大小变化的事件监听器
  window.addEventListener('resize', updateWindowWidth);
  // 初始化主题
  themeStore.initTheme();
});
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      <!-- Logo 区域 - 左側 -->
      <div class="logo-container">
        <RouterLink to="/" class="logo-link">
          <img src="@/assets/logo.svg" alt="YY Friends Logo" class="logo" />
          <span class="logo-text">YY Friends</span>
        </RouterLink>
      </div>

      <!-- 桌面端导航菜单 -->
      <nav class="desktop-nav" :class="{ hidden: windowWidth < 768 }">
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

      <!-- 右側功能按鈕 -->
      <div class="user-actions">
        <!-- 主題切換按鈕 -->
        <el-button type="info" size="small" class="theme-toggle-button" @click="toggleTheme">
          <el-icon v-if="themeStore.theme === 'light'"><Sunny /></el-icon>
          <el-icon v-else><Moon /></el-icon>
        </el-button>

        <!-- 設定按鈕 -->
        <el-button type="info" size="small" class="settings-button">
          <el-icon><Setting /></el-icon>
        </el-button>

        <!-- 登入按鈕 (僅桌面端顯示) -->
        <el-button type="primary" size="small" class="login-button">
          <el-icon><User /></el-icon>
          登入
        </el-button>

        <!-- 移动端菜单按钮 -->
        <el-button v-if="windowWidth < 768" class="menu-toggle" @click="toggleMobileMenu">
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
                <el-icon><component :is="item.icon" /></el-icon>
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
          <div class="mobile-user-actions">
            <!-- 主題切換按鈕 -->
            <el-button type="info" class="mobile-theme-button" @click="toggleTheme">
              <el-icon v-if="themeStore.theme === 'light'"><Sunny /></el-icon>
              <el-icon v-else><Moon /></el-icon>
              {{ themeStore.theme === 'light' ? '切換暗黑模式' : '切換明亮模式' }}
            </el-button>

            <!-- 設定按鈕 -->
            <el-button type="info" class="mobile-settings-button">
              <el-icon><Setting /></el-icon>
              設定
            </el-button>

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
  position: fixed; /* 改為 fixed 使其始終貼緊頁面最上方 */
  top: 0;
  left: 0;
  right: 0;
  width: 100%; /* 確保寬度延伸至整個頁面 */
  z-index: 100;
  background-color: var(--el-bg-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-container {
  width: 100%; /* 確保容器寬度為 100% */
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
  gap: 0.5rem;
}

.theme-toggle-button,
.settings-button {
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: flex;
  align-items: center;
  gap: 0.8rem;
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

.mobile-theme-button,
.mobile-settings-button,
.mobile-login-button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-start;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .menu-toggle {
    display: flex;
    font-size: 1.2rem; /* 增加菜單按鈕大小 */
    padding: 0.5rem; /* 增加按鈕點擊區域 */
  }

  .logo-text {
    font-size: 1.2rem;
  }

  .login-button {
    display: none;
  }

  .theme-toggle-button,
  .settings-button {
    padding: 0.5rem; /* 增加按鈕點擊區域 */
  }

  /* 調整移動端抽屉菜單的文字大小 */
  .mobile-nav-link {
    font-size: 1.2rem;
    padding: 1rem 0; /* 增加點擊區域 */
  }

  /* 增加移動端按鈕的大小 */
  .mobile-theme-button,
  .mobile-settings-button,
  .mobile-login-button {
    font-size: 1.1rem;
    padding: 0.8rem;
  }
}

@media (min-width: 769px) {
  .hidden {
    display: none !important;
  }
}
</style>
