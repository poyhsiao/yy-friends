<script setup lang="ts">
                             /**
 * ContactInfo 組件
 *
 * 用於顯示聯絡資訊，包含電子郵件、電話和地址
 * 在法律相關頁面底部使用
 */

defineProps({
  /**
   * 電子郵件地址
   */
  email: {
    type: String,
    default: 'info@yyfriends.com'
  },
  /**
   * 聯絡電話
   */
  phone: {
    type: String,
    default: '+886 2 1234 5678'
  },
  /**
   * 公司地址
   */
  address: {
    type: String,
    default: '台北市信義區松高路1號'
  }
});
</script>

<template>
  <ul class="contact-list">
    <li>
      <el-icon>
        <ep:message />
      </el-icon>
      電子郵件：{{ email }}
    </li>
    <li>
      <el-icon>
        <ep:phone />
      </el-icon>
      電話：{{ phone }}
    </li>
    <li>
      <el-icon>
        <ep:location />
      </el-icon>
      地址：{{ address }}
    </li>
  </ul>
</template>

<style scoped>
.contact-list {
  list-style: none;
  padding: 0;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
}
</style>