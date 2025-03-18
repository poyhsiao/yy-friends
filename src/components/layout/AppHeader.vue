<script setup lang="ts">
/**
 * AppHeader 组件
 *
 * 网站的顶部导航栏，包含logo、导航菜单和用户操作按钮
 * 支持响应式设计，在移动设备上会转换为抽屉菜单
 */
import { ref, computed, onMounted } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
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

// 获取路由器实例，用於程式化導航
const router = useRouter();

// 跳轉到登入頁面
const navigateToLogin = () => {
  router.push('/auth');
  // 如果是在移動端，關閉抽屜菜單
  if (mobileMenuVisible.value) {
    closeMobileMenu();
  }
};
</script>

<template>
  <header class="app-header" :class="{ 'dark-theme': themeStore.theme === 'dark' }">
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

        <!-- 登入按鈕 (僅桌面端顯示) - 修改為可點擊跳轉 -->
        <el-button type="primary" size="small" class="login-button" @click="navigateToLogin">
          <el-icon><User /></el-icon>
          登入
        </el-button>

        <!-- 移动端菜单按钮 -->
        <el-button v-if="windowWidth < 768" class="menu-toggle" @click="toggleMobileMenu">
          <el-icon><Setting /></el-icon>
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

            <el-button type="primary" class="mobile-login-button" @click="navigateToLogin">
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  background-color: var(--el-bg-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.3s,
    color 0.3s,
    box-shadow 0.3s;
}

/* 暗黑模式樣式 */
.dark-theme {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.header-container {
  width: 100%;
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
  /* 增加 logo 的對比度和可見性 */
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  transition: filter 0.3s, transform 0.3s;
}

/* 為 logo 添加懸停效果 */
.logo-link:hover .logo {
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3));
  transform: scale(1.05);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700; /* 增加字重 */
  /* 添加文字陰影以增強可見性 */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, var(--el-color-primary) 0%, var(--el-color-primary-dark-2) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; /* 使用漸變色替代純色 */
}

/* 暗黑模式下的 logo 樣式調整 */
.dark-theme .logo {
  filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.1));
}

.dark-theme .logo-text {
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, var(--el-color-primary-light-3) 0%, var(--el-color-primary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-start;
  padding: 0.8rem 1rem;
}

.mobile-theme-button .el-icon,
.mobile-settings-button .el-icon,
.mobile-login-button .el-icon {
  font-size: 1.2rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .login-button {
    display: none;
  }

  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (min-width: 769px) {
  .hidden {
    display: none;
  }
}
</style>
