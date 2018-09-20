<template>
    <el-row>
        
        <!-- Form -->
        <!-- <el-button type="primary" plain @click="dialogFormVisible = true">Нова реєстрація</el-button> -->

        <el-dialog title="Нова реєстарція" :visible="formVisisble">
        
            <el-form v-model="form">
                <!-- Дані водія -->
                <el-form-item label="Ім'я" :label-width="formLabelWidth">
                    <el-input v-model="form.driverName" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Прізвище" :label-width="formLabelWidth">
                    <el-input v-model="form.driversUrname" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Сертифікат водія" :label-width="formLabelWidth">
                    <el-input v-model="form.sertificate" auto-complete="off" clearable></el-input>
                </el-form-item>
                
                <!-- Дані автомобіля -->
                <el-form-item label="Марка автомобіля" :label-width="formLabelWidth">
                    <el-input v-model="form.carBrand" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Модель автомобіля" :label-width="formLabelWidth">
                    <el-input v-model="form.carModel" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Номер автомобіля" :label-width="formLabelWidth">
                    <el-input v-model="form.carNumber" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Колір автомобіля" :label-width="formLabelWidth">
                    <el-input v-model="form.carColor" auto-complete="off" clearable></el-input>
                </el-form-item>
                
                <!-- Дані вантажу та дати реєстрації -->
                <el-form-item label="Дата реєстрації" :label-width="formLabelWidth">
                    <el-date-picker 
                        type="date"
                        placeholder="Виберіть дату"
                        style="width:100%" 
                        v-model="form.regDate" 
                        auto-complete="off">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="Вантаж" :label-width="formLabelWidth">
                    <el-input v-model="form.cargo" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Вага" :label-width="formLabelWidth" prop='weight'>
                    <el-input-number v-model="form.weight" @change="handleChange" auto-complete="off" clearable></el-input-number>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="close">Закрити</el-button>
                <el-button @click="resetForm('formName')">Очистити</el-button>
                <el-button type="primary" @click="submitForm">Зареєструвати</el-button>
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
                driversUrname: '',
                sertificate: '',
                carBrand: '',
                carModel: '',
                carNumber: '',
                carColor: '',
                cargo: '',
                weight: 0,
                regDate: new Date()
            }
        }
    },

    methods: {
        handleChange(value) {
            console.log(value)
        },
        submitForm() {
            this.$store.dispatch('registers/addNew', this.form);
            this.$store.dispatch('drivers/addNew', {
                name: this.form.driverName, 
                surname: this.form.driversUrname, 
                sertificate: this.form.sertificate
            })
        },
        close(){
            this.$store.commit('registers/SET_REGISTRATION_FORM_VISIBLE', false)
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
