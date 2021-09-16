import { App } from '@vue/runtime-dom'
import Component from './index.vue'
export default {
  install (app: App) {
    // vue组件注册
    app.component('PageContainer', Component)
  }
}
