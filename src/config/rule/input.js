import uniqueId from '@form-create/utils/lib/unique';
import {makeRequiredRule} from '../../utils';

const label = '输入框';
const name = 'input';

export default {
    icon: 'icon-input',
    label,
    name,
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            info: '',
            props: {
                prefix:'',
                suffix:'',
                maxlength:200,
                allowClear:true,
                disabled:false,
                placeholder:'',
                type:'text',
                
            },
            // wrap:{
            //     labelCol: {span: 8},
            //     wrapperCol: {span: 16},
            // }
            
        };
    },
    props() {
        return [makeRequiredRule(), 
            {
                type: 'inputNumber',
                field: 'maxlength',
                value: '200',
                title: '最大长度',
            },
            {type: 'switch', field: 'showCount', title: '是否展示字数'},
            {type: 'switch', field: 'allowClear', title: '是否展示移除图标',value:true},
            {type: 'switch', field: 'disabled', title: '是否禁用'},
            {
                type: 'input',
                field: 'placeholder',
                value: '',
                title: '输入框占位文本',
            },
            {
                type: 'input',
                field: 'prefix',
                title: '前缀',
            },
            {
                type: 'input',
                field: 'suffix',
                title: '后缀',
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
