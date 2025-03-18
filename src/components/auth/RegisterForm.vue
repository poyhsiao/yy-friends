<script setup lang="ts">
/**
 * RegisterForm 組件
 *
 * 用戶註冊表單，處理新用戶註冊
 */
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';

// 定義事件
const emit = defineEmits(['register-success']);

// 表單引用
const registerFormRef = ref<FormInstance>();

// 表單數據
const registerForm = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
});

// 密碼驗證函數
const validatePass = (rule: any, value: string, callback: any) => {
  if (value === '') {
    callback(new Error('請輸入密碼'));
  } else {
    // 密碼強度檢查
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (value.length < 8) {
      callback(new Error('密碼長度不能少於8個字符'));
    } else if (!(hasLetter && hasNumber)) {
      callback(new Error('密碼必須包含字母和數字'));
    } else if (!hasSpecial) {
      // 只是警告，不阻止提交
      ElMessage.warning('建議密碼包含特殊字符以提高安全性');
      callback();
    } else {
      // 如果確認密碼已填寫，則驗證兩次密碼是否一致
      if (registerForm.confirmPassword !== '') {
        registerFormRef.value?.validateField('confirmPassword');
      }
      callback();
    }
  }
};

// 確認密碼驗證函數
const validateConfirmPass = (rule: any, value: string, callback: any) => {
  if (value === '') {
    callback(new Error('請再次輸入密碼'));
  } else if (value !== registerForm.password) {
    callback(new Error('兩次輸入的密碼不一致'));
  } else {
    callback();
  }
};

// 表單驗證規則
const registerRules = reactive<FormRules>({
  username: [
    { required: true, message: '請輸入用戶名', trigger: 'blur' },
    { min: 3, max: 20, message: '用戶名長度應在3到20個字符之間', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9_]+$/, message: '用戶名只能包含字母、數字和下劃線', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '請輸入電子郵件', trigger: 'blur' },
    { type: 'email', message: '請輸入有效的電子郵件地址', trigger: 'blur' }
  ],
  password: [
    { required: true, validator: validatePass, trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, validator: validateConfirmPass, trigger: 'blur' }
  ],
  agreeTerms: [
    { type: 'boolean', message: '請同意服務條款和隱私政策', trigger: 'change' },
    { required: true, message: '請同意服務條款和隱私政策', trigger: 'change' }
  ]
});

// 註冊加載狀態
const loading = ref(false);

// 處理註冊提交
const handleRegister = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;

  await formEl.validate((valid) => {
    if (valid) {
      loading.value = true;

      // 這裡將實現註冊邏輯
      // 1. 檢查用戶名和電子郵件是否已存在
      // 2. 發送註冊請求到後端 API
      // 3. 處理響應結果

      // 模擬 API 請求
      setTimeout(() => {
        loading.value = false;

        // 註冊成功
        ElMessage.success('註冊成功！請登入您的帳號');
        emit('register-success');
      }, 1500);
    }
  });
};
</script>

<template>
  <el-form
    ref="registerFormRef"
    :model="registerForm"
    :rules="registerRules"
    label-position="top"
    @submit.prevent="handleRegister(registerFormRef)"
  >
    <!-- 用戶名 -->
    <el-form-item label="用戶名" prop="username">
      <el-input
        v-model="registerForm.username"
        placeholder="請輸入用戶名"
        prefix-icon="Icon-mdi-account"
      />
    </el-form-item>

    <!-- 電子郵件 -->
    <el-form-item label="電子郵件" prop="email">
      <el-input
        v-model="registerForm.email"
        placeholder="請輸入電子郵件"
        prefix-icon="Icon-mdi-email"
      />
    </el-form-item>

    <!-- 密碼 -->
    <el-form-item label="密碼" prop="password">
      <el-input
        v-model="registerForm.password"
        type="password"
        placeholder="請輸入密碼"
        prefix-icon="Icon-mdi-lock"
        show-password
      />
      <div class="password-tips">
        密碼必須包含字母和數字，長度至少8個字符
      </div>
    </el-form-item>

    <!-- 確認密碼 -->
    <el-form-item label="確認密碼" prop="confirmPassword">
      <el-input
        v-model="registerForm.confirmPassword"
        type="password"
        placeholder="請再次輸入密碼"
        prefix-icon="Icon-mdi-lock-check"
        show-password
      />
    </el-form-item>

    <!-- 同意條款 -->
    <el-form-item prop="agreeTerms">
      <el-checkbox v-model="registerForm.agreeTerms" class="terms-checkbox">
        <span class="terms-text">
          我已閱讀並同意<br class="mobile-break">
          <router-link to="/terms" target="_blank">服務條款</router-link>和<router-link to="/privacy" target="_blank">隱私政策</router-link>
        </span>
      </el-checkbox>
    </el-form-item>

    <!-- 註冊按鈕 -->
    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        :loading="loading"
        class="submit-button"
      >
        註冊
      </el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.password-tips {
  font-size: 0.8rem;
  color: var(--el-text-color-secondary);
  margin-top: 0.5rem;
  line-height: 1.4;
  word-break: break-word;
  hyphens: auto;
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  font-size: 1.1rem;
}

a {
  color: var(--el-color-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.terms-checkbox {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.terms-text {
  display: inline-block;
  line-height: 1.4;
  word-break: break-word;
  hyphens: auto;
}

.mobile-break {
  display: none;
}

@media (max-width: 480px) {
  .password-tips {
    font-size: 0.75rem;
    padding: 0 0.25rem;
  }

  .terms-text {
    font-size: 0.85rem;
  }

  .mobile-break {
    display: inline;
  }

  :deep(.el-checkbox__label) {
    line-height: 1.4;
    padding-left: 6px;
  }

  :deep(.el-form-item__label) {
    padding-bottom: 4px;
  }

  :deep(.el-checkbox__input) {
    margin-top: 2px;
  }
}

@media (max-width: 375px) {
  .terms-text {
    font-size: 0.8rem;
  }

  :deep(.el-checkbox__label) {
    padding-left: 4px;
  }
}
</style>