import uniqueId from '@form-create/utils/lib/unique';
import {makeRequiredRule} from '../../utils';

const label = '文本域';
const name = 'textarea';

export default {
    icon: 'icon-input',
    label,
    name,
    rule() {
        return {
            type: 'input',
            field: uniqueId(),
            title: label,
            info: '',
            props: {
                maxlength:2000,
                allowClear:true,
                disabled:false,
                showCount:true,
                placeholder:'',
                autoSize:{minRows:4},
                type:'textarea',
            },
        };
    },
    props() {
        return [makeRequiredRule(), 
            {
                type: 'inputNumber',
                field: 'maxlength',
                value: '2000',
                title: '最大长度',
            },
            {type: 'switch', field: 'showCount', title: '是否展示字数',value:true},
            {type: 'switch', field: 'allowClear', title: '是否展示移除图标',value:true},
            {type: 'switch', field: 'disabled', title: '是否禁用'},

            {
                type: 'input',
                field: 'placeholder',
                title: '输入框占位文本',
            },
            {type:'object', field:'autoSize',title: '默认行数',value:{span:6},
                props:{
                    rule: [
                        {type:'inputNumber', field:'minRows',title:'',value:4},
                    ]
                }
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
        ];
    }
};
