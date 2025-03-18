/**
 * 用戶認證狀態管理
 */
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';

export const useAuthStore = defineStore('auth', () => {
  // 用戶令牌
  const token = ref<string | null>(localStorage.getItem('token'));
  
  // 用戶信息
  const user = ref<any>(null);
  
  // 加載狀態
  const loading = ref(false);
  
  // 錯誤信息
  const error = ref<string | null>(null);
  
  // 計算屬性：是否已登入
  const isLoggedIn = computed(() => !!token.value);
  
  // 計算屬性：用戶名
  const username = computed(() => user.value?.username || '');
  
  // 計算屬性：用戶頭像
  const avatar = computed(() => user.value?.avatar || '');
  
  // 登入方法
  const login = async (credentials: { username: string; password: string; rememberMe?: boolean }) => {
    loading.value = true;
    error.value = null;
    
    try {
      // 這裡將實現登入邏輯
      // 1. 發送登入請求到後端 API
      // 2. 獲取用戶令牌和信息
      
      // 模擬 API 請求
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 假設登入成功，設置令牌和用戶信息
      const mockToken = 'mock_token_' + Date.now();
      const mockUser = {
        id: 1,
        username: credentials.username,
        email: `${credentials.username}@example.com`,
        avatar: '/images/avatars/default.jpg'
      };
      
      // 保存令牌和用戶信息
      token.value = mockToken;
      user.value = mockUser;
      
      // 將令牌保存到 localStorage
      localStorage.setItem('token', mockToken);
      
      // 如果選擇了記住我，將用戶名保存到 localStorage
      if (credentials.rememberMe) {
        localStorage.setItem('rememberedUsername', credentials.username);
      } else {
        localStorage.removeItem('rememberedUsername');
      }
      
      ElMessage.success('登入成功');
      return true;
    } catch (err: any) {
      // 處理錯誤
      error.value = err.message || '登入失敗，請稍後再試';
      ElMessage.error(error.value);
      return false;
    } finally {
      loading.value = false;
    }
  };
  
  // 註冊方法
  const register = async (userData: { username: string; email: string; password: string }) => {
    loading.value = true;
    error.value = null;
    
    try {
      // 這裡將實現註冊邏輯
      // 1. 發送註冊請求到後端 API
      
      // 模擬 API 請求
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      ElMessage.success('註冊成功！請登入您的帳號');
      return true;
    } catch (err: any) {
      // 處理錯誤
      error.value = err.message || '註冊失敗，請稍後再試';
      ElMessage.error(error.value);
      return false;
    } finally {
      loading.value = false;
    }
  };
  
  // 登出方法
  const logout = () => {
    // 清除令牌和用戶信息
    token.value = null;
    user.value = null;
    
    // 從 localStorage 中移除令牌
    localStorage.removeItem('token');
    
    ElMessage.success('您已成功登出');
  };
  
  // 獲取用戶信息
  const fetchUserInfo = async () => {
    if (!token.value) return;
    
    loading.value = true;
    
    try {
      // 這裡將實現獲取用戶信息的邏輯
      // 1. 發送請求到後端 API
      // 2. 獲取用戶信息
      
      // 模擬 API 請求
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // 假設獲取成功，設置用戶信息
      user.value = {
        id: 1,
        username: 'demo_user',
        email: 'demo@example.com',
        avatar: '/images/avatars/default.jpg'
      };
    } catch (err: any) {
      // 處理錯誤
      error.value = err.message || '獲取用戶信息失敗';
      
      // 如果是認證錯誤，清除令牌
      if (err.status === 401) {
        logout();
      }
    } finally {
      loading.value = false;
    }
  };
  
  // 重置密碼
  const resetPassword = async (email: string, newPassword: string, code: string) => {
    loading.value = true;
    error.value = null;
    
    try {
      // 這裡將實現重置密碼邏輯
      // 1. 發送重置密碼請求到後端 API
      
      // 模擬 API 請求
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      ElMessage.success('密碼重置成功，請使用新密碼登入');
      return true;
    } catch (err: any) {
      // 處理錯誤
      error.value = err.message || '重置密碼失敗，請稍後再試';
      ElMessage.error(error.value);
      return false;
    } finally {
      loading.value = false;
    }
  };
  
  // 發送驗證碼
  const sendVerificationCode = async (email: string) => {
    loading.value = true;
    error.value = null;
    
    try {
      // 這裡將實現發送驗證碼邏輯
      // 1. 發送請求到後端 API
      
      // 模擬 API 請求
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      ElMessage.success('驗證碼已發送到您的郵箱，請查收');
      return true;
    } catch (err: any) {
      // 處理錯誤
      error.value = err.message || '發送驗證碼失敗，請稍後再試';
      ElMessage.error(error.value);
      return false;
    } finally {
      loading.value = false;
    }
  };
  
  // 初始化：在應用啟動時檢查並獲取用戶信息
  const initialize = async () => {
    if (token.value && !user.value) {
      await fetchUserInfo();
    }
  };
  
  return {
    token,
    user,
    loading,
    error,
    isLoggedIn,
    username,
    avatar,
    login,
    register,
    logout,
    fetchUserInfo,
    resetPassword,
    sendVerificationCode,
    initialize
  };
});