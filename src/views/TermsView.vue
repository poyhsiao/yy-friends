<script setup lang="ts">
/**
 * TermsView 組件
 *
 * 使用條款頁面，詳細說明用戶使用網站和服務的條款和條件
 * 使用可重用元件來構建頁面結構
 */
import PageHeader from '@/components/legal/PageHeader.vue';
import ContentSection from '@/components/legal/ContentSection.vue';
import ContactInfo from '@/components/legal/ContactInfo.vue';
import LegalPageContainer from '@/components/legal/LegalPageContainer.vue';
</script>

<template>
  <LegalPageContainer>
    <PageHeader title="使用條款" subtitle="請仔細閱讀我們的使用條款" />

    <div class="content-container">
      <ContentSection title="接受條款">
        <p>
          歡迎訪問 YY Friends
          網站。通過訪問和使用本網站，您同意受本使用條款的約束。如果您不同意這些條款，請不要使用本網站。
        </p>
        <p>我們保留隨時修改這些條款的權利。您有責任定期查看這些條款。您在修改後繼續使用本網站，即表示您接受修改後的條款。</p>
      </ContentSection>

      <ContentSection title="使用限制">
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
      </ContentSection>

      <ContentSection title="知識產權">
        <p>
          本網站及其內容（包括但不限於文本、圖形、徽標、圖標、圖像、音頻剪輯、數字下載和軟件）是 YY
          Friends 或其內容提供商的財產，受國際版權、商標、專利和其他知識產權法律的保護。
        </p>
        <p>未經我們明確書面許可，您不得複製、修改、發布、傳輸、分發、展示、執行、複製或創建本網站或其內容的衍生作品。</p>
      </ContentSection>

      <ContentSection title="用戶帳戶">
        <p>某些功能或服務可能需要您創建帳戶。如果您創建帳戶，您同意：</p>
        <ul>
          <li>提供準確、完整和最新的信息</li>
          <li>保護您的帳戶密碼的安全</li>
          <li>對您帳戶下發生的所有活動負責</li>
          <li>立即通知我們任何未經授權使用您帳戶的情況</li>
        </ul>
        <p>我們保留在我們認為適當的情況下拒絕服務、終止帳戶或取消訂單的權利。</p>
      </ContentSection>

      <ContentSection title="免責聲明">
        <p>
          本網站及其內容按「現狀」和「可用性」提供，不作任何明示或暗示的保證。YY Friends 不保證本網站的功能不會中斷或無錯誤，也不保證缺陷會被糾正，或本網站或提供它的服務器沒有病毒或其他有害成分。
        </p>
        <p>
          YY Friends 不對本網站上的信息的準確性、完整性或有用性作任何保證。您使用從本網站獲得的任何信息的風險完全由您自己承擔。
        </p>
      </ContentSection>

      <ContentSection title="責任限制">
        <p>
          在法律允許的最大範圍內，YY Friends
          及其董事、員工、代理人、供應商或內容提供商在任何情況下均不對任何直接、間接、附帶、特殊、後果性或懲罰性損害賠償負責，包括但不限於利潤損失、收入損失、數據損失或業務中斷，無論是基於保證、合同、侵權（包括疏忽）或任何其他法律理論，即使
          YY Friends 已被告知此類損害的可能性。
        </p>
      </ContentSection>

      <ContentSection title="第三方鏈接">
        <p>
          本網站可能包含指向第三方網站或服務的鏈接，這些網站或服務不由 YY Friends
          擁有或控制。我們不對任何第三方網站或服務的內容、隱私政策或做法負責，也不對其承擔任何責任。
        </p>
        <p>
          您進一步承認並同意，YY Friends
          不應直接或間接地對因您使用或依賴任何此類網站或服務上提供的內容、商品或服務而造成或據稱造成的任何損害或損失負責或承擔責任。
        </p>
      </ContentSection>

      <ContentSection title="適用法律">
        <p>這些條款及您與 YY Friends 之間的關係應受台灣法律管轄，不考慮其衝突法規定。</p>
      </ContentSection>

      <ContentSection title="爭議解決">
        <p>因這些條款或您使用本網站而產生的任何爭議，應首先嘗試通過友好協商解決。如果無法通過協商解決，則應提交台北地方法院進行專屬管轄。</p>
      </ContentSection>

      <ContentSection title="可分割性">
        <p>如果這些條款的任何條款被認定為無效或不可執行，該條款應在最小必要範圍內被修改，使其有效且可執行，而不影響其餘條款的有效性和可執行性。</p>
      </ContentSection>

      <ContentSection title="聯絡我們">
        <p>如果您對這些使用條款有任何問題或疑慮，請通過以下方式與我們聯繫：</p>
        <ContactInfo />
      </ContentSection>

      <ContentSection title="" isLastUpdated>
        <p>最後更新日期：{{ new Date().toLocaleDateString() }}</p>
      </ContentSection>
    </div>
  </LegalPageContainer>
</template>

<style scoped>
/* 所有樣式已移至各元件中，此處不需要額外樣式 */
</style>
