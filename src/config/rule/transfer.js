import uniqueId from '@form-create/utils/lib/unique';

const label = '穿梭框';
const name = 'a-transfer';

const generateData = _ => {
    const data = [];
    for (let i = 1; i <= 15; i++) {
        data.push({
            key: i.toString(),
            title: `备选项 ${i}`,
            description: `description of content${i + 1}`,
            disabled: i % 4 === 0
        });
    }
    return data;
};

export default {
    icon: 'icon-transfer',
    label,
    name,
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            info: '',
            props: {
                dataSource: generateData(),
                locale:{itemUnit: '项', itemsUnit: '项', notFoundContent: '列表为空', searchPlaceholder: '请输入搜索内容'},
            },
        };
    },
    props() {
        return [
            {
                type: 'Struct',
                field: 'dataSource',
                title: 'Transfer 的数据源',
                props: {defaultValue: []}
            },
            {type: 'switch', field: 'disabled', title: '是否禁用'},
            {type: 'switch', field: 'showSearch', title: '是否显示搜索'},
            {type: 'switch', field: 'oneWay', title: '是否展示为单向样式'},
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