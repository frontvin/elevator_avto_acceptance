<template>
    <el-row>
        <!-- <el-button type="default">Нова реєстрація</el-button> -->

        <!-- Form -->
        <el-button type="primary" plain @click="dialogFormVisible = true">Нова реєстрація</el-button>

        <el-dialog title="Нова реєстарція" :visible.sync="dialogFormVisible">
        
            <el-form :model="form" :rules="rules" ref="form">
                <!-- Дані водія -->
                <el-form-item label="Ім'я" prop="drivername" :label-width="formLabelWidth">
                    <el-input v-model="form.drivername" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Прізвище" prop="driversurname" :label-width="formLabelWidth">
                    <el-input v-model="form.driversurname" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Сертифікат водія" prop="sertificate" :label-width="formLabelWidth">
                    <el-input v-model="form.sertificate" auto-complete="off" clearable></el-input>
                </el-form-item>
                
                <!-- Дані автомобіля -->
                <el-form-item label="Марка автомобіля" prop="carbrand" :label-width="formLabelWidth">
                    <el-input v-model="form.carbrand" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Модель автомобіля" prop="carmodel" :label-width="formLabelWidth">
                    <el-input v-model="form.carmodel" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Номер автомобіля" prop="carnumber" :label-width="formLabelWidth">
                    <el-input v-model="form.carnumber" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Колір автомобіля" prop="carcolor" :label-width="formLabelWidth">
                    <el-input v-model="form.carcolor" auto-complete="off" clearable></el-input>
                </el-form-item>
                
                <!-- Дані вантажу та дати реєстрації -->
                <el-form-item label="Дата реєстрації" prop="regdate" :label-width="formLabelWidth">
                    <el-date-picker 
                        type="date"
                        placeholder="Виберіть дату"
                        style="width:100%" 
                        v-model="form.regdate" 
                        auto-complete="off">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="Вантаж" prop="cargo" :label-width="formLabelWidth">
                    <el-input v-model="form.cargo" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Вага" prop="weight" :label-width="formLabelWidth">
                    <el-input-number v-model="form.weight" auto-complete="off" clearable></el-input-number>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Закрити</el-button>
                <el-button @click="resetForm('form')">Reset</el-button>
                <el-button type="primary" @click="submitForm('form')">Зареєструвати</el-button>
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
                carmodel: '',
                carnumber: '',
                carcolor: '',
                regdate: '',
                cargo: '',
                weight: ''  
            },
            formLabelWidth: '140px',
            rules: {
                drivername: [
                    { required: true, message: 'Будь ласка введіть ім\'я водія', trigger: 'blur' }
                ],
                driversurname: [
                    { required: true, message: 'Будь ласка введіть прізвище водія', trigger: 'blur' }
                ],
                sertificate: [
                    { required: true, message: 'Будь ласка введіть сертифікат', trigger: 'blur' }
                ],
                carbrand: [
                    { required: true, message: 'Будь ласка введіть марку автомобіля', trigger: 'blur' }
                ],
                carmodel: [
                    { required: true, message: 'Будь ласка введіть модель автомобіля', trigger: 'blur' }
                ],
                carnumber: [
                    { required: true, message: 'Будь ласка введіть номер автомобіля', trigger: 'blur' }
                ],
                carcolor: [
                    { required: true, message: 'Будь ласка введіть колір автомобіля', trigger: 'blur' }
                ],
                regdate: [
                    { required: true, message: 'Будь ласка виберіть дату', trigger: 'blur' }
                ],
                cargo: [
                    { required: true, message: 'Будь ласка введіть назву вантажу', trigger: 'blur' }
                ],
                weight: [
                    { required: true, message: 'Будь ласка введіть вагу вантажу', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm(form) {
            this.$refs[form].validate((valid) => {
            if (valid) {
            // need to write data to local storage
            alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
                }
            });
        },
        resetForm(form) {
            this.$refs[form].resetFields();
        }
    }
}
</script>

<style lang="scss">
    
</style>
