<template>
  <el-menu
    :unique-opened="true"
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="$store.state.isCollapse"
    router
  >
    <el-menu-item index="/">
      <i class="el-icon-menu" />
      <template #title>
        首页
      </template>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <i class="el-icon-location" />
        <span>商品</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/product/product_list">
          商品列表
        </el-menu-item>
        <el-menu-item index="/product/product_attr">
          商品规格
        </el-menu-item>
        <el-menu-item index="/product/product_classify">
          商品分类
        </el-menu-item>
        <el-menu-item index="/product/product_reply">
          商品评论
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <i class="el-icon-location" />
        <span>订单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/order/list">
          订单列表
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="/media">
      <i class="el-icon-menu" />
      <template #title>
        媒体
      </template>
    </el-menu-item>
    <el-sub-menu index="/permission">
      <template #title>
        <i class="el-icon-location" />
        <span>权限</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/permission/role">
          角色
        </el-menu-item>
        <el-menu-item index="/permission/admin">
          管理员
        </el-menu-item>
        <el-menu-item index="/permission/rule">
          权限规则
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.el-menu{
  border-right: none;
}
.el-menu:not(.el-menu--collapse){
  width: 200px;
  min-height: 400px;
}
</style>
