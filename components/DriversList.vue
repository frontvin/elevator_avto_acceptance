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
                prop="sertificate"
                label="Сертифікат"
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
                        icon="el-icon-delete"
                        @click="handleDelete(scope.$index, scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-row>
</template>

<script>
export default {
    name: 'e-drivers-list',

    data(){
        return {
            currentRow: null
        }
    },
    computed: {
        drivers(){
            return this.$store.state.drivers.list;
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
      }
    }
}
</script>

<style scoped>
    /* .DriversList__counter{
        font-size: 12px;
        color: grey;
    } */
</style>
