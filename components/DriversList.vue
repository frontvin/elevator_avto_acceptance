<template>
    <el-row>
        <h1>Список водіїв</h1>
        <el-table
            ref="singleTable"
            :data="tableData"
            stripe
            border
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column
                type="index"
                width="50">
            </el-table-column>
            <el-table-column
                property="drivername"
                label="Ім'я"
                width="240">
            </el-table-column>
            <el-table-column
                property="driversurname"
                label="Прізвище"
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
    data(){
        return {
            tableData: [
                
            ],
            currentRow: null
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
