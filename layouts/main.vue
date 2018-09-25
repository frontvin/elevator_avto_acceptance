<template>
    <div>
        <el-header width="100%">
            <el-menu 
                :default-active="activeIndex1"
                mode="horizontal" 
                class="el-menu" 
                background-color="#545c64" 
                text-color="#fff" 
                active-text-color="#ffd04b">
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
                    <span class="navLink" @click='showRegistrationForm'><i class='el-icon-plus'></i> Нова реєстрація</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <nuxt-link class="navLink" to="/">Вийти</nuxt-link>
                </el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <nuxt/>
        </el-main>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex1: '1'
            };
        },
        methods: {
            showRegistrationForm(){
                this.$store.commit('registers/SET_REGISTRATION_FORM_VISIBLE', true)
            }
        }
    }
</script>

<style lang=scss>
@import '~/assets/normalize.css';
@import url("//unpkg.com/element-ui@2.4.6/lib/theme-chalk/index.css");
.el-header{
    background-color: rgb(84, 92, 100);
}
.el-menu{
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;   
    .el-menu-item{
        padding: 0;
        &:last-child{
            margin-left: auto;
        }
        .navLink{
            font-size: 1.2em;
            text-decoration: none;
            padding: 20px 20px;
        }
    }
}

</style>

