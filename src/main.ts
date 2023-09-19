import '@/styles/book.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import NutUI from "@nutui/nutui";
import router from './router'

import "@nutui/nutui/dist/style.css";
const app = createApp(App)

app.use(createPinia())
app.use(router).use(Vant).use(NutUI).mount('#app')
