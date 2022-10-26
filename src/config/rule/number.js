import uniqueId from '@form-create/utils/lib/unique';
import {makeRequiredRule} from '../../utils';

const label = '数值';
const name = 'inputNumber';

export default {
    icon: 'icon-number',
    label,
    name,
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            style:'width:100%',
            info: '',
            props: {},

        };
    },
    props() {
        return [makeRequiredRule(), 
            {type: 'inputNumber', field: 'precision', title: '小数位数'},
            {type: 'inputNumber', field: 'max', title: '最大值'},
            {type: 'inputNumber', field: 'min', title: '最小值'},
            {type: 'switch', field: 'disabled', title: '是否禁用'},
            {type: 'switch', field: 'controls', title: '是否显示增减按钮'},
            {
                type: 'input',
                field: 'placeholder',
                title: '输入框占位文本',
            },
            {
                type: 'input',
                field: 'prefix',
                title: '前缀',
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
