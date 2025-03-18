<script setup lang="ts">
/**
 * AuthView 組件
 *
 * 用戶認證頁面，包含登入和註冊功能的切換
 */
import { ref, computed } from 'vue';
import { useThemeStore } from '@/stores/theme';
import LoginForm from '@/components/auth/LoginForm.vue';
import RegisterForm from '@/components/auth/RegisterForm.vue';
import PasswordReset from '@/components/auth/PasswordReset.vue';

// 獲取主題狀態
const themeStore = useThemeStore();

// 控制當前顯示的表單類型：login, register, reset
const activeForm = ref('login');

// 控制是否顯示密碼重置表單
const showPasswordReset = ref(false);

// 計算當前表單標題
const formTitle = computed(() => {
  if (showPasswordReset.value) return '重設密碼';
  return activeForm.value === 'login' ? '登入' : '註冊';
});

// 切換登入/註冊表單
const toggleForm = () => {
  activeForm.value = activeForm.value === 'login' ? 'register' : 'login';
  showPasswordReset.value = false;
};

// 顯示密碼重置表單
const togglePasswordReset = () => {
  showPasswordReset.value = !showPasswordReset.value;
};

// 處理登入成功
const handleLoginSuccess = () => {
  // 這裡將實現登入成功後的邏輯
  // 1. 儲存用戶令牌到 localStorage 或 cookie
  // 2. 更新全局用戶狀態
  // 3. 重定向到首頁或上一頁
  console.log('登入成功');
};

// 處理註冊成功
const handleRegisterSuccess = () => {
  // 這裡將實現註冊成功後的邏輯
  // 1. 顯示成功訊息
  // 2. 切換到登入表單
  // 3. 可選：自動填充剛註冊的用戶名
  activeForm.value = 'login';
  console.log('註冊成功');
};

// 處理密碼重置成功
const handleResetSuccess = () => {
  // 這裡將實現密碼重置成功後的邏輯
  // 1. 顯示成功訊息
  // 2. 切換回登入表單
  showPasswordReset.value = false;
  console.log('密碼重置郵件已發送');
};
</script>

<template>
  <div class="auth-page" :class="{ 'dark-theme': themeStore.theme === 'dark' }">
    <div class="auth-container">
      <!-- 左側品牌區域 - 僅在桌面顯示 -->
      <div class="brand-section">
        <div class="brand-content">
          <img src="@/assets/logo.svg" alt="友友" class="logo" />
          <h1>友友</h1>
          <p class="slogan">連結人與人，創造有意義的社交體驗</p>

          <!-- 品牌特色 -->
          <div class="features">
            <div class="feature-item">
              <el-icon color="#ffffff" size="28"><Icon-mdi-account-group /></el-icon>
              <span>找到志同道合的朋友</span>
            </div>
            <div class="feature-item">
              <el-icon color="#ffffff" size="28"><Icon-mdi-shield-check /></el-icon>
              <span>安全可靠的社交環境</span>
            </div>
            <div class="feature-item">
              <el-icon color="#ffffff" size="28"><Icon-mdi-heart-multiple /></el-icon>
              <span>豐富多彩的互動體驗</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 右側表單區域 -->
      <div class="form-section">
        <div class="form-container">
          <h2>{{ formTitle }}</h2>

          <div class="form-wrapper">
            <!-- 登入表單 -->
            <LoginForm
              v-if="activeForm === 'login' && !showPasswordReset"
              @login-success="handleLoginSuccess"
              @forgot-password="togglePasswordReset"
            />

            <!-- 註冊表單 -->
            <RegisterForm
              v-if="activeForm === 'register' && !showPasswordReset"
              @register-success="handleRegisterSuccess"
            />

            <!-- 密碼重置表單 -->
            <PasswordReset
              v-if="showPasswordReset"
              @reset-success="handleResetSuccess"
              @cancel="showPasswordReset = false"
            />

            <!-- 移除社交媒體登入部分 -->

            <!-- 切換登入/註冊 -->
            <div class="form-toggle" v-if="!showPasswordReset">
              <p>
                {{ activeForm === 'login' ? '還沒有帳號？' : '已經有帳號？' }}
                <a href="#" @click.prevent="toggleForm">
                  {{ activeForm === 'login' ? '立即註冊' : '立即登入' }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--el-bg-color);
  color: var(--el-text-color-primary);
  transition: background-color 0.3s, color 0.3s;
  padding: 2rem;
}

.auth-container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  min-height: 600px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

/* 左側品牌區域 */
.brand-section {
  flex: 1;
  background: linear-gradient(135deg, var(--el-color-primary) 0%, var(--el-color-primary-light-3) 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}

.brand-content {
  max-width: 400px;
  text-align: center;
}

.logo {
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
}

.brand-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.brand-content p {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.features {
  text-align: left;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.feature-item .el-icon {
  margin-right: 1rem;
}

.feature-item span {
  font-size: 1.1rem;
}

/* 右側表單區域 */
.form-section {
  flex: 1;
  background-color: var(--el-bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}

.form-container {
  width: 100%;
  max-width: 400px;
}

.form-wrapper {
  background-color: var(--el-bg-color);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
}

.form-container h2 {
  font-size: 2.2rem;
  color: var(--el-color-primary);
  margin-bottom: 2rem;
  text-align: center;
}

.form-toggle {
  margin-top: 2rem;
  text-align: center;
}

.form-toggle a {
  color: var(--el-color-primary);
  text-decoration: none;
  font-weight: 600;
}

.form-toggle a:hover {
  text-decoration: underline;
}

/* 暗黑模式樣式 */
.dark-theme .auth-container {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

/* 響應式設計 */
@media (max-width: 992px) {
  .auth-container {
    flex-direction: column;
    max-width: 500px;
  }

  .brand-section {
    padding: 2rem;
  }

  .form-section {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .brand-section {
    display: none; /* 在移動端隱藏品牌區域 */
  }

  .auth-container {
    box-shadow: none;
  }

  .form-section {
    background-color: transparent;
    padding: 1rem;
  }
}

/* 優化樣式 */
.auth-container {
  background-color: var(--el-bg-color-overlay);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.brand-section {
  position: relative;
  overflow: hidden;
}

.brand-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
    var(--el-color-primary) 0%,
    var(--el-color-primary-light-3) 70%,
    var(--el-color-primary-light-5) 100%
  );
  opacity: 0.9;
  z-index: 1;
}

.brand-content {
  position: relative;
  z-index: 2;
}

.logo {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.slogan {
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.features {
  margin-top: 3rem;
}

.feature-item {
  padding: 1rem;
  border-radius: 12px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.feature-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateX(10px);
}

.feature-item span {
  font-size: 1.2rem;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.form-wrapper {
  background-color: var(--el-bg-color);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
}

.form-container h2 {
  background: linear-gradient(135deg,
    var(--el-color-primary) 0%,
    var(--el-color-primary-light-3) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.form-toggle {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--el-border-color-lighter);
}

.form-toggle a {
  position: relative;
  padding-bottom: 2px;
}

.form-toggle a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--el-color-primary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.form-toggle a:hover::after {
  transform: scaleX(1);
}

/* 響應式設計優化 */
@media (max-width: 992px) {
  .auth-container {
    margin: 1rem;
  }

  .brand-section {
    padding: 3rem 2rem;
  }

  .features {
    margin-top: 2rem;
  }

  .form-container {
    max-width: 450px;
  }
}

@media (max-width: 768px) {
  .auth-page {
    padding: 0.5rem;
    background: linear-gradient(135deg,
      var(--el-color-primary-light-9) 0%,
      var(--el-bg-color) 100%
    );
    min-height: auto; /* 改為自適應高度 */
    align-items: flex-start;
    padding-top: 2rem;
  }

  .auth-container {
    background: transparent;
    backdrop-filter: none;
    border: none;
    max-width: 100%;
    width: 100%;
    margin: 0;
    min-height: auto;
  }

  .form-section {
    padding: 0.5rem 0.5rem;
    width: 100%;
    min-height: auto; /* 移除最小高度限制 */
  }

  .form-container {
    max-width: 92%;
    width: 92%;
    margin: 0 auto; /* 確保水平居中 */
    padding-bottom: 1rem; /* 底部添加適當間距 */
  }

  .form-wrapper {
    background-color: var(--el-bg-color-overlay);
    backdrop-filter: blur(10px);
    padding: 1.25rem 1rem;
    width: 100%;
    border-radius: 12px;
    margin-bottom: 0; /* 移除底部間距 */
  }
}

@media (max-width: 480px) {
  .auth-page {
    padding: 0.25rem;
    padding-top: 1.25rem; /* 減少頂部間距 */
    height: auto; /* 確保高度自適應 */
  }

  .form-container {
    padding-bottom: 0.75rem; /* 減少底部間距 */
  }
}

@media (max-width: 414px) {
  .auth-page {
    padding-top: 1rem;
  }

  .form-container {
    padding-bottom: 0.5rem;
  }

  .form-wrapper {
    margin-bottom: 0;
  }
}

/* 針對較高螢幕的優化 */
@media (min-height: 800px) and (max-width: 768px) {
  .auth-page {
    padding-top: 3rem; /* 在較高的螢幕上增加一些頂部間距 */
  }
}

.form-container {
  max-width: 94%;
  width: 94%;
}

.form-wrapper {
  padding: 1.1rem 0.85rem;
}

.form-container h2 {
  font-size: 1.7rem;
  margin-bottom: 1rem;
}

:deep(.el-form-item) {
  margin-bottom: 0.65rem;
}

:deep(.el-form-item__error) {
  padding-top: 2px;
  font-size: 0.75rem;
}

.form-toggle {
  margin-top: 1.25rem;
  padding-top: 1rem;
  font-size: 0.9rem;
}
</style>