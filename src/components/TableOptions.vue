<template>
    <div class="_fc_table_opt">
        <a-table
            :data-source="modelValue"
            :columns="column"
            :pagination="false"
            border
            size="small"
            style="width: 100%">
            <template #bodyCell="{record, index, column}">
                <template v-if="['label', 'value'].includes(column.dataIndex)">
                    <a-form-item-rest><a-input v-model:value="record[column['dataIndex']]" style="margin: -5px 0" @change="onInput(record)" /></a-form-item-rest>
                </template>
                <template v-else-if="column.dataIndex === 'operation'">
                    <i class="fc-icon icon-delete" @click="del(index)"></i>
                </template>
            </template>
            <!-- <template v-for="(col,idx) in column" :key="col.label + idx">
                <el-table-column :label="col.label">
                    <template #default="scope">
                        <el-input size="small" :modelValue="scope.row[col.key] || ''"
                                  @onUpdate:modelValue="(n)=>(scope.row[col.key] = n, onInput(scope.row))"></el-input>
                    </template>
                </el-table-column>
            </template> -->
            <!-- <a-table-column min-width="35" align="center" fixed="right" label="操作">

                <template #default="scope">
                    
                </template>
            </a-table-column> -->
        </a-table>
        <a-button link type="primary" @click="add">
            <i class="fc-icon icon-add"></i> 添加
        </a-button>
    </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'TableOptions',
    inheritAttrs: false,
    props: {
        modelValue: [Object, Array, String]
    },
    data() {
        return {
            //column: [{label: 'label', key: 'label'}, {label: 'value', key: 'value'}]
            column : [
                {
                    title: 'label',
                    dataIndex: 'label',
                    width: '40%',
                },
                {
                    title: 'value',
                    dataIndex: 'value',
                    width: '40%',
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                },
            ]
        };
    },
    created() {
        if (!Array.isArray(this.modelValue)) {
            this.$emit('input', []);
        }
    },
    methods: {
        onInput(item) {
            if (item.label && item.value) {
                this.input();
            }
        },
        input() {
            this.$emit('update:modelValue', this.modelValue);
        },
        add() {
            console.log(this.modelValue);
            this.modelValue.push(this.column.reduce((initial, v) => {
                initial[v.dataIndex] = '';
                return initial;
            }, {}));
        },
        del(idx) {
            this.modelValue.splice(idx, 1);
            this.input(this.modelValue);
        }
    }
});
</script>

<style scoped>
._fc_table_opt {
    width: 100%;
}
</style>
