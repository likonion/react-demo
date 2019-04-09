import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, TOGGLE_TODO_ITEM, EDIT_TODO_ITEM } from './actionTypes'
// 1. 我们定义一个数据 defaultState
const defaultState = {
    inputTxt: '',
    list: [
        {
            txt: "测试待办事项一",
            checked: false
        },
        {
            txt: "测试待办事项二",
            checked: false
        },
        {
            txt: "测试待办事项三",
            checked: true
        },
        {
            txt: "测试待办事项四",
            checked: true
        }
    ]
}

// 将数据 defaultState 最终以 state 形式导出去
export default (state = defaultState, action) => {
    // 打印 state 和 action
    // console.log(state);
    // console.log(action);

    // 在 reducer.js 中获取数据，并 return 回去处理结果
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputTxt = action.value;
        return newState;
    }

    // 5. 在 reducer.js 中获取数据，并 return 回去处理结果
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.unshift({
            txt: newState.inputTxt,
            checked: false
        });
        newState.inputTxt = '';
        return newState;
    }
    // 4. 在 reducer.js 中获取数据，并 return 回去处理结果
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === TOGGLE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list[action.index].checked = !newState.list[action.index].checked;
        return newState;
    }
    if (action.type === EDIT_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list[action.index].txt = action.event.target.value;
        return newState;
    }

    return state;
}
