import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { store, key } from './store'
import '@/styles/index.scss'
import elementPlus from './plugins/element-plus'
const app = createApp(App)
app.use(router)
app.use(store, key)
app.use(elementPlus)

// Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块
const modules = import.meta.globEager('./components/**/index.ts')
for (const path in modules) {
  app.use(modules[path].default)
}

app.mount('#app')
