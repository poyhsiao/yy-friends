<script setup lang="ts">
/**
 * TermsView 組件
 *
 * 使用條款頁面，詳細說明用戶使用網站和服務的條款和條件
 */
</script>

<template>
  <div class="terms-view">
    <!-- 頁面標題 -->
    <section class="page-header">
      <h1>使用條款</h1>
      <p class="subtitle">請仔細閱讀我們的使用條款</p>
    </section>

    <div class="content-container">
      <div class="content-section">
        <h2>接受條款</h2>
        <p>
          歡迎訪問 YY Friends
          網站。通過訪問和使用本網站，您同意受本使用條款的約束。如果您不同意這些條款，請不要使用本網站。
        </p>
        <p>我們保留隨時修改這些條款的權利。您有責任定期查看這些條款。您在修改後繼續使用本網站，即表示您接受修改後的條款。</p>
      </div>

      <div class="content-section">
        <h2>使用限制</h2>
        <p>您同意僅將本網站用於合法目的，並且不會：</p>
        <ul>
          <li>違反任何適用的法律或法規</li>
          <li>侵犯他人的知識產權或其他權利</li>
          <li>傳播任何有害、威脅、辱罵、騷擾、誹謗、淫穢或其他不適當的內容</li>
          <li>干擾或破壞本網站的安全功能</li>
          <li>未經授權訪問我們的系統或網絡</li>
          <li>收集或存儲其他用戶的個人數據</li>
          <li>使用自動化手段訪問本網站，除非經我們明確許可</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>知識產權</h2>
        <p>
          本網站及其內容（包括但不限於文本、圖形、徽標、圖標、圖像、音頻剪輯、數字下載和軟件）是 YY
          Friends 或其內容提供商的財產，受國際版權、商標、專利和其他知識產權法律的保護。
        </p>
        <p>未經我們明確書面許可，您不得複製、修改、發布、傳輸、分發、展示、執行、複製或創建本網站或其內容的衍生作品。</p>
      </div>

      <div class="content-section">
        <h2>用戶帳戶</h2>
        <p>某些功能或服務可能需要您創建帳戶。如果您創建帳戶，您同意：</p>
        <ul>
          <li>提供準確、完整和最新的信息</li>
          <li>保護您的帳戶密碼的安全</li>
          <li>對您帳戶下發生的所有活動負責</li>
          <li>立即通知我們任何未經授權使用您帳戶的情況</li>
        </ul>
        <p>我們保留在我們認為適當的情況下拒絕服務、終止帳戶或取消訂單的權利。</p>
      </div>

      <div class="content-section">
        <h2>免責聲明</h2>
        <p>
          本網站及其內容按「現狀」和「可用」提供，不附帶任何形式的明示或暗示保證。YY Friends
          不保證本網站將無錯誤、安全或不間斷運行。
        </p>
        <p>
          在法律允許的最大範圍內，YY Friends
          否認所有明示或暗示的保證，包括但不限於適銷性、特定用途適用性和非侵權的暗示保證。
        </p>
      </div>

      <div class="content-section">
        <h2>責任限制</h2>
        <p>
          在法律允許的最大範圍內，YY Friends
          及其董事、員工、代理人、供應商或內容提供商在任何情況下均不對任何直接、間接、附帶、特殊、後果性或懲罰性損害賠償負責，包括但不限於利潤損失、收入損失、數據損失或業務中斷，無論是基於保證、合同、侵權（包括疏忽）或任何其他法律理論，即使
          YY Friends 已被告知此類損害的可能性。
        </p>
      </div>

      <div class="content-section">
        <h2>第三方鏈接</h2>
        <p>
          本網站可能包含指向第三方網站或服務的鏈接，這些網站或服務不由 YY Friends
          擁有或控制。我們不對任何第三方網站或服務的內容、隱私政策或做法負責，也不對其承擔任何責任。
        </p>
        <p>
          您進一步承認並同意，YY Friends
          不應直接或間接地對因您使用或依賴任何此類網站或服務上提供的內容、商品或服務而造成或據稱造成的任何損害或損失負責或承擔責任。
        </p>
      </div>

      <div class="content-section">
        <h2>適用法律</h2>
        <p>這些條款及您與 YY Friends 之間的關係應受台灣法律管轄，不考慮其衝突法規定。</p>
      </div>

      <div class="content-section">
        <h2>爭議解決</h2>
        <p>因這些條款或您使用本網站而產生的任何爭議，應首先嘗試通過友好協商解決。如果無法通過協商解決，則應提交台北地方法院進行專屬管轄。</p>
      </div>

      <div class="content-section">
        <h2>可分割性</h2>
        <p>如果這些條款的任何條款被認定為無效或不可執行，該條款應在最小必要範圍內被修改，使其有效且可執行，而不影響其餘條款的有效性和可執行性。</p>
      </div>

      <div class="content-section">
        <h2>聯絡我們</h2>
        <p>如果您對這些使用條款有任何問題或疑慮，請通過以下方式與我們聯繫：</p>
        <ul class="contact-list">
          <li>
            <el-icon>
              <ep:message />
            </el-icon>電子郵件：info@yyfriends.com
          </li>
          <li>
            <el-icon>
              <ep:phone />
            </el-icon>電話：+886 2 1234 5678
          </li>
          <li>
            <el-icon>
              <ep:location />
            </el-icon>地址：台北市信義區松高路1號
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
.terms-view {
  padding: 2rem 0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: var(--el-text-color-primary);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--el-text-color-secondary);
}

.content-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--el-bg-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 2rem;
}

.content-section {
  margin-bottom: 2rem;
}

.content-section h2 {
  font-size: 1.5rem;
  color: var(--el-text-color-primary);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--el-border-color);
}

.content-section p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--el-text-color-regular);
}

.content-section ul {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.content-section li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: var(--el-text-color-regular);
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
