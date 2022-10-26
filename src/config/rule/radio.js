import uniqueId from '@form-create/utils/lib/unique';
import {makeOptionsRule, makeRequiredRule} from '../../utils/index';

const label = '单选框';
const name = 'radio';

export default {
    icon: 'icon-radio',
    label,
    name,
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            optionType:'default',
            info: '',
            effect: {
                fetch: ''
            },
            props: {},
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
            {type: 'switch', field: 'disabled', title: '是否禁用'}, 
            {
                type: 'select',
                field: 'optionType',
                title: '按钮形式',
                value:'default',
                options: [
                    {value: 'default', label: 'default'},
                    {value: 'button', label: 'button'},
                ]
            }, 
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
        ];
    }
};
