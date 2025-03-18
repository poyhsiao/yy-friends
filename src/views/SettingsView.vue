<script setup lang="ts">
/**
 * SettingsView 組件
 *
 * 用戶設置頁面，包含帳戶設置、隱私設置、通知設置等
 */
import { ref, reactive } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useThemeStore } from '@/stores/theme';
import { ElMessage, ElMessageBox } from 'element-plus';

// 獲取認證狀態
const authStore = useAuthStore();

// 獲取主題狀態
const themeStore = useThemeStore();

// 當前活動標籤
const activeTab = ref('account');

// 帳戶設置表單
const accountForm = reactive({
  email: 'user@example.com',
  username: authStore.username || '用戶名',
  language: 'zh-TW',
  timezone: 'Asia/Taipei'
});

// 隱私設置表單
const privacyForm = reactive({
  profileVisibility: 'public',
  showOnlineStatus: true,
  allowFriendRequests: true,
  allowMessages: 'friends'
});

// 通知設置表單
const notificationForm = reactive({
  emailNotifications: true,
  friendRequests: true,
  messages: true,
  systemUpdates: false,
  marketingEmails: false
});

// 安全設置表單
const securityForm = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
});

// 加載狀態
const loading = ref({
  account: false,
  privacy: false,
  notification: false,
  security: false
});

// 保存帳戶設置
const saveAccountSettings = async () => {
  loading.value.account = true;
  
  try {
    // 這裡將實現保存帳戶設置的邏輯
    // 1. 發送更新請求到後端 API
    
    // 模擬 API 請求
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    ElMessage.success('帳戶設置已更新');
  } catch (error) {
    ElMessage.error('更新帳戶設置失敗，請稍後再試');
  } finally {
    loading.value.account = false;
  }
};

// 保存隱私設置
const savePrivacySettings = async () => {
  loading.value.privacy = true;
  
  try {
    // 這裡將實現保存隱私設置的邏輯
    // 1. 發送更新請求到後端 API
    
    // 模擬 API 請求
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    ElMessage.success('隱私設置已更新');
  } catch (error) {
    ElMessage.error('更新隱私設置失敗，請稍後再試');
  } finally {
    loading.value.privacy = false;
  }
};

// 保存通知設置
const saveNotificationSettings = async () => {
  loading.value.notification = true;
  
  try {
    // 這裡將實現保存通知設置的邏輯
    // 1. 發送更新請求到後端 API
    
    // 模擬 API 請求
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    ElMessage.success('通知設置已更新');
  } catch (error) {
    ElMessage.error('更新通知設置失敗，請稍後再試');
  } finally {
    loading.value.notification = false;
  }
};

// 更改密碼
const changePassword = async () => {
  // 驗證密碼
  if (!securityForm.currentPassword) {
    ElMessage.warning('請輸入當前密碼');
    return;
  }
  
  if (!securityForm.newPassword) {
    ElMessage.warning('請輸入新密碼');
    return;
  }
  
  if (securityForm.newPassword !== securityForm.confirmPassword) {
    ElMessage.warning('兩次輸入的新密碼不一致');
    return;
  }
  
  loading.value.security = true;
  
  try {
    // 這裡將實現更改密碼的邏輯
    // 1. 發送更新請求到後端 API
    
    // 模擬 API 請求
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    ElMessage.success('密碼已更新');
    
    // 清空表單
    securityForm.currentPassword = '';
    securityForm.newPassword = '';
    securityForm.confirmPassword = '';
  } catch (error) {
    ElMessage.error('更新密碼失敗，請稍後再試');
  } finally {
    loading.value.security = false;
  }
};

// 刪除帳戶
const deleteAccount = async () => {
  try {
    await ElMessageBox.confirm(
      '您確定要刪除您的帳戶嗎？此操作不可逆，所有數據將被永久刪除。',
      '刪除帳戶',
      {
        confirmButtonText: '確定刪除',
        cancelButtonText: '取消',
        type: 'warning',
      }
    );
    
    // 這裡將實現刪除帳戶的邏輯
    // 1. 發送刪除請求到後端 API
    
    // 模擬 API 請求
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    ElMessage.success('帳戶已刪除');
    
    // 登出
    authStore.logout();
    
    // 重定向到首頁
    window.location.href = '/';
  } catch (error) {
    // 用戶取消操作
    console.log('用戶取消刪除帳戶');
  }
};
</script>

<template>
  <div class="settings-page" :class="{ 'dark-theme': themeStore.theme === 'dark' }">
    <div class="container">
      <h1>帳戶設置</h1>
      
      <div class="settings-container">
        <!-- 設置導航 -->
        <div class="settings-nav">
          <el-menu
            :default-active="activeTab"
            @select="activeTab = $event"
            class="settings-menu"
          >
            <el-menu-item index="account">
              <el-icon><Icon-mdi-account /></el-icon>
              <span>帳戶設置</span>
            </el-menu-item>
            <el-menu-item index="privacy">
              <el-icon><Icon-mdi-shield-account /></el-icon>
              <span>隱私設置</span>
            </el-menu-item>
            <el-menu-item index="notification">
              <el-icon><Icon-mdi-bell /></el-icon>
              <span>通知設置</span>
            </el-menu-item>
            <el-menu-item index="security">
              <el-icon><Icon-mdi-lock /></el-icon>
              <span>安全設置</span>
            </el-menu-item>
          </el-menu>
        </div>
        
        <!-- 設置內容 -->
        <div class="settings-content">
          <!-- 帳戶設置 -->
          <el-card v-if="activeTab === 'account'" v-loading="loading.account">
            <template #header>
              <div class="card-header">
                <h2>帳戶設置</h2>
                <p>管理您的基本帳戶信息</p>
              </div>
            </template>
            
            <el-form label-position="top" :model="accountForm">
              <el-form-item label="用戶名">
                <el-input v-model="accountForm.username" />
              </el-form-item>
              
              <el-form-item label="電子郵件">
                <el-input v-model="accountForm.email" />
              </el-form-item>
              
              <el-form-item label="語言">
                <el-select v-model="accountForm.language" style="width: 100%">
                  <el-option label="繁體中文" value="zh-TW" />
                  <el-option label="簡體中文" value="zh-CN" />
                  <el-option label="English" value="en" />
                </el-select>
              </el-form-item>
              
              <el-form-item label="時區">
                <el-select v-model="accountForm.timezone" style="width: 100%">
                  <el-option label="台北 (GMT+8)" value="Asia/Taipei" />
                  <el-option label="香港 (GMT+8)" value="Asia/Hong_Kong" />
                  <el-option label="東京 (GMT+9)" value="Asia/Tokyo" />
                  <el-option label="紐約 (GMT-5)" value="America/New_York" />
                </el-select>
              </el-form-item>
              
              <el-form-item>
                <el-button type="primary" @click="saveAccountSettings">保存設置</el-button>
              </el-form-item>
            </el-form>
          </el-card>
          
          <!-- 隱私設置 -->
          <el-card v-if="activeTab === 'privacy'" v-loading="loading.privacy">
            <template #header>
              <div class="card-header">
                <h2>隱私設置</h2>
                <p>控制誰可以看到您的信息和與您互動</p>
              </div>
            </template>
            
            <el-form label-position="top" :model="privacyForm">
              <el-form-item label="個人資料可見性">
                <el-radio-group v-model="privacyForm.profileVisibility">
                  <el-radio label="public">公開</el-radio>
                  <el-radio label="friends">僅好友</el-radio>
                  <el-radio label="private">私密</el-radio>
                </el-radio-group>
              </el-form-item>
              
              <el-form-item>
                <el-checkbox v-model="privacyForm.showOnlineStatus">顯示在線狀態</el-checkbox>
              </el-form-item>
              
              <el-form-item>
                <el-checkbox v-model="privacyForm.allowFriendRequests">允許好友請求</el-checkbox>
              </el-form-item>
              
              <el-form-item label="誰可以給我發送消息">
                <el-radio-group v-model="privacyForm.allowMessages">
                  <el-radio label="everyone">所有人</el-radio>
                  <el-radio label="friends">僅好友</el-radio>
                  <el-radio label="none">禁止所有人</el-radio>
                </el-radio-group>
              </el-form-item>
              
              <el-form-item>
                <el-button type="primary" @click="savePrivacySettings">保存設置</el-button>
              </el-form-item>
            </el-form>
          </el-card>
          
          <!-- 通知設置 -->
          <el-card v-if="activeTab === 'notification'" v-loading="loading.notification">
            <template #header>
              <div class="card-header">
                <h2>通知設置</h2>
                <p>管理您接收的通知類型</p>
              </div>
            </template>
            
            <el-form label-position="top" :model="notificationForm">
              <el-form-item>
                <el-checkbox v-model="notificationForm.emailNotifications">啟用電子郵件通知</el-checkbox>
              </el-form-item>
              
              <el-divider>接收通知的類型</el-divider>
              
              <el-form-item>
                <el-checkbox v-model="notificationForm.friendRequests">好友請求</el-checkbox>
              </el-form-item>
              
              <el-form-item>
                <el-checkbox v-model="notificationForm.messages">新消息</el-checkbox>
              </el-form-item>
              
              <el-form-item>
                <el-checkbox v-model="notificationForm.systemUpdates">系統更新</el-checkbox>
              </el-form-item>
              
              <el-form-item>
                <el-checkbox v-model="notificationForm.marketingEmails">營銷郵件</el-checkbox>
              </el-form-item>
              
              <el-form-item>
                <el-button type="primary" @click="saveNotificationSettings">保存設置</el-button>
              </el-form-item>
            </el-form>
          </el-card>
          
          <!-- 安全設置 -->
          <el-card v-if="activeTab === 'security'" v-loading="loading.security">
            <template #header>
              <div class="card-header">
                <h2>安全設置</h2>
                <p>管理您的密碼和帳戶安全</p>
              </div>
            </template>
            
            <el-form label-position="top" :model="securityForm">
              <h3>更改密碼</h3>
              
              <el-form-item label="當前密碼">
                <el-input
                  v-model="securityForm.currentPassword"
                  type="password"
                  show-password
                  placeholder="請輸入當前密碼"
                />
              </el-form-item>
              
              <el-form-item label="新密碼">
                <el-input
                  v-model="securityForm.newPassword"
                  type="password"
                  show-password
                  placeholder="請輸入新密碼"
                />
              </el-form-item>
              
              <el-form-item label="確認新密碼">
                <el-input
                  v-model="securityForm.confirmPassword"
                  type="password"
                  show-password
                  placeholder="請再次輸入新密碼"
                />
              </el-form-item>
              
              <el-form-item>
                <el-button type="primary" @click="changePassword">更改密碼</el-button>
              </el-form-item>
              
              <el-divider />
              
              <h3>危險操作</h3>
              <p class="danger-text">以下操作將永久刪除您的帳戶和所有相關數據，此操作不可逆。</p>
              
              <el-button type="danger" @click="deleteAccount">刪除帳戶</el-button>
            </el-form>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings-page {
  min-height: 100vh;
  background-color: var(--el-bg-color);
  color: var(--el-text-color-primary);
  transition: background-color 0.3s, color 0.3s;
  padding: 2rem 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

h1 {
  font-size: 2.5rem;
  color: var(--el-color-primary);
  margin-bottom: 2rem;
  text-align: center;
}

.settings-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
}

.settings-nav {
  position: sticky;
  top: 2rem;
  height: fit-content;
}

.settings-menu {
  border-radius: 8px;
  box-shadow: var(--el-box-shadow-light);
}

.settings-content {
  width: 100%;
}

.card-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--el-color-primary);
}

.card-header p {
  margin: 0.5rem 0 0;
  color: var(--el-text-color-secondary);
  font-size: 0.9rem;
}

h3 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: var(--el-text-color-primary);
}

.danger-text {
  color: var(--el-color-danger);
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .settings-container {
    grid-template-columns: 1fr;
  }
  
  .settings-nav {
    position: static;
    margin-bottom: 1.5rem;
  }
  
  .settings-menu {
    display: flex;
    overflow-x: auto;
    padding: 0.5rem;
  }
  
  .el-menu-item {
    flex: 1;
    min-width: auto;
    justify-content: center;
  }
  
  .el-menu-item span {
    margin-left: 0.5rem;
  }
}

@media (max-width: 576px) {
  .el-menu-item span {
    display: none;
  }
  
  .el-menu-item {
    padding: 0 1rem;
  }
}
</style>