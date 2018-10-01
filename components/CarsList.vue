<template>
    <el-row>
        <h1>Список автомобілів</h1>
        <p>Всього автомобілів: {{counter}}</p>
        <el-table
            ref="singleTable"
            :data="cars"
            stripe
            border
            height="460"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column
                prop="number"
                label="Номер"
                width="240">
            </el-table-column>
            <el-table-column
                prop="brand"
                label="Марка"
                width="240">
            </el-table-column>
            <el-table-column
                prop="model"
                label="Модель"
                width="240">
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
                        @click.native.prevent="deleteRow(scope.$index)"></el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- Dialog window  -->
        <el-dialog 
            v-if="currentItem"
            title="Інформація про вибраний автомобіль"
            :visible="!!currentItem"
            class="dialogWindow"
            :show-close="false">
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <span class="fieldName">Марка автомобіля</span>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <span class="fieldValue">{{currentItem.brand}}</span>
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
                        <span class="fieldValue">{{currentItem.model}}</span>
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
                        <span class="fieldValue">{{currentItem.number}}</span>
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
                        <span class="fieldValue">{{currentItem.color}}</span>
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
    name: 'e-cars-list',
    data(){
        return {
            currentRow: null,
        }
    },
    computed: {
        cars(){
            return this.$store.state.cars.list;
        },
        counter(){
            return this.$store.state.cars.count;
        },
        currentItem() {
            return this.$store.state.cars.currentItem;
        }
    },
    methods: {
        setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
        },
        handleCurrentChange(val) {
            this.currentRow = val;
        },
        deleteRow(index) {
            this.$store.dispatch('cars/removeRowItem', index);
        },
        showDialogWindow(index){
            this.$store.commit('cars/CURRENT_CAR_ITEM', index)
        },
        closeDialog(){
            this.$store.commit('cars/CURRENT_CAR_ITEM', null)
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
