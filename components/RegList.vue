<template>
    <el-row>
        <h1>Список реєстрацій</h1>
        <el-table
            ref="singleTable"
            :data="tableData"
            stripe
            border
            height="500"
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
                width="120">
            </el-table-column>
            <el-table-column
                property="driversurname"
                label="Прізвище"
                width="120">
            </el-table-column>
            <el-table-column
                property="carnumber"
                label="Номер автомобіля">
            </el-table-column>
            <el-table-column
                property="regdate"
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
            tableData: [
                {
                    drivername: 'Іван',
                    driversurname: 'Іванов',
                    carnumber: 'АВ5084ВІ',
                    regdate: '2016-05-02',
                    cargo: 'Пшениця',
                    weight: 8500
                }, 
                {
                    drivername: 'Петро',
                    driversurname: 'Петров',
                    carnumber: 'АВ7584ВІ',
                    regdate: '2016-06-02',
                    cargo: 'Пшениця',
                    weight: 10000
                }
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

<style>

</style>
