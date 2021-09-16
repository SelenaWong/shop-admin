import Component from './index.vue'
import { App } from '@vue/runtime-dom'
export default {
  install (app: App) {
    // vue组件注册
    app.component('Pagination', Component)
  }
}
