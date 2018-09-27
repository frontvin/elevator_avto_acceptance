<template>
    <div>
        <el-row>
            <DriversList />
        </el-row>
        <newRegistration />
    </div>
</template>

<script>
import NewRegistration from '~/components/NewRegistration.vue'
import DriversList from '~/components/DriversList';
export default {
    layout: 'main',
    components: {
        DriversList,
        NewRegistration
    }
}
</script>
<style lang="scss">

</style>
