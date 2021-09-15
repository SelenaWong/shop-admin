<template>
  <h1>首页</h1>
</template>

<script lang="ts" setup>
import { logout } from '@/api/common'
// 同一时间有多个请求，会发生多个拦截器处理
logout()
logout()
logout()
</script>

<style lang="scss" scoped>
h1 {
  color: $color;
}
</style>
