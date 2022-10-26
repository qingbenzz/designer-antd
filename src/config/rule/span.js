const label = '文字';
const name = 'span';

export default {
    icon: 'icon-span',
    label,
    name,
    rule() {
        return {
            type: name,
            title: '文字',
            native: false,
            children: ['这是一段文字'],
        };
    },
    props() {
        return [
            {
                type: 'input',
                field: 'formCreateTitle',
                title: 'title',
            },
            {
                type: 'input',
                field: 'formCreateChild',
                title: '内容',
                props: {
                    type: 'textarea'
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