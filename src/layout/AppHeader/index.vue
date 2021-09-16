<template>
  <el-space size="large">
    <ToggleSidebar class="toggle_sidebar" />
    <Breadcrumb class="breadcrumb" />
  </el-space>
  <el-space>
    <MenuSearch />
    <FullScreen />
    <Notification />
    <UserInfo />
  </el-space>
</template>

<script lang="ts" setup>
import Breadcrumb from './Breadcrumb.vue'
import ToggleSidebar from './ToggleSidebar.vue'
import MenuSearch from './MenuSearch.vue'
import FullScreen from './FullScreen.vue'
import Notification from './Notification.vue'
import UserInfo from './UserInfo.vue'
</script>

<style lang="scss" scoped>
.toggle_sidebar {
  cursor: pointer;
}
.breadcrumb {
  margin-left: 10px;
}
i {
  font-size: 19px;
  cursor: pointer;
}
</style>
