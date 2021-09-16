import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/media',
  name: 'media',
  component: () => import('@/views/media/index.vue'),
  meta: {
    title: '媒体'
  }
}as RouteRecordRaw
