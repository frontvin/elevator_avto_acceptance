<template>
    <el-row>
        
        <!-- Form -->
        <!-- <el-button type="primary" plain @click="dialogFormVisible = true">Нова реєстрація</el-button> -->

        <el-dialog title="Нова реєстарція" :visible="formVisisble">
        
            <el-form :model="form" :rules="rules" ref="form" :before-close="close">
                <!-- Дані водія -->
                <el-form-item label="Ім'я" prop="driverName" :label-width="formLabelWidth">
                    <el-input v-model="form.driverName" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Прізвище" prop="driverSurname" :label-width="formLabelWidth">
                    <el-input v-model="form.driverSurname" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Сертифікат водія" prop="sertificate" :label-width="formLabelWidth">
                    <el-input v-model="form.sertificate" auto-complete="off" clearable></el-input>
                </el-form-item>
                
                <!-- Дані автомобіля -->
                <el-form-item label="Марка автомобіля" prop="carBrand" :label-width="formLabelWidth">
                    <el-input v-model="form.carBrand" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Модель автомобіля" prop="carModel" :label-width="formLabelWidth">
                    <el-input v-model="form.carModel" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Номер автомобіля" prop="carNumber" :label-width="formLabelWidth">
                    <el-input v-model="form.carNumber" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Колір автомобіля" prop="carColor" :label-width="formLabelWidth">
                    <el-input v-model="form.carColor" auto-complete="off" clearable></el-input>
                </el-form-item>
                
                <!-- Дані вантажу та дати реєстрації -->
                <el-form-item label="Дата реєстрації" prop="regDate" :label-width="formLabelWidth">
                    <el-date-picker 
                        type="date"
                        placeholder="Виберіть дату"
                        style="width:100%" 
                        v-model="form.regDate" 
                        auto-complete="off">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="Вантаж" prop="cargo" :label-width="formLabelWidth">
                    <el-input v-model="form.cargo" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Вага" prop="weight" :label-width="formLabelWidth">
                    <el-input-number v-model="form.weight" @change="handleChange" auto-complete="off" clearable></el-input-number>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="close">Закрити</el-button>
                <el-button @click="resetForm('form')">Очистити</el-button>
                <el-button type="primary" @click="submitForm('form')">Зареєструвати</el-button>
            </span>
            
        </el-dialog>
    </el-row>
</template>

<script>

export default {
    name: 'e-registration',

    data() {
        return {
            formLabelWidth: '140px',
            form: {
                driverName: '',
                driverSurname: '',
                sertificate: '',
                carBrand: '',
                carModel: '',
                carNumber: '',
                carColor: '',
                cargo: '',
                weight: 0,
                regDate: new Date()
			},
            rules: {
                driverName: [
                    { required: true, message: 'Будь ласка введіть ім\'я водія', trigger: 'blur' }
                ],
                driverSurname: [
                    { required: true, message: 'Будь ласка введіть прізвище водія', trigger: 'blur' }
                ],
                sertificate: [
                    { required: true, message: 'Будь ласка введіть сертифікат', trigger: 'blur' }
                ],
                carBrand: [
                    { required: true, message: 'Будь ласка введіть марку автомобіля', trigger: 'blur' }
                ],
                carModel: [
                    { required: true, message: 'Будь ласка введіть модель автомобіля', trigger: 'blur' }
                ],
                carNumber: [
                    { required: true, message: 'Будь ласка введіть номер автомобіля', trigger: 'blur' }
                ],
                carColor: [
                    { required: true, message: 'Будь ласка введіть колір автомобіля', trigger: 'blur' }
                ],
                regDate: [
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
        handleChange(value) {
            console.log(value)
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                // for registrations page
                this.$store.dispatch('registers/addNew', this.form);
                
                // for drivers page
                this.$store.dispatch('drivers/addNew', {
                    name: this.form.driverName, 
                    surname: this.form.driverSurname, 
                    sertificate: this.form.sertificate
                });
                
                // for cars page
                this.$store.dispatch('cars/addNew', {
                    brand: this.form.carBrand,
                    model: this.form.carModel,
                    number: this.form.carNumber,
                    color: this.form.carColor
                })
            } else {
                console.log('error submit!!');
                return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        close(done){
            this.$confirm('Ви дійсно хочете закрити форму реєстрації?')
                .then(_ => {
                    done(
                        this.$store.commit('registers/SET_REGISTRATION_FORM_VISIBLE', false)
                    )
                })
                .catch(_ => {});            
        }
    },
    computed: {
        formVisisble(){
            return this.$store.state.registers.newRegistrationFormVisible
        }
    }
}
</script>

<style lang="scss">
    
</style>
