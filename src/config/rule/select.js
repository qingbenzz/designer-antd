import uniqueId from '@form-create/utils/lib/unique';
import {makeOptionsRule, makeRequiredRule} from '../../utils/index';

const label = '选择器';
const name = 'select';

export default {
    icon: 'icon-select',
    label,
    name,
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            info: '',
            effect: {
                fetch: ''
            },
            props: {
                allowClear:true,
            },
            options: [
                {value: '1', label: '选项1'},
                {value: '2', label: '选项2'},
            ],
        };
    },
    props() {
        return [
            makeRequiredRule(),
            makeOptionsRule('options'),
            {type: 'select', field: 'mode', title: '多选或标签',options:[
                {value: 'combobox', label: 'combobox'},
                {value: 'multiple', label: 'multiple'},
                {value: 'tags', label: 'tags'},
            ]},
            {type: 'switch', field: 'disabled', title: '是否禁用'},
            {type: 'switch', field: 'allowClear', title: '是否展示移除图标',value:'true'},
            {type:'object', field:'formCreatewrap',title: '',value:{labelCol:{span:8}},
                props:{
                    rule: [
                        {type:'object', field:'labelCol',title: '标签宽度',value:{span:8},
                            props:{
                                rule: [
                                    {type:'slider', field:'span',title:'',value:8,props:{max:24}},
                                ]
                            },
                            wrap:{
                                labelCol: {span: 24},
                                wrapperCol: {span: 24},
                            },
                        }
                    ]
                }
            },
            {
                type: 'input',
                field: 'formCreateon>change',
                title: 'change函数',
                info: `数据改变事件:
                当前字段值：fApi.self.value
                隐藏：fApi.api.hidden(true,'fld')
                禁用：fApi.api.disabled(true,'fld')`,
                value: `function (fApi) {
                            console.log(fApi.self.value)
                        }`,
                props: {
                    type: 'textarea',
                    rows: 8,
                },
                validate: [
                    {
                        validator: (_, v, cb) => {
                            if (!v) return cb();
                            try {
                                eval(`(function () {
                                        return ${v}
                                    })()`);
                            } catch (e) {
                                return cb(false);
                            }
                            return Promise.resolve();
                        },
                        message: '请输入正确的解析函数',
                    },
                ],
            },
        ]
    }
};
