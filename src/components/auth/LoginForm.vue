<script setup lang="ts">
/**
 * LoginForm 組件
 *
 * 用戶登入表單，處理用戶名/密碼登入
 */
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';

// 定義事件
const emit = defineEmits(['login-success', 'forgot-password']);

// 表單引用
const loginFormRef = ref<FormInstance>();

// 表單數據
const loginForm = reactive({
  username: '',
  password: '',
  rememberMe: false
});

// 表單驗證規則
const loginRules = reactive<FormRules>({
  username: [
    { required: true, message: '請輸入用戶名或電子郵件', trigger: 'blur' },
    { min: 3, message: '用戶名長度不能少於3個字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '請輸入密碼', trigger: 'blur' },
    { min: 6, message: '密碼長度不能少於6個字符', trigger: 'blur' }
  ]
});

// 登入加載狀態
const loading = ref(false);

// 處理登入提交
const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  
  await formEl.validate((valid) => {
    if (valid) {
      loading.value = true;
      
      // 這裡將實現登入邏輯
      // 1. 發送登入請求到後端 API
      // 2. 處理響應結果
      // 3. 儲存用戶令牌和信息
      
      // 模擬 API 請求
      setTimeout(() => {
        loading.value = false;
        
        // 登入成功
        ElMessage.success('登入成功');
        emit('login-success');
        
        // 如果選擇了記住我，將用戶名保存到 localStorage
        if (loginForm.rememberMe) {
          localStorage.setItem('rememberedUsername', loginForm.username);
        } else {
          localStorage.removeItem('rememberedUsername');
        }
      }, 1000);
    }
  });
};

// 處理忘記密碼
const handleForgotPassword = () => {
  emit('forgot-password');
};

// 在組件掛載時檢查是否有保存的用戶名
const checkRememberedUser = () => {
  const rememberedUsername = localStorage.getItem('rememberedUsername');
  if (rememberedUsername) {
    loginForm.username = rememberedUsername;
    loginForm.rememberMe = true;
  }
};

// 組件掛載時執行
checkRememberedUser();
</script>

<template>
  <el-form
    ref="loginFormRef"
    :model="loginForm"
    :rules="loginRules"
    label-position="top"
    @submit.prevent="handleLogin(loginFormRef)"
  >
    <!-- 用戶名/電子郵件 -->
    <el-form-item label="用戶名或電子郵件" prop="username">
      <el-input
        v-model="loginForm.username"
        placeholder="請輸入用戶名或電子郵件"
        prefix-icon="Icon-mdi-account"
      />
    </el-form-item>
    
    <!-- 密碼 -->
    <el-form-item label="密碼" prop="password">
      <el-input
        v-model="loginForm.password"
        type="password"
        placeholder="請輸入密碼"
        prefix-icon="Icon-mdi-lock"
        show-password
      />
    </el-form-item>
    
    <!-- 記住我和忘記密碼 -->
    <div class="login-options">
      <el-checkbox v-model="loginForm.rememberMe">記住我</el-checkbox>
      <a href="#" @click.prevent="handleForgotPassword" class="forgot-password">忘記密碼？</a>
    </div>
    
    <!-- 登入按鈕 -->
    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        :loading="loading"
        class="submit-button"
      >
        登入
      </el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.login-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.forgot-password {
  color: var(--el-color-primary);
  text-decoration: none;
  font-size: 0.9rem;
}

.forgot-password:hover {
  text-decoration: underline;
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  font-size: 1.1rem;
}
</style>