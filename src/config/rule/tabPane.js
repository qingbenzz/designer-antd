const label = '标签页';
const name = 'tab-pane';

export default {
    label,
    name,
    inside: true,
    drag: true,
    dragBtn: false,
    mask: false,
    rule() {
        return {
            type: 'a-tab-pane',
            props: {tab: '新标签页'},
            children: []
        };
    },
    props() {
        return [
            {type: 'input', field: 'tab', title: '选项卡标题',value:'新标签页'},
            {
                type: 'switch',
                field: 'forceRender',
                title: '被隐藏时是否渲染 DOM 结构'
            }];
    }
};
