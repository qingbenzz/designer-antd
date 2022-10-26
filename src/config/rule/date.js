import uniqueId from '@form-create/utils/lib/unique';
import {makeRequiredRule} from '../../utils';

const label = '日期选择器';
const name = 'datePicker';

export default {
    icon: 'icon-date',
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
                picker:'date',
            },
        };
    },
    props() {
        return [makeRequiredRule(), 
            {type: 'switch', field: 'disabled', title: '是否禁用'},
            {type: 'switch', field: 'allowClear', title: '是否展示移除图标', value:true},
            {type: 'switch', field: 'showTime', title: '是否显示时分秒'},
            //{type:'input', field:'format',title: '展示的时间格式',info:'YYYY-MM-DD'},
            {type:'select', field:'picker',title: '选择器类型',value:'date',options:[
                {value: 'date', label: '日期'},
                {value: 'week', label: '周'},
                {value: 'month', label: '月'},
                {value: 'quarter', label: '季度'},
                {value: 'year', label: '年'},
            ]},
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
