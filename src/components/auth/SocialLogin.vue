<script setup lang="ts">
/**
 * SocialLogin 組件
 *
 * 提供社交媒體登入選項
 */
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

// 社交登入加載狀態
const loading = ref({
  google: false,
  facebook: false,
  line: false
});

// 處理社交媒體登入
const handleSocialLogin = (provider: 'google' | 'facebook' | 'line') => {
  loading.value[provider] = true;
  
  // 這裡將實現社交媒體登入邏輯
  // 1. 根據不同的提供商調用相應的 OAuth API
  // 2. 處理授權回調
  // 3. 獲取用戶信息並完成登入
  
  // 模擬 API 請求
  setTimeout(() => {
    loading.value[provider] = false;
    
    // 顯示提示信息
    ElMessage.info(`${provider} 登入功能即將上線，敬請期待！`);
  }, 1000);
};
</script>

<template>
  <div class="social-login">
    <div class="divider">
      <span>或使用以下方式登入</span>
    </div>
    
    <div class="social-buttons">
      <!-- Google 登入 -->
      <el-button
        class="social-button google"
        :loading="loading.google"
        @click="handleSocialLogin('google')"
      >
        <el-icon><Icon-mdi-google /></el-icon>
        <span>Google</span>
      </el-button>
      
      <!-- Facebook 登入 -->
      <el-button
        class="social-button facebook"
        :loading="loading.facebook"
        @click="handleSocialLogin('facebook')"
      >
        <el-icon><Icon-mdi-facebook /></el-icon>
        <span>Facebook</span>
      </el-button>
      
      <!-- LINE 登入 -->
      <el-button
        class="social-button line"
        :loading="loading.line"
        @click="handleSocialLogin('line')"
      >
        <el-icon><Icon-mdi-chat /></el-icon>
        <span>LINE</span>
      </el-button>
    </div>
  </div>
</template>

<style scoped>
.social-login {
  margin-top: 2rem;
}

.divider {
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  color: var(--el-text-color-secondary);
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background-color: var(--el-border-color);
}

.divider span {
  padding: 0 1rem;
  font-size: 0.9rem;
}

.social-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.social-button .el-icon {
  font-size: 1.2rem;
}

.social-button span {
  display: none;
}

.google:hover {
  background-color: #f2f2f2;
  color: #4285f4;
}

.facebook:hover {
  background-color: #f2f2f2;
  color: #3b5998;
}

.line:hover {
  background-color: #f2f2f2;
  color: #00c300;
}

@media (min-width: 576px) {
  .social-button span {
    display: inline;
  }
}
</style>