<template>
    <el-row>
        <!-- <el-button type="default">Нова реєстрація</el-button> -->

        <!-- Form -->
        <el-button type="primary" @click="dialogFormVisible = true">Нова реєстрація</el-button>

        <el-dialog title="Нова реєстарція" :visible.sync="dialogFormVisible">
        
        <el-form :model="form">
            <!-- Дані водія -->
            <el-form-item label="Ім'я" :label-width="formLabelWidth">
                <el-input v-model="form.drivername" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Прізвище" :label-width="formLabelWidth">
                <el-input v-model="form.driversurname" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Сертифікат водія" :label-width="formLabelWidth">
                <el-input v-model="form.sertificate" auto-complete="off"></el-input>
            </el-form-item>
            
            <!-- Дані автомобіля -->
            <el-form-item label="Марка автомобіля" :label-width="formLabelWidth">
                <el-input v-model="form.carbrand" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Модель автомобіля" :label-width="formLabelWidth">
                <el-input v-model="form.carmodel" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Номер автомобіля" :label-width="formLabelWidth">
                <el-input v-model="form.carnumber" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Колір автомобіля" :label-width="formLabelWidth">
                <el-input v-model="form.carcolor" auto-complete="off"></el-input>
            </el-form-item>
            
            <!-- Дані вантажу та дати реєстрації -->
            <el-form-item label="Дата реєстрації" :label-width="formLabelWidth">
                <el-date-picker 
                    type="date"
                    placeholder="Виберіть дату"
                    style="width:100%" 
                    v-model="form.regdate" 
                    auto-complete="off">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="Вантаж" :label-width="formLabelWidth">
                <el-input v-model="form.cargo" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Вага" :label-width="formLabelWidth">
                <el-input-number 
                    v-model="form.weight"
                    auto-complete="off">
                </el-input-number>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Закрити</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">Зареєструвати</el-button>
        </span>
        </el-dialog>
    </el-row>
</template>

<script>
export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          drivername: '',
          driversurname: '',
          sertificate: '',
          carbrand: '',
          carnumber: '',
          carcolor: '',
          regdate: '',
          cargo: '',
          weight: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '140px'
      };
    }
}
</script>
