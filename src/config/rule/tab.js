const label = '标签页';
const name = 'tab';

export default {
    icon: 'icon-tab',
    label,
    name,
    children: 'tab-pane',
    mask: false,
    rule() {
        return {
            type: 'a-tabs',
            style:'width:100%;',
            props: {
                type:'line',
            },
            children: []
        };
    },
    props() {
        return [{
            type: 'select',
            field: 'type',
            title: '风格类型',
            options: [{
                label: 'line',
                value: 'line'
            }, {label: 'card', value: 'card'}]
        }, 
       
        {
            type: 'select',
            field: 'tabPosition',
            title: '选项卡所在位置',
            options: [{label: 'top', value: 'top'}, {label: 'right', value: 'right'}, {
                label: 'left',
                value: 'left'
            }, {label: 'bottom', value: 'bottom'}]
        }, {type: 'switch', field: 'destroyInactiveTabPane', title: '被隐藏时是否销毁 DOM 结构'}];
    }
};
