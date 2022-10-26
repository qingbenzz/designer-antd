import uniqueId from '@form-create/utils/lib/unique';
import {makeRequiredRule} from '../../utils';

const label = '金额';

export default {
    icon: 'icon-number',
    label,
    name:'money',
    rule() {
        return {
            type: 'inputNumber',
            field: uniqueId(),
            title: label,
            style:'width:100%',
            info: '',
            props: {
                controls:false,
                precision:2,
                disabled:false,
                placeholder:'',
                formatter:(value)=> value.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                parser:(value)=> value.replace(/\$\s?|(,*)/g, '')
            },
        };
    },
    props() {
        return [
            makeRequiredRule(),
            {type: 'inputNumber', field: 'precision', title: '小数位数', value:2},
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
        ];
    }
};
