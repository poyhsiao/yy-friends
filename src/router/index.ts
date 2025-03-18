import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyView.vue'),
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/TermsView.vue'),
    },
    // 添加認證相關路由
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue'),
    },
    // 需要登入才能訪問的頁面
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    // 404 頁面
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    }
  ],
});

// 添加全局前置守衛
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  
  // 檢查路由是否需要認證
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    // 如果需要認證但用戶未登入，重定向到登入頁面
    next({ 
      name: 'auth',
      // 保存原本要訪問的路由，登入成功後可以重定向回去
      query: { redirect: to.fullPath } 
    });
  } else if (to.name === 'auth' && authStore.isLoggedIn) {
    // 如果用戶已登入但嘗試訪問登入頁面，重定向到首頁或指定的重定向頁面
    const redirectPath = to.query.redirect as string || '/';
    next(redirectPath);
  } else {
    // 不需要認證或已登入，正常導航
    next();
  }
});

// 添加全局後置鉤子，用於處理頁面標題
router.afterEach((to) => {
  // 設置頁面標題
  const baseTitle = '友友 - 連結人與人';
  const pageTitle = to.meta.title as string || '';
  
  document.title = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle;
  
  // 滾動到頁面頂部
  window.scrollTo(0, 0);
});

export default router;
