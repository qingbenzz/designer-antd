import uniqueId from '@form-create/utils/lib/unique';
import {makeRequiredRule} from '../../utils';

const label = '开关';
const name = 'switch';

export default {
    icon: 'icon-switch',
    label,
    name,
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            info: '',
            props: {
                disabled:false,
                checkedValue:'Y',
                unCheckedValue:'N',
            },
        };
    },
    props() {
        return [makeRequiredRule(), 
            {type: 'switch', field: 'disabled', title: '是否禁用'},
            {type:'input', field:'unCheckedChildren',title: '非选中时的内容',value:''},
            {type:'input', field:'unCheckedValue',title: '非选中时的值',value:'N'},
            {type:'input', field:'checkedChildren',title: '选中时的内容',value:''},
            {type:'input', field:'checkedValue',title: '选中时的值',value:'Y'},
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
