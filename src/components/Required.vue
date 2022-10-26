<template>
    <div class="_fc-required">
        <a-form-item-rest><a-switch v-model:checked="required"></a-switch></a-form-item-rest>
        <a-input v-model:value="requiredMsg" v-if="required" placeholder="请输入提示语"></a-input>
    </div>
</template>

<script>
import is from '@form-create/utils/lib/type';
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'Required',
    props: {
        modelValue: {}
    },
    watch: {
        required() {
            this.update();
        },
        requiredMsg() {
            this.update();
        },
        modelValue(n) {
            const flag = is.String(n);
            this.required = n === undefined ? false : (flag ? true : !!n);
            this.requiredMsg = flag ? n : '请输入内容';
        },
    },
    data() {
        const flag = is.String(this.modelValue);
        return {
            required: this.modelValue === undefined ? false : (flag ? true : !!this.modelValue),
            requiredMsg: flag ? this.modelValue : '请输入内容'
        };
    },
    methods: {
        update() {
            let val;
            if (this.required === false) {
                val = false;
            } else {
                val = this.requiredMsg;
            }
            this.$emit('update:modelValue', val);
        },
    }
});
</script>

<style>
._fc-required {
    display: flex;
    align-items: center;
}

._fc-required .ant-input {
    margin-left: 15px;
}
</style>
