import './assets/main.css';
import './assets/theme-vars.css';
import './style/index.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import zhTW from 'element-plus/dist/locale/zh-tw';
import { useAuthStore } from './stores/auth';

import App from './App.vue';
import router from './router';

const app = createApp(App);

// 註冊所有圖標
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(createPinia());
app.use(router);
app.use(ElementPlus, {
  locale: zhTW,
});

const authStore = useAuthStore();

authStore.initialize().then(() => {
  app.mount('#app');
});
