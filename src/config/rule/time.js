import uniqueId from '@form-create/utils/lib/unique';
import {makeRequiredRule} from '../../utils';

const label = '时间选择器';
const name = 'timePicker';

export default {
    icon: 'icon-time',
    label,
    name,
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            info: '',
            style:'width:100%',
            props: {
                allowClear:true,
                format:'HH:mm:ss',
            },
        };
    },
    props() {
        return [makeRequiredRule(), 
            {type: 'switch', field: 'disabled', title: '是否禁用'},
            {type: 'switch', field: 'allowClear', title: '是否展示移除图标', value:true},
            {type:'input', field:'format',title: '展示的时间格式',value:'HH:mm:ss'},
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
