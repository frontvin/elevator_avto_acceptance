<template>
    <el-row>
        <h1>Список реєстрацій</h1>
        <el-table
            ref="singleTable"
            stripe
            border
            :data='registrations'
            height="480"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column
                property="driverName"
                label="Ім'я"
                width="120">
            </el-table-column>
            <el-table-column
                property="driverSurname"
                label="Прізвище"
                width="120">
            </el-table-column>
            <el-table-column
                property="carNumber"
                label="Номер автомобіля">
            </el-table-column>
            <el-table-column
                property="regDate"
                label="Дата реєстрації">
            </el-table-column>
            <el-table-column
                property="cargo"
                label="Вантаж">
            </el-table-column>
            <el-table-column
                property="weight"
                label="Вага">
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
                        icon="el-icon-delete"
                        round
                        @click="handleDelete(scope.$index, scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-row>
</template>

<script>
export default {
    data(){
        return {
            currentRow: null
        }
    },
    computed: {
        registrations(){
            return this.$store.state.registers.list;
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

<style>

</style>
