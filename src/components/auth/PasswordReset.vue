<script setup lang="ts">
/**
 * PasswordReset 組件
 *
 * 處理用戶密碼重置流程
 */
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';

// 定義事件
const emit = defineEmits(['reset-success', 'cancel']);

// 表單引用
const resetFormRef = ref<FormInstance>();

// 表單數據
const resetForm = reactive({
  email: '',
  verificationCode: '',
  newPassword: '',
  confirmPassword: ''
});

// 控制當前步驟
const currentStep = ref(1);

// 加載狀態
const loading = ref(false);

// 表單驗證規則
const resetRules = reactive<FormRules>({
  email: [
    { required: true, message: '請輸入電子郵件', trigger: 'blur' },
    { type: 'email', message: '請輸入有效的電子郵件地址', trigger: 'blur' }
  ],
  verificationCode: [
    { required: true, message: '請輸入驗證碼', trigger: 'blur' },
    { min: 6, max: 6, message: '驗證碼應為6位數字', trigger: 'blur' },
    { pattern: /^\d+$/, message: '驗證碼只能包含數字', trigger: 'blur' }
  ],
  newPassword: [
    { required: true, message: '請輸入新密碼', trigger: 'blur' },
    { min: 8, message: '密碼長度不能少於8個字符', trigger: 'blur' },
    { 
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 
      message: '密碼必須包含字母和數字', 
      trigger: 'blur' 
    }
  ],
  confirmPassword: [
    { required: true, message: '請再次輸入新密碼', trigger: 'blur' },
    { 
      validator: (rule: any, value: string, callback: any) => {
        if (value === '') {
          callback(new Error('請再次輸入新密碼'));
        } else if (value !== resetForm.newPassword) {
          callback(new Error('兩次輸入的密碼不一致'));
        } else {
          callback();
        }
      }, 
      trigger: 'blur' 
    }
  ]
});

// 發送驗證碼
const sendVerificationCode = async () => {
  await resetFormRef.value?.validateField('email', (valid) => {
    if (valid) {
      loading.value = true;
      
      // 這裡將實現發送驗證碼邏輯
      // 1. 檢查電子郵件是否存在
      // 2. 發送包含驗證碼的郵件
      
      // 模擬 API 請求
      setTimeout(() => {
        loading.value = false;
        currentStep.value = 2;
        ElMessage.success('驗證碼已發送到您的郵箱，請查收');
      }, 1500);
    }
  });
};

// 驗證驗證碼
const verifyCode = async () => {
  await resetFormRef.value?.validateField('verificationCode', (valid) => {
    if (valid) {
      loading.value = true;
      
      // 這裡將實現驗證碼驗證邏輯
      // 1. 檢查驗證碼是否正確
      // 2. 如果正確，進入重置密碼步驟
      
      // 模擬 API 請求
      setTimeout(() => {
        loading.value = false;
        currentStep.value = 3;
      }, 1000);
    }
  });
};

// 重置密碼
const resetPassword = async () => {
  if (!resetFormRef.value) return;
  
  await resetFormRef.value.validateField(['newPassword', 'confirmPassword'], (valid) => {
    if (valid) {
      loading.value = true;
      
      // 這裡將實現密碼重置邏輯
      // 1. 發送新密碼到後端 API
      // 2. 處理響應結果
      
      // 模擬 API 請求
      setTimeout(() => {
        loading.value = false;
        ElMessage.success('密碼重置成功，請使用新密碼登入');
        emit('reset-success');
      }, 1500);
    }
  });
};

// 返回登入頁面
const goBack = () => {
  emit('cancel');
};
</script>

<template>
  <div class="password-reset">
    <!-- 步驟指示器 -->
    <el-steps :active="currentStep" finish-status="success" simple>
      <el-step title="發送驗證碼" />
      <el-step title="驗證身份" />
      <el-step title="重置密碼" />
    </el-steps>
    
    <el-form
      ref="resetFormRef"
      :model="resetForm"
      :rules="resetRules"
      label-position="top"
      class="reset-form"
    >
      <!-- 步驟1：輸入電子郵件 -->
      <template v-if="currentStep === 1">
        <el-form-item label="電子郵件" prop="email">
          <el-input
            v-model="resetForm.email"
            placeholder="請輸入您的註冊郵箱"
            prefix-icon="Icon-mdi-email"
          />
        </el-form-item>
        
        <div class="form-actions">
          <el-button @click="goBack">返回</el-button>
          <el-button 
            type="primary" 
            @click="sendVerificationCode" 
            :loading="loading"
          >
            發送驗證碼
          </el-button>
        </div>
      </template>
      
      <!-- 步驟2：輸入驗證碼 -->
      <template v-if="currentStep === 2">
        <el-form-item label="驗證碼" prop="verificationCode">
          <!-- 使用驗證碼組件替換原來的輸入框 -->
          <VerificationCode
            v-model:value="resetForm.verificationCode"
            @completed="verifyCode"
          />
          <div class="resend-code">
            <a href="#" @click.prevent="sendVerificationCode">重新發送驗證碼</a>
          </div>
        </el-form-item>
        
        <div class="form-actions">
          <el-button @click="currentStep = 1">上一步</el-button>
          <el-button 
            type="primary" 
            @click="verifyCode" 
            :loading="loading"
          >
            驗證
          </el-button>
        </div>
      </template>
      
      <!-- 步驟3：設置新密碼 -->
      <template v-if="currentStep === 3">
        <el-form-item label="新密碼" prop="newPassword">
          <el-input
            v-model="resetForm.newPassword"
            type="password"
            placeholder="請輸入新密碼"
            prefix-icon="Icon-mdi-lock"
            show-password
          />
          <div class="password-tips">
            密碼必須包含字母和數字，長度至少8個字符
          </div>
        </el-form-item>
        
        <el-form-item label="確認新密碼" prop="confirmPassword">
          <el-input
            v-model="resetForm.confirmPassword"
            type="password"
            placeholder="請再次輸入新密碼"
            prefix-icon="Icon-mdi-lock-check"
            show-password
          />
        </el-form-item>
        
        <div class="form-actions">
          <el-button @click="currentStep = 2">上一步</el-button>
          <el-button 
            type="primary" 
            @click="resetPassword" 
            :loading="loading"
          >
            重置密碼
          </el-button>
        </div>
      </template>
    </el-form>
  </div>
</template>

<style scoped>
.password-reset {
  width: 100%;
}

.el-steps {
  margin-bottom: 2rem;
}

.reset-form {
  margin-top: 1.5rem;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.resend-code {
  margin-top: 0.5rem;
  text-align: right;
}

.resend-code a {
  color: var(--el-color-primary);
  font-size: 0.9rem;
  text-decoration: none;
}

.resend-code a:hover {
  text-decoration: underline;
}

.password-tips {
  font-size: 0.8rem;
  color: var(--el-text-color-secondary);
  margin-top: 0.5rem;
}
</style>