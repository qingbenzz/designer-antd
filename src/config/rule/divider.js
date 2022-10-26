const label = '分割线';
const name = 'a-divider';

export default {
    icon: 'icon-divider',
    label,
    name,
    rule() {
        return {
            type: name,
            props: {
                orientation:'left',
            },
            style:'width:100%',
            children: [''],
        };
    },
    props() {
        return [
            {
                type: 'input',
                field: 'formCreatechild',
                title: '设置分割线标题',
            },
            {
                type: 'select',
                field: 'orientation',
                title: '分割线标题位置',
                value:'left',
                options: [{label: 'left', value: 'left'}, {label: 'right', value: 'right'}, {label: 'center', value: 'center'}]
            },
        ];
    }
};