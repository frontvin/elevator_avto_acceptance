<template>
    <el-row>
        <newRegistration/>
        <regList/>
    </el-row>
</template>

<script>
import NewRegistration from '~/components/NewRegistration.vue'
import RegList from '~/components/RegList.vue'

export default {
  components:{
      NewRegistration,
      RegList
  },
  layout: 'main'
}
</script>