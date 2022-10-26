import uniqueId from '@form-create/utils/lib/unique';
import {makeRequiredRule} from '../../utils';

const label = '上传';
const name = 'upload';

export default {
    icon: 'icon-upload',
    label,
    name,
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            info: '',
            props: {
                action: '',
                listType:'picture-card',
                onSuccess(res, file) {
                    file.url = res.data.url;
                }
            },
        };
    },
    props() {
        return [makeRequiredRule(), 
            {type:'input', field:'accept',title: '上传的文件类型',info:'.doc, .docx, .xls, .xlsx, .ppt, .pptx'},
            {type:'input', field:'action',title: '上传的地址'},
            {type: 'switch', field: 'disabled', title: '是否禁用'},
            {
                type: 'select',
                field: 'listType',
                title: '上传列表样式',
                options: [
                    {label: '文本列表', value: 'text'},
                    {label: '图片列表', value: 'picture'},
                    {label: '图片框', value: 'picture-card'},
                ]
            },
            {type: 'inputNumber', field: 'maxCount', title: '限制上传数量'},
            {type: 'switch', field: 'multiple', title: '支持多选文件'},
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
