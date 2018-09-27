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
                        @click="dialogTableVisible = true">Переглянути</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        icon="el-icon-delete"
                        round
                        @click.native.prevent="deleteRow(scope.$index, registrations)"></el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- Dialog window  -->
        <el-dialog title="Поточна реєстрація" :visible.sync="dialogTableVisible">
            <el-table :data="currentRegistration">
                <el-table-column prop="driverName" label="Ім'я"></el-table-column>
                <el-table-column prop="driverSurname" label="Прізвище"></el-table-column>
                <el-table-column prop="sertificate" label="Сертифікат"></el-table-column>
                <el-table-column prop="carBrand" label="Марка автомобіля"></el-table-column>
                <el-table-column prop="carModel" label="Модель автомобіля"></el-table-column>
                <el-table-column prop="carNumber" label="Номер автомобіля"></el-table-column>
                <el-table-column prop="carColor" label="Колір автомобіля"></el-table-column>
                <el-table-column prop="regDate" label="Дата реєстрації"></el-table-column>
                <el-table-column prop="cargo" label="Вантаж"></el-table-column>
                <el-table-column prop="weight" label="Вага"></el-table-column>
            </el-table>
        </el-dialog>
    </el-row>
</template>

<script>
export default {
    data(){
        return {
            dialogTableVisible: false
        }
    },
    computed: {
        registrations(){
            return this.$store.state.registers.list;
        },
        currentRegistration(){
            return this.$store.state.registers.list;
        },
        counter(){
            return this.$store.state.registers.count;
        }
    },
    methods: {
        deleteRow(index) {
            return this.$store.state.registers.list.splice(index, 1);
        }
    }
}
</script>