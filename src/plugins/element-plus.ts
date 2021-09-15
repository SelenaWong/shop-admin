import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/index.css'
import { App } from 'vue'
export default {
  install (app: App) {
    app.use(ElementPlus, { size: 'small' })
  }
}
