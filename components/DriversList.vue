<template>
    <el-row>
        <h1>Список водіїв</h1>
        <p class='DriversList__counter'>Всього водіїв: {{counter}}</p>
        <el-table
            ref="singleTable"
            :data="drivers"
            stripe
            border
            height="460"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column
                prop="name"
                label="Ім'я"
                width="240">
            </el-table-column>
            <el-table-column
                prop="surname"
                label="Прізвище"
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

        <!-- Dialog window -->
        <el-dialog 
            v-if="currentItem"
            title="Інформація про вибраного водія"
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
                        <span class="fieldValue">{{ currentItem.name }}</span>
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
                        <span class="fieldValue">{{currentItem.surname}}</span>
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

            <el-row class="closeDialogWrapper">
                <el-button @click="closeDialog">Закрити</el-button>
            </el-row>
        </el-dialog>  
    </el-row>
</template>

<script>
export default {
    name: 'e-drivers-list',
    data(){
        return {
            currentRow: null,
        }
    },
    computed: {
        drivers(){
            return this.$store.state.drivers.list;
        },
        counter(){
            return this.$store.state.drivers.count;
        },
        currentItem() {
            return this.$store.state.drivers.currentItem;
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
            this.$store.dispatch('drivers/removeRowItem', index);
        },
        showDialogWindow(index){
            this.$store.commit('drivers/CURRENT_DRIVER_ITEM', index)
        },
        closeDialog(){
            this.$store.commit('drivers/CURRENT_DRIVER_ITEM', null)
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