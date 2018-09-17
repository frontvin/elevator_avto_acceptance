<template>
    <el-row>
        <h1>Список реєстрацій</h1>
        <el-table
            ref="singleTable"
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
                {{ registrations.drivername }}
            </el-table-column>
            <el-table-column
                property="driversurname"
                label="Прізвище"
                width="120">
                {{registrations.driversurname}}
            </el-table-column>
            <el-table-column
                property="carnumber"
                label="Номер автомобіля">
                {{registrations.carnumber}}
            </el-table-column>
            <el-table-column
                property="regdate"
                label="Дата реєстрації">
                {{registrations.regdate}}
            </el-table-column>
            <el-table-column
                property="cargo"
                label="Вантаж">
                {{registrations.cargo}}
            </el-table-column>
            <el-table-column
                property="weight"
                label="Вага">
                {{registrations.weight}}
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
            return this.$store.state.registrations;
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
