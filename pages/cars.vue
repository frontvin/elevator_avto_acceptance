<template>
    <div>
        <el-row>
            <carsList />
        </el-row>
        <newRegistration />
    </div>
</template>

<script>
import NewRegistration from '~/components/NewRegistration.vue'
import CarsList from '~/components/CarsList.vue';
export default {
   layout: 'main',
   components: {
       CarsList,
       NewRegistration
   }
}
</script>
<style lang="scss">

</style>
