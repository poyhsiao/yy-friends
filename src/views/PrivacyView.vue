<script setup lang="ts">
/**
 * PrivacyView 組件
 *
 * 隱私政策頁面，詳細說明公司對用戶數據的收集、使用和保護政策
 * 使用可重用元件來構建頁面結構
 */
import PageHeader from '@/components/legal/PageHeader.vue';
import ContentSection from '@/components/legal/ContentSection.vue';
import ContactInfo from '@/components/legal/ContactInfo.vue';
import LegalPageContainer from '@/components/legal/LegalPageContainer.vue';
</script>

<template>
  <LegalPageContainer>
    <PageHeader title="隱私政策" subtitle="我們如何保護您的個人信息" />

    <div class="content-container">
      <ContentSection title="引言">
        <p>
          YY
          Friends（以下簡稱「我們」）非常重視您的隱私和個人信息保護。本隱私政策旨在向您說明我們如何收集、使用、存儲和保護您的個人信息，以及您對這些信息所擁有的權利。
        </p>
        <p>請您在使用我們的服務前仔細閱讀本隱私政策。當您使用我們的服務時，即表示您已同意我們按照本隱私政策收集、使用、存儲和保護您的個人信息。</p>
      </ContentSection>

      <ContentSection title="信息收集">
        <p>我們可能會收集以下類型的信息：</p>
        <ul>
          <li>
            <strong>個人識別信息</strong>：包括但不限於您的姓名、電子郵件地址、電話號碼、郵寄地址等。
          </li>
          <li>
            <strong>設備信息</strong>：包括但不限於您使用的設備類型、操作系統、瀏覽器類型、IP地址等。
          </li>
          <li>
            <strong>使用數據</strong>：包括但不限於您訪問我們網站的時間、瀏覽的頁面、點擊的鏈接等。
          </li>
          <li>
            <strong>Cookie和類似技術</strong>：我們使用Cookie和類似技術來收集和存儲有關您如何使用我們服務的信息。
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="信息使用">
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
      </ContentSection>

      <ContentSection title="信息共享">
        <p>我們不會出售、出租或交易您的個人信息給第三方。但在以下情況下，我們可能會共享您的信息：</p>
        <ul>
          <li>
            <strong>服務提供商</strong>：我們可能會與幫助我們提供服務的第三方服務提供商共享您的信息，如支付處理商、電子郵件服務提供商等。
          </li>
          <li>
            <strong>法律要求</strong>：如果法律要求我們披露您的信息，或者為了保護我們或他人的權利、財產或安全，我們可能會披露您的信息。
          </li>
          <li>
            <strong>業務轉讓</strong>：如果我們參與合併、收購或資產出售，您的信息可能會作為交易的一部分被轉讓。
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="信息安全">
        <p>我們採取適當的技術和組織措施來保護您的個人信息不被未經授權的訪問、使用或披露。然而，請注意，沒有任何網絡傳輸或電子存儲方法是100%安全的。</p>
      </ContentSection>

      <ContentSection title="您的權利">
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
      </ContentSection>

      <ContentSection title="兒童隱私">
        <p>我們的服務不面向13歲以下的兒童。我們不會故意收集13歲以下兒童的個人信息。如果您發現我們可能收集了13歲以下兒童的個人信息，請立即聯繫我們，我們將採取措施刪除這些信息。</p>
      </ContentSection>

      <ContentSection title="隱私政策的變更">
        <p>我們可能會不時更新本隱私政策。當我們進行重大變更時，我們會在網站上發布更新後的隱私政策，並在適當的情況下通知您。我們建議您定期查看本頁面以了解最新的隱私保護實踐。</p>
      </ContentSection>

      <ContentSection title="聯絡我們">
        <p>如果您對本隱私政策有任何問題或疑慮，請通過以下方式與我們聯繫：</p>
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
