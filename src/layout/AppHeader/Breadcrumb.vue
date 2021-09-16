<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      v-for="item in routers"
      :key="item.path"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'
// this.$router
const router = useRouter()
// console.log(router.currentRoute.value.matched)
const routers = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta.title)
})
</script>

<style lang="scss">
.el-breadcrumb__separator[class*=icon] {
  color: #333;
  font-size: 14px;
}
</style>
