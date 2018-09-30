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
                        @click="dialogTableVisible = true">Переглянути</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        icon="el-icon-delete"
                        ></el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- Dialog window  -->
        <el-dialog title="Інформація про автомобіль" :visible.sync="dialogTableVisible">
            <el-table :data="currentCar">
                <el-table-column prop="brand" label="Марка автомобіля"></el-table-column>
                <el-table-column prop="model" label="Модель автомобіля"></el-table-column>
                <el-table-column prop="number" label="Номер автомобіля"></el-table-column>
                <el-table-column prop="color" label="Колір автомобіля"></el-table-column>
            </el-table>
        </el-dialog>
    </el-row>
</template>

<script>
export default {
    name: 'e-cars-list',
    data(){
        return {
            currentRow: null,
            dialogTableVisible: false
        }
    },
    computed: {
        cars(){
            return this.$store.state.cars.list;
        },
        currentCar(){
            // need fix it
            return this.$store.state.cars.list;
        },
        counter(){
            return this.$store.state.cars.count;
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
        }
    }
}
</script>