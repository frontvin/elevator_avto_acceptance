<template>
<el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
  <el-menu-item index="1">Processing Center</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
  </el-submenu>
    <el-menu-item index="4">Orders</el-menu-item>
</el-menu>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@import url("//unpkg.com/element-ui@2.4.6/lib/theme-chalk/index.css");
</style>
