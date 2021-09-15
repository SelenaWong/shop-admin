<template>
  <i
    :class="collapseIcon"
    @click="handleCollapse"
  />
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { computed } from 'vue'
const store = useStore()
const collapseIcon = computed(() => {
  return store.state.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
})
const handleCollapse = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>

<style lang="scss" scoped>
</style>
