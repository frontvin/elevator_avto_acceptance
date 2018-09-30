<template>
  <el-dialog title="Поточна реєстрація" :visible="false">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div><span>Ім'я водія</span></div>
          <div><span>Прізвище водія</span></div>
          <div><span>Сертифікат</span></div>
          <div><span>Марка автомобіля</span></div>
          <div><span>Модель автомобіля</span></div>
          <div><span>Номер автомобіля</span></div>
          <div><span>Колір автомобіля</span></div>
          <div><span>Вантаж</span></div>
          <div><span>Вага</span></div>
          <div><span>Дата реєстрації</span></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <div><span>{{driverName}}</span></div>
          <div><span>{{driverSurname}}</span></div>
          <div><span>{{sertificate}}</span></div>
          <div><span>{{carBrand}}</span></div>
          <div><span>{{carModel}}</span></div>
          <div><span>{{carNumber}}</span></div>
          <div><span>{{carColor}}</span></div>
          <div><span>{{cargo}}</span></div>
          <div><span>{{weight}}</span></div>
          <div><span>{{regDate}}</span></div>
        </div>
      </el-col>
    </el-row>
  </el-dialog>  
</template>

<script>
export default {
  name: 'item-preview',
  data() {
    return {
      dialogTableVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
