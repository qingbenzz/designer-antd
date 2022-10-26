const label = '提示';
const name = 'a-alert';

export default {
    icon: 'icon-alert',
    label,
    name,
    rule() {
        return {
            type: name,
            props: {
                showIcon:true,
                closable:false,
                message:'',
                type:'info'
            },
            native: true,
            style:'margin: 10px 0px;width:100%;',
            children: []
        };
    },
    props() {
        return [
            {
                type: 'select',
                field: 'type',
                title: '主题',
                value:'info',
                options: [
                    {label: 'success', value: 'success'}, 
                    {label: 'warning', value: 'warning'}, 
                    {label: 'info', value: 'info'}, 
                    {label: 'error', value: 'error'}, 
                ]
            },
            {type: 'switch', field: 'closable', title: '是否显示关闭按钮'},
            {type: 'switch', field: 'showIcon', title: '是否显示图标'},
            {type: 'input', field: 'message', title: '提示内容'},
            {type: 'input', field: 'description', title: '描述'},
        ];
    }
};