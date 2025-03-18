<script setup lang="ts">
/**
 * ProfileView 組件
 *
 * 用戶個人資料頁面，需要登入才能訪問
 */
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useThemeStore } from '@/stores/theme';
import { ElMessage } from 'element-plus';

// 獲取認證狀態
const authStore = useAuthStore();

// 獲取主題狀態
const themeStore = useThemeStore();

// 用戶資料
const userProfile = ref({
  username: '',
  email: '',
  avatar: '',
  bio: '',
  location: '',
  interests: [] as string[]
});

// 加載狀態
const loading = ref(true);

// 編輯模式
const isEditing = ref(false);

// 興趣選項
const interestOptions = [
  '閱讀', '旅行', '音樂', '電影', '攝影', '烹飪', '運動', '藝術', 
  '科技', '遊戲', '寵物', '時尚', '健身', '舞蹈', '戶外活動'
];

// 獲取用戶資料
const fetchUserProfile = async () => {
  loading.value = true;
  
  try {
    // 這裡將實現獲取用戶資料的邏輯
    // 1. 發送請求到後端 API
    // 2. 獲取用戶詳細資料
    
    // 模擬 API 請求
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 假設獲取成功，設置用戶資料
    userProfile.value = {
      username: authStore.username || '用戶名',
      email: 'user@example.com',
      avatar: authStore.avatar || '/images/avatars/default.jpg',
      bio: '這是一個簡短的個人介紹，用戶可以在這裡分享自己的興趣愛好和個人特點。',
      location: '台北市',
      interests: ['閱讀', '旅行', '音樂', '科技']
    };
  } catch (error) {
    ElMessage.error('獲取用戶資料失敗，請稍後再試');
  } finally {
    loading.value = false;
  }
};

// 保存用戶資料
const saveProfile = async () => {
  loading.value = true;
  
  try {
    // 這裡將實現保存用戶資料的邏輯
    // 1. 發送更新請求到後端 API
    
    // 模擬 API 請求
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    ElMessage.success('個人資料已更新');
    isEditing.value = false;
  } catch (error) {
    ElMessage.error('更新個人資料失敗，請稍後再試');
  } finally {
    loading.value = false;
  }
};

// 組件掛載時獲取用戶資料
onMounted(fetchUserProfile);
</script>

<template>
  <div class="profile-page" :class="{ 'dark-theme': themeStore.theme === 'dark' }">
    <div class="container">
      <h1>個人資料</h1>
      
      <el-card v-loading="loading" class="profile-card">
        <div class="profile-header">
          <div class="avatar-container">
            <el-avatar :size="100" :src="userProfile.avatar" />
            <el-button v-if="isEditing" size="small" type="primary" circle class="edit-avatar">
              <el-icon><Icon-mdi-camera /></el-icon>
            </el-button>
          </div>
          
          <div class="profile-actions">
            <el-button v-if="!isEditing" type="primary" @click="isEditing = true">
              <el-icon><Icon-mdi-pencil /></el-icon>
              編輯資料
            </el-button>
            <template v-else>
              <el-button type="primary" @click="saveProfile">
                <el-icon><Icon-mdi-check /></el-icon>
                保存
              </el-button>
              <el-button @click="isEditing = false">
                <el-icon><Icon-mdi-close /></el-icon>
                取消
              </el-button>
            </template>
          </div>
        </div>
        
        <div class="profile-content">
          <el-form label-position="top">
            <!-- 用戶名 -->
            <el-form-item label="用戶名">
              <el-input v-if="isEditing" v-model="userProfile.username" />
              <div v-else class="info-text">{{ userProfile.username }}</div>
            </el-form-item>
            
            <!-- 電子郵件 -->
            <el-form-item label="電子郵件">
              <el-input v-if="isEditing" v-model="userProfile.email" />
              <div v-else class="info-text">{{ userProfile.email }}</div>
            </el-form-item>
            
            <!-- 所在地 -->
            <el-form-item label="所在地">
              <el-input v-if="isEditing" v-model="userProfile.location" />
              <div v-else class="info-text">{{ userProfile.location }}</div>
            </el-form-item>
            
            <!-- 個人介紹 -->
            <el-form-item label="個人介紹">
              <el-input v-if="isEditing" v-model="userProfile.bio" type="textarea" :rows="4" />
              <div v-else class="info-text bio">{{ userProfile.bio }}</div>
            </el-form-item>
            
            <!-- 興趣愛好 -->
            <el-form-item label="興趣愛好">
              <el-select
                v-if="isEditing"
                v-model="userProfile.interests"
                multiple
                placeholder="選擇您的興趣愛好"
                style="width: 100%"
              >
                <el-option
                  v-for="item in interestOptions"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
              <div v-else class="interests-tags">
                <el-tag
                  v-for="interest in userProfile.interests"
                  :key="interest"
                  class="interest-tag"
                >
                  {{ interest }}
                </el-tag>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  min-height: 100vh;
  background-color: var(--el-bg-color);
  color: var(--el-text-color-primary);
  transition: background-color 0.3s, color 0.3s;
  padding: 2rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

h1 {
  font-size: 2.5rem;
  color: var(--el-color-primary);
  margin-bottom: 2rem;
  text-align: center;
}

.profile-card {
  margin-bottom: 2rem;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.avatar-container {
  position: relative;
}

.edit-avatar {
  position: absolute;
  bottom: 0;
  right: 0;
}

.profile-actions {
  display: flex;
  gap: 1rem;
}

.info-text {
  padding: 0.5rem 0;
  color: var(--el-text-color-primary);
}

.bio {
  white-space: pre-line;
}

.interests-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.interest-tag {
  margin-right: 0;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .profile-actions {
    width: 100%;
    justify-content: center;
  }
}
</style>