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
                        @click="showDialogWindow(scope.$index)">Переглянути</el-button>
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
            v-if="currentItem"
            title="Поточна реєстрація"
            :visible="!!currentItem"
            class="dialogWindow"
            :show-close="false">
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="fieldName">Ім'я водія</span>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <span class="fieldValue">{{ currentItem.driverName }}</span>
                    </div>
                </el-col>
            </el-row>
            
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="fieldName">Прізвище водія</span>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <span class="fieldValue">{{currentItem.driverSurname}}</span>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="fieldName">Сертифікат</span>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <span class="fieldValue">{{currentItem.sertificate}}</span>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="fieldName">Марка автомобіля</span>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <span class="fieldValue">{{currentItem.sertificate}}</span>
                    </div>
                </el-col>
            </el-row>
            
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="fieldName">Модель автомобіля</span>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <span class="fieldValue">{{currentItem.carBrand}}</span>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="fieldName">Номер автомобіля</span>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <span class="fieldValue">{{currentItem.carNumber}}</span>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="fieldName">Колір автомобіля</span>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <span class="fieldValue">{{currentItem.carColor}}</span>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="fieldName">Вантаж</span>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <span class="fieldValue">{{currentItem.cargo}}</span>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="fieldName">Вага</span>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <span class="fieldValue">{{currentItem.weight}}</span>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="fieldName">Дата реєстрації</span>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <span class="fieldValue">{{currentItem.regDate}}</span>
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
        currentItem() {
            return this.$store.state.registers.currentItem;
        }
    },
    methods: {
        deleteRow(index) {
            this.$store.dispatch('registers/removeRowItem', index);
        },
        showDialogWindow(index){
            this.$store.commit('registers/CURRENT_ITEM', index)
        },
        closeDialog(){
            this.$store.commit('registers/CURRENT_ITEM', null)
        }   
    }

}
</script>

<style lang="scss" scoped>
    .fieldName, .fieldValue {
        font-size: 16px;
        text-align: left;
        margin-left: 10px;
    }
    .el-row {
        margin-bottom: 2px;
        &:last-child {
            margin-top: 10px;
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
        display: flex;
        align-items: center;
        border-radius: 4px;
        min-height: 36px;
    }
    .closeDialogWrapper{
        text-align: center;
    }
</style>