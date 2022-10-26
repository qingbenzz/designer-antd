export default function form() {
    return [
        {type: 'input', field: 'dataTable', title: '数据表名称'},
        {
            type: 'radio',
            field: 'labelAlign',
            value: 'right',
            title: '标签文本位置',
            options: [
                {value: 'left', label: 'left'},
                {value: 'right', label: 'right'},
            ],
        },
        {
            type: 'radio',
            field: 'layout',
            value: 'horizontal',
            title: '标签位置',
            options: [
                {value: 'horizontal', label: '水平排列'},
                {value: 'vertical', label: '垂直排列'},
            ],
        },
        {type:'object', field:'labelCol',title: '标签宽度',value:{span:6},
            props:{
                rule: [
                    {type:'slider', field:'span',title:'',value:6,props:{max:24}},
                ]
            }
        },
        {type:'object', field:'wrapperCol',title: '控件宽度',value:{span:18},
            props:{
                rule: [
                    {type:'slider', field:'span',title:'',value:18,props:{max:24}},
                ]
            }
        },
        // {
        //     type: 'radio',
        //     field: 'size',
        //     value: 'default',
        //     title: '表单尺寸',
        //     options: [
        //         {value: 'large', label: 'large'},
        //         {value: 'default', label: 'default'},
        //         {value: 'small', label: 'small'},
        //     ]
        // },
        {
            type: 'switch',
            field: 'colon',
            value: true,
            title: '是否显示标签后面的冒号',
        },
        {
            type: 'switch',
            field: 'title',
            value: true,
            title: '是否显示标签',
        },
        //  {
        //     type: 'input',
        //     field: 'labelWidth',
        //     value: '125px',
        //     title: '标签宽度',
        // }, {
        //     type: 'switch',
        //     field: 'hideRequiredAsterisk',
        //     value: false,
        //     title: '隐藏必填字段的标签旁边的红色星号',
        // }, {
        //     type: 'switch',
        //     field: 'showMessage',
        //     value: true,
        //     title: '显示校验错误信息',
        // }, {
        //     type: 'switch',
        //     field: 'inlineMessage',
        //     value: false,
        //     title: '以行内形式展示校验信息',
        // }, {
        //     type: 'switch',
        //     field: 'formCreateSubmitBtn',
        //     value: true,
        //     title: '是否显示表单提交按钮',
        // }, {
        //     type: 'switch',
        //     field: 'formCreateResetBtn',
        //     value: false,
        //     title: '是否显示表单重置按钮',
        // },
    ];
}
