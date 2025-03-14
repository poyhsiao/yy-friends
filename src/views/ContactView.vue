<script setup lang="ts">
/**
 * ContactView 組件
 *
 * 聯絡我們頁面，包含聯絡表單和聯絡信息
 * 支持表單驗證和提交功能
 */
import { ref, reactive } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';

// 表單引用，用於表單驗證和提交
const formRef = ref<FormInstance>();

// 表單數據
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
});

// 表單驗證規則
const rules = reactive<FormRules>({
  name: [
    { required: true, message: '請輸入您的姓名', trigger: 'blur' },
    { min: 2, max: 50, message: '姓名長度應在2到50個字符之間', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '請輸入您的電子郵件', trigger: 'blur' },
    { type: 'email', message: '請輸入有效的電子郵件地址', trigger: 'blur' },
  ],
  phone: [{ pattern: /^[0-9\-+\s()]*$/, message: '請輸入有效的電話號碼', trigger: 'blur' }],
  subject: [
    { required: true, message: '請輸入主題', trigger: 'blur' },
    { min: 2, max: 100, message: '主題長度應在2到100個字符之間', trigger: 'blur' },
  ],
  message: [
    { required: true, message: '請輸入您的留言', trigger: 'blur' },
    { min: 10, max: 1000, message: '留言長度應在10到1000個字符之間', trigger: 'blur' },
  ],
});

// 表單提交中狀態
const submitting = ref(false);

// 表單提交成功狀態
const submitSuccess = ref(false);

// 提交表單
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;

  await formEl.validate((valid) => {
    if (valid) {
      submitting.value = true;

      // 這裡將來會整合 Supabase 或其他後端服務
      // 目前僅模擬提交過程
      setTimeout(() => {
        submitting.value = false;
        submitSuccess.value = true;

        // 重置表單
        formEl.resetFields();

        // 5秒後隱藏成功消息
        setTimeout(() => {
          submitSuccess.value = false;
        }, 5000);
      }, 1500);
    }
  });
};

// 重置表單
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

// 聯絡信息
const contactInfo = [
  {
    icon: 'ep:location',
    title: '地址',
    content: '台北市信義區松高路1號',
  },
  {
    icon: 'ep:phone',
    title: '電話',
    content: '+886 2 1234 5678',
  },
  {
    icon: 'ep:message',
    title: '電子郵件',
    content: 'info@yyfriends.com',
  },
  {
    icon: 'ep:alarm-clock',
    title: '營業時間',
    content: '週一至週五: 9:00 - 18:00',
  },
];
</script>

<template>
  <div class="contact-view">
    <!-- 頁面標題 -->
    <section class="page-header">
      <h1>聯絡我們</h1>
      <p class="subtitle">我們期待聽到您的聲音</p>
    </section>

    <div class="contact-container">
      <!-- 聯絡信息 -->
      <div class="contact-info">
        <h2>聯絡信息</h2>
        <p>如果您有任何問題或需求，請隨時與我們聯絡。我們的團隊將盡快回覆您。</p>

        <div class="info-items">
          <div v-for="(item, index) in contactInfo" :key="index" class="info-item">
            <div class="info-icon">
              <el-icon><component :is="item.icon" /></el-icon>
            </div>
            <div class="info-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>

        <!-- 社交媒體連結 -->
        <div class="social-links">
          <h3>關注我們</h3>
          <div class="social-icons">
            <a href="#" title="Facebook">
              <el-icon><Icon-mdi-facebook /></el-icon>
            </a>
            <a href="#" title="Instagram">
              <el-icon><Icon-mdi-instagram /></el-icon>
            </a>
            <a href="#" title="LinkedIn">
              <el-icon><Icon-mdi-linkedin /></el-icon>
            </a>
          </div>
        </div>
      </div>

      <!-- 聯絡表單 -->
      <div class="contact-form">
        <h2>發送訊息</h2>

        <!-- 提交成功提示 -->
        <el-alert
          v-if="submitSuccess"
          title="訊息已成功發送！我們將盡快與您聯絡。"
          type="success"
          show-icon
          :closable="false"
          class="submit-alert"
        />

        <el-form
          ref="formRef"
          :model="formData"
          :rules="rules"
          label-position="top"
          require-asterisk-position="end"
          scroll-to-error
        >
          <div class="form-row">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="formData.name" placeholder="請輸入您的姓名" />
            </el-form-item>

            <el-form-item label="電子郵件" prop="email">
              <el-input v-model="formData.email" placeholder="請輸入您的電子郵件" />
            </el-form-item>
          </div>

          <el-form-item label="電話" prop="phone">
            <el-input v-model="formData.phone" placeholder="請輸入您的電話號碼（選填）" />
          </el-form-item>

          <el-form-item label="主題" prop="subject">
            <el-input v-model="formData.subject" placeholder="請輸入主題" />
          </el-form-item>

          <el-form-item label="留言" prop="message">
            <el-input
              v-model="formData.message"
              type="textarea"
              placeholder="請輸入您的留言"
              :rows="5"
            />
          </el-form-item>

          <div class="form-actions">
            <el-button @click="resetForm(formRef)">重置</el-button>
            <el-button type="primary" @click="submitForm(formRef)" :loading="submitting">
              {{ submitting ? '提交中...' : '提交' }}
            </el-button>
          </div>
        </el-form>
      </div>
    </div>

    <!-- 地圖區域 -->
    <section class="map-section">
      <h2>我們的位置</h2>
      <div class="map-container">
        <!-- 這裡將來可以整合 Google Maps 或其他地圖服務 -->
        <div class="map-placeholder">
          <el-icon><Icon-mdi-map-legend /></el-icon>
          <p>地圖加載中...</p>
          <p class="map-address">台北市信義區松高路1號</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-view {
  padding: 2rem 0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: var(--el-color-primary);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--el-text-color-secondary);
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.contact-info,
.contact-form {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 2rem;
}

.contact-info h2,
.contact-form h2,
.map-section h2 {
  font-size: 1.8rem;
  color: var(--el-color-primary);
  margin-bottom: 1.5rem;
}

.info-items {
  margin: 2rem 0;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.info-icon {
  font-size: 1.5rem;
  color: var(--el-color-primary);
  margin-right: 1rem;
  padding-top: 0.2rem;
}

.info-content h3 {
  font-size: 1.2rem;
  margin: 0 0 0.3rem 0;
  color: var(--el-text-color-primary);
}

.info-content p {
  margin: 0;
  color: var(--el-text-color-regular);
}

.social-links h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--el-text-color-primary);
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--el-color-primary-light-8);
  color: var(--el-color-primary);
  transition: all 0.3s;
}

.social-icons a:hover {
  background-color: var(--el-color-primary);
  color: white;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}

.submit-alert {
  margin-bottom: 1.5rem;
}

.map-section {
  text-align: center;
  margin-bottom: 3rem;
}

.map-container {
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
}

.map-placeholder {
  height: 100%;
  background-color: var(--el-color-primary-light-9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--el-text-color-secondary);
}

.map-placeholder .el-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--el-color-primary);
}

.map-address {
  font-weight: bold;
  margin-top: 0.5rem;
}

/* 響應式設計 */
@media (max-width: 992px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .map-container {
    height: 300px;
  }
}
</style>
