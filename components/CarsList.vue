<template>
    <el-row>
        <h1>Список автомобілів</h1>
        <el-table
            ref="singleTable"
            :data="cars"
            stripe
            border
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
                        @click="handleEdit(scope.$index, scope.row)">Переглянути</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">Видалити</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-row>
</template>

<script>
export default {
    name: 'e-cars-list',
    data(){
        return {
            currentRow: null
        }
    },
    computed: {
        cars(){
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
      }
    }
}
</script>
