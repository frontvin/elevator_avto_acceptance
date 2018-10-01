<template>
    <el-row>
        <h1>Список реєстрацій</h1>
        <p>Всього реєстрацій: {{counter}}</p>
        <el-table
            ref="singleTable"
            :data='registrations'
            border
            height="460"
            highlight-current-row
            style="width: 100%">
            <el-table-column
                prop="driverName"
                label="Ім'я"
                width="120">
            </el-table-column>
            <el-table-column
                prop="driverSurname"
                label="Прізвище"
                width="120">
            </el-table-column>
            <el-table-column
                prop="carNumber"
                label="Номер автомобіля">
            </el-table-column>
            <el-table-column
                prop="regDate"
                label="Дата реєстрації">
            </el-table-column>
            <el-table-column
                prop="cargo"
                label="Вантаж">
            </el-table-column>
            <el-table-column
                prop="weight"
                label="Вага">
            </el-table-column>
            <el-table-column
                label="Операції">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="showDialogWindow">Переглянути</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        icon="el-icon-delete"
                        round
                        @click.native.prevent="deleteRow(scope.$index)"></el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- Dialog window  -->

        <el-dialog 
            title="Поточна реєстрація" 
            :visible="showDialogTable" 
            class="dialogWindow"
            :show-close="false">
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div><span class="fieldName">Ім'я водія</span></div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <div><span></span></div>
                    </div>
                </el-col>
            </el-row>
            
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div><span class="fieldName">Прізвище водія</span></div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <div><span></span></div>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div><span class="fieldName">Сертифікат</span></div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <div><span></span></div>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div><span class="fieldName">Марка автомобіля</span></div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <div><span></span></div>
                    </div>
                </el-col>
            </el-row>
            
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div><span class="fieldName">Модель автомобіля</span></div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <div><span></span></div>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div><span class="fieldName">Номер автомобіля</span></div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <div><span></span></div>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div><span class="fieldName">Колір автомобіля</span></div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <div><span></span></div>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div><span class="fieldName">Вантаж</span></div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <div><span></span></div>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div><span class="fieldName">Вага</span></div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <div><span></span></div>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div><span class="fieldName">Дата реєстрації</span></div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <div><span></span></div>
                    </div>
                </el-col>
            </el-row>
                
            <el-row class="closeDialogWrapper">
                <el-button @click="closeDialog">Закрити</el-button>
            </el-row>
        </el-dialog>  
    
    </el-row>
</template>

<script>

export default {
data(){
        return {
            
        }
    },
    computed: {
        registrations(){
            return this.$store.state.registers.list;
        },
        counter(){
            return this.$store.state.registers.count;
        },
        showDialogTable(){
            return this.$store.state.registers.dialogTable
        }
    },
    methods: {
        deleteRow(index) {
            this.$store.dispatch('registers/removeRowItem', index);
        },
        showDialogWindow(){
            this.$store.commit('registers/SHOW_DIALOG', true)
        },
        closeDialog(){
            this.$store.commit('registers/SHOW_DIALOG', false)
        },

        //neen fix it
        currentRegistration(){
            this.$store.dispatch('registers/CURRENT_ITEM', {
                name: this.list.driverName, 
                surname: this.form.driverSurname, 
                sertificate: this.form.sertificate,
                brand: this.form.carBrand,
                model: this.form.carModel,
                number: this.form.carNumber,
                color: this.form.carColor
            })
        },
    }

}
</script>

<style lang="scss" scoped>
    .fieldName {
        font-size: 16px;
        text-align: left;
        margin: 0 auto;
    }
    .el-row {
        margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .closeDialogWrapper{
        text-align: center;
    }
</style>
