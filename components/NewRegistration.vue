<template>
    <el-row>
        
        <!-- Form -->
        <el-button type="primary" plain @click="dialogFormVisible = true">Нова реєстрація</el-button>

        <el-dialog title="Нова реєстарція" :visible.sync="dialogFormVisible">
        
            <el-form>
                <!-- Дані водія -->
                <el-form-item label="Ім'я" :label-width="formLabelWidth">
                    <el-input v-model="drivername" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Прізвище" :label-width="formLabelWidth">
                    <el-input v-model="driversurname" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Сертифікат водія" :label-width="formLabelWidth">
                    <el-input v-model="sertificate" auto-complete="off" clearable></el-input>
                </el-form-item>
                
                <!-- Дані автомобіля -->
                <el-form-item label="Марка автомобіля" :label-width="formLabelWidth">
                    <el-input v-model="carbrand" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Модель автомобіля" :label-width="formLabelWidth">
                    <el-input v-model="carmodel" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Номер автомобіля" :label-width="formLabelWidth">
                    <el-input v-model="carnumber" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Колір автомобіля" :label-width="formLabelWidth">
                    <el-input v-model="carcolor" auto-complete="off" clearable></el-input>
                </el-form-item>
                
                <!-- Дані вантажу та дати реєстрації -->
                <el-form-item label="Дата реєстрації" :label-width="formLabelWidth">
                    <el-date-picker 
                        type="date"
                        placeholder="Виберіть дату"
                        style="width:100%" 
                        v-model="regdate" 
                        auto-complete="off">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="Вантаж" :label-width="formLabelWidth">
                    <el-input v-model="cargo" auto-complete="off" clearable></el-input>
                </el-form-item>
                <el-form-item label="Вага" :label-width="formLabelWidth" prop='weight'>
                    <el-input-number v-model="weight" @change="handleChange" auto-complete="off" clearable></el-input-number>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Закрити</el-button>
                <el-button @click="resetForm('formName')">Очистити</el-button>
                <el-button type="primary" @click="submitForm('formName')">Зареєструвати</el-button>
            </span>
            
        </el-dialog>
    </el-row>
</template>

<script>

export default {
    data() {
        return {
            dialogFormVisible: false,
            formLabelWidth: '140px',
        }
    },
    computed: {
        drivername: {
            get () {
                return this.$store.state.drivername
            },
            set (drivername) {
                this.$store.commit('registersStore/SET_DRIVERNAME', drivername)
            }
        },
        driversurname: {
            get () {
                return this.$store.state.driversurname
            },
            set (driversurname) {
                this.$store.commit('registersStore/SET_DRIVERSURNAME', driversurname)
            }
        },
        sertificate: {
            get () {
                return this.$store.state.sertificate
            },
            set (sertificate) {
                this.$store.commit('registersStore/SET_SERTIFICATE', sertificate)
            }
        },
        carbrand: {
            get () {
                return this.$store.state.carbrand
            },
            set (carbrand) {
                this.$store.commit('registersStore/SET_CARBRAND', carbrand)
            }
        },
        carmodel: {
            get () {
                return this.$store.state.carmodel
            },
            set (carmodel) {
                this.$store.commit('registersStore/SET_CARMODEL', carmodel)
            }
        },
        carnumber: {
            get () {
                return this.$store.state.carnumber
            },
            set (carnumber) {
                this.$store.commit('registersStore/SET_CARNUMBER', carnumber)
            }
        },
        carcolor: {
            get () {
                return this.$store.state.carcolor
            },
            set (carcolor) {
                this.$store.commit('registersStore/SET_CARCOLOR', carcolor)
            }
        },
        regdate: {
            get () {
                return this.$store.state.regdate
            },
            set (regdate) {
                this.$store.commit('registersStore/SET_REGDATE', regdate)
            }
        },
        cargo: {
            get () {
                return this.$store.state.cargo
            },
            set (cargo) {
                this.$store.commit('registersStore/SET_CARGO', cargo)
            }
        },
        weight: {
            get () {
                return this.$store.state.weight
            },
            set (weight) {
                this.$store.commit('registersStore/SET_WEIGHT', weight)
            }
        },
    },
    methods: {
        handleChange(value) {
            console.log(value)
        },
        submitForm() {
            
            // need to write data to local storage
            this.$store.state.regInfo.registrations.push({
                                drivername: this.drivername,
                                driversurname: this.driversurname,
                                sertificate: this.sertificate,
                                carbrand: this.carbrand,
                                carmodel: this.carmodel,
                                carnumber: this.carnumber,
                                carcolor: this.carcolor,
                                regdate: this.regdate,
                                cargo: this.cargo,
                                weight: this.weight
            })
            console.log(registrations);
        },
    }

}
</script>

<style lang="scss">
    
</style>
