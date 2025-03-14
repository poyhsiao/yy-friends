import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  // 從本地存儲中獲取主題設置，如果沒有則默認為 'light'
  const theme = ref(localStorage.getItem('theme') || 'light');

  // 切換主題
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    // 保存到本地存儲
    localStorage.setItem('theme', theme.value);
    // 應用主題到 HTML 元素
    applyTheme();
  }

  // 設置特定主題
  function setTheme(newTheme: 'light' | 'dark') {
    theme.value = newTheme;
    // 保存到本地存儲
    localStorage.setItem('theme', theme.value);
    // 應用主題到 HTML 元素
    applyTheme();
  }

  // 應用主題到 HTML 元素
  function applyTheme() {
    // 為 HTML 元素添加或移除 dark 類
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // 初始化主題
  function initTheme() {
    applyTheme();
  }

  return { theme, toggleTheme, setTheme, initTheme };
});
