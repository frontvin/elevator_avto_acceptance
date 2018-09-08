<template>
    <div>
        <el-menu class="el-menu" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">
                <nuxt-link class="navLink" to="/registrations">Реєстрація</nuxt-link>
            </el-menu-item>
            <el-menu-item index="2">
                <nuxt-link class="navLink" to="/drivers">Водії</nuxt-link>
            </el-menu-item>
            <el-menu-item index="3">
                <nuxt-link class="navLink" to="/cars">Автомобілі</nuxt-link>
            </el-menu-item>
            <el-menu-item index="4">
                <nuxt-link class="navLink" to="/">Вийти</nuxt-link>
            </el-menu-item>
        </el-menu>
        <nuxt/>
    </div>
</template>

<script>

export default {

}
</script>

<style>
  @import '~/assets/normalize.css';
  @import url("//unpkg.com/element-ui@2.4.6/lib/theme-chalk/index.css");
  .navLink{
    font-size: 1.2em;
    text-decoration: none;
  }
</style>

