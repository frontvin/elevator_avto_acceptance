<template>
    <el-row>
        <h1>Список реєстрацій</h1>
        <p class='DriversList__counter'>Всього реєстрацій: {{counter}}</p>
        <el-table
            ref="singleTable"
            :data='registrations'
            stripe
            border
            height="460"
            highlight-current-row
            @current-change="handleCurrentChange"
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
                        @click="handleView(scope.$index, scope.row)">Переглянути</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        icon="el-icon-delete"
                        round
                        @click.native.prevent="deleteRow(scope.$index, registrations)"></el-button>
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
        },
        counter(){
            return this.$store.state.drivers.count;
        }
    },
    methods: {
        setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
        },
        handleCurrentChange(val) {
            this.currentRow = val;
        },
        handleView(){
            
        }
    }
}
</script>