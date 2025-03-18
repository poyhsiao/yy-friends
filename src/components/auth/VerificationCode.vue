<script setup lang="ts">
/**
 * VerificationCode 組件
 *
 * 提供更友好的驗證碼輸入體驗
 */
import { ref, reactive, watch, onMounted } from 'vue';

// 定義屬性
const props = defineProps({
  length: {
    type: Number,
    default: 6
  },
  value: {
    type: String,
    default: ''
  }
});

// 定義事件
const emit = defineEmits(['update:value', 'completed']);

// 創建輸入框引用數組
const inputRefs = ref<HTMLInputElement[]>([]);

// 初始化輸入值數組
const codeDigits = reactive(Array(props.length).fill(''));

// 監聽值變化
watch(() => props.value, (newValue) => {
  if (newValue) {
    const digits = newValue.split('');
    for (let i = 0; i < props.length; i++) {
      codeDigits[i] = digits[i] || '';
    }
  }
});

// 監聽輸入值數組變化，更新父組件的值
watch(codeDigits, () => {
  const value = codeDigits.join('');
  emit('update:value', value);
  
  // 如果所有數字都已輸入，觸發完成事件
  if (value.length === props.length) {
    emit('completed', value);
  }
});

// 處理輸入
const handleInput = (index: number) => {
  // 確保只有一個字符
  if (codeDigits[index].length > 1) {
    codeDigits[index] = codeDigits[index].slice(0, 1);
  }
  
  // 如果輸入了有效字符，自動聚焦下一個輸入框
  if (codeDigits[index] && index < props.length - 1) {
    inputRefs.value[index + 1].focus();
  }
};

// 處理按鍵事件
const handleKeyDown = (e: KeyboardEvent, index: number) => {
  // 如果按下退格鍵且當前輸入框為空，聚焦上一個輸入框
  if (e.key === 'Backspace' && !codeDigits[index] && index > 0) {
    codeDigits[index - 1] = '';
    inputRefs.value[index - 1].focus();
  }
  
  // 如果按下左箭頭，聚焦上一個輸入框
  if (e.key === 'ArrowLeft' && index > 0) {
    inputRefs.value[index - 1].focus();
  }
  
  // 如果按下右箭頭，聚焦下一個輸入框
  if (e.key === 'ArrowRight' && index < props.length - 1) {
    inputRefs.value[index + 1].focus();
  }
};

// 處理粘貼事件
const handlePaste = (e: ClipboardEvent) => {
  e.preventDefault();
  const pastedData = e.clipboardData?.getData('text');
  
  if (pastedData) {
    // 只取數字
    const digits = pastedData.replace(/\D/g, '').split('');
    
    // 填充輸入框
    for (let i = 0; i < props.length && i < digits.length; i++) {
      codeDigits[i] = digits[i];
    }
    
    // 聚焦最後一個填充的輸入框的下一個，或最後一個
    const focusIndex = Math.min(digits.length, props.length - 1);
    inputRefs.value[focusIndex].focus();
  }
};

// 組件掛載後聚焦第一個輸入框
onMounted(() => {
  if (inputRefs.value.length > 0) {
    inputRefs.value[0].focus();
  }
});
</script>

<template>
  <div class="verification-code">
    <div class="code-inputs">
      <input
        v-for="(digit, index) in codeDigits"
        :key="index"
        v-model="codeDigits[index]"
        type="text"
        maxlength="1"
        :ref="el => { if (el) inputRefs[index] = el }"
        @input="handleInput(index)"
        @keydown="handleKeyDown($event, index)"
        @paste="handlePaste"
        class="code-input"
      />
    </div>
  </div>
</template>

<style scoped>
.verification-code {
  width: 100%;
}

.code-inputs {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.code-input {
  width: 40px;
  height: 48px;
  border: 1px solid var(--el-border-color);
  border-radius: 8px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--el-text-color-primary);
  background-color: var(--el-bg-color);
  transition: all 0.3s ease;
}

.code-input:focus {
  border-color: var(--el-color-primary);
  box-shadow: 0 0 0 2px rgba(var(--el-color-primary-rgb), 0.2);
  outline: none;
}

/* 響應式設計 */
@media (max-width: 576px) {
  .code-input {
    width: 36px;
    height: 42px;
    font-size: 1rem;
  }
}
</style>