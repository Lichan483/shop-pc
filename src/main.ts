import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入Pinia构造函数
import { createPinia } from 'pinia'
//实例化 Pinia
const pinia = createPinia()
const app = createApp(App);
createApp(App).mount('#app')
app.use(router).use(ElementPlus).use(pinia).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
