<script setup lang="ts">
/**
 * PrivacyView 組件
 *
 * 隱私政策頁面，詳細說明公司對用戶數據的收集、使用和保護政策
 */
</script>

<template>
  <div class="privacy-view">
    <!-- 頁面標題 -->
    <section class="page-header">
      <h1>隱私政策</h1>
      <p class="subtitle">我們如何保護您的個人信息</p>
    </section>

    <div class="content-container">
      <div class="content-section">
        <h2>引言</h2>
        <p>
          YY
          Friends（以下簡稱「我們」）非常重視您的隱私和個人信息保護。本隱私政策旨在向您說明我們如何收集、使用、存儲和保護您的個人信息，以及您對這些信息所擁有的權利。
        </p>
        <p>
          請您在使用我們的服務前仔細閱讀本隱私政策。當您使用我們的服務時，即表示您已同意我們按照本隱私政策收集、使用、存儲和保護您的個人信息。
        </p>
      </div>

      <div class="content-section">
        <h2>信息收集</h2>
        <p>我們可能會收集以下類型的信息：</p>
        <ul>
          <li>
            <strong>個人識別信息</strong
            >：包括但不限於您的姓名、電子郵件地址、電話號碼、郵寄地址等。
          </li>
          <li>
            <strong>設備信息</strong
            >：包括但不限於您使用的設備類型、操作系統、瀏覽器類型、IP地址等。
          </li>
          <li>
            <strong>使用數據</strong>：包括但不限於您訪問我們網站的時間、瀏覽的頁面、點擊的鏈接等。
          </li>
          <li>
            <strong>Cookie和類似技術</strong
            >：我們使用Cookie和類似技術來收集和存儲有關您如何使用我們服務的信息。
          </li>
        </ul>
      </div>

      <div class="content-section">
        <h2>信息使用</h2>
        <p>我們可能會將收集到的信息用於以下目的：</p>
        <ul>
          <li>提供、維護和改進我們的服務</li>
          <li>處理您的請求和訂單</li>
          <li>向您發送有關我們服務的通知</li>
          <li>提供客戶支持和回應您的問題</li>
          <li>分析和監控網站的使用情況</li>
          <li>防止欺詐和濫用行為</li>
          <li>遵守法律法規的要求</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>信息共享</h2>
        <p>
          我們不會出售、出租或交易您的個人信息給第三方。但在以下情況下，我們可能會共享您的信息：
        </p>
        <ul>
          <li>
            <strong>服務提供商</strong
            >：我們可能會與幫助我們提供服務的第三方服務提供商共享您的信息，如支付處理商、電子郵件服務提供商等。
          </li>
          <li>
            <strong>法律要求</strong
            >：如果法律要求我們披露您的信息，或者為了保護我們或他人的權利、財產或安全，我們可能會披露您的信息。
          </li>
          <li>
            <strong>業務轉讓</strong
            >：如果我們參與合併、收購或資產出售，您的信息可能會作為交易的一部分被轉讓。
          </li>
        </ul>
      </div>

      <div class="content-section">
        <h2>信息安全</h2>
        <p>
          我們採取適當的技術和組織措施來保護您的個人信息不被未經授權的訪問、使用或披露。然而，請注意，沒有任何網絡傳輸或電子存儲方法是100%安全的。
        </p>
      </div>

      <div class="content-section">
        <h2>您的權利</h2>
        <p>根據適用的數據保護法律，您可能擁有以下權利：</p>
        <ul>
          <li>訪問您的個人信息</li>
          <li>更正不準確的個人信息</li>
          <li>刪除您的個人信息</li>
          <li>限制或反對處理您的個人信息</li>
          <li>數據可攜性</li>
          <li>撤回同意</li>
        </ul>
        <p>如果您想行使這些權利，請通過以下聯絡方式與我們聯繫。</p>
      </div>

      <div class="content-section">
        <h2>兒童隱私</h2>
        <p>
          我們的服務不面向13歲以下的兒童。我們不會故意收集13歲以下兒童的個人信息。如果您發現我們可能收集了13歲以下兒童的個人信息，請立即聯繫我們，我們將採取措施刪除這些信息。
        </p>
      </div>

      <div class="content-section">
        <h2>隱私政策的變更</h2>
        <p>
          我們可能會不時更新本隱私政策。當我們進行重大變更時，我們會在網站上發布更新後的隱私政策，並在適當的情況下通知您。我們建議您定期查看本頁面以了解最新的隱私保護實踐。
        </p>
      </div>

      <div class="content-section">
        <h2>聯絡我們</h2>
        <p>如果您對本隱私政策有任何問題或疑慮，請通過以下方式與我們聯繫：</p>
        <ul class="contact-list">
          <li>
            <el-icon><ep:message /></el-icon> 電子郵件：info@yyfriends.com
          </li>
          <li>
            <el-icon><ep:phone /></el-icon> 電話：+886 2 1234 5678
          </li>
          <li>
            <el-icon><ep:location /></el-icon> 地址：台北市信義區松高路1號
          </li>
        </ul>
      </div>

      <div class="content-section last-updated">
        <p>最後更新日期：{{ new Date().toLocaleDateString() }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.privacy-view {
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

.content-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 2rem;
}

.content-section {
  margin-bottom: 2rem;
}

.content-section h2 {
  font-size: 1.5rem;
  color: var(--el-color-primary);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.content-section p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.content-section ul {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.content-section li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

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

.last-updated {
  font-style: italic;
  color: var(--el-text-color-secondary);
  text-align: right;
  margin-top: 3rem;
  margin-bottom: 0;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .content-container {
    padding: 1.5rem;
  }
}
</style>
