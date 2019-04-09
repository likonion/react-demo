// 1. 引入 actionTypes
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, TOGGLE_TODO_ITEM, EDIT_TODO_ITEM } from './actionTypes'

// 2. 导出相应 action
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getItemDeleteAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const getItemToggleAction = (index) => ({
  type: TOGGLE_TODO_ITEM,
  index
})

export const getItemEditAction = (index, event) => ({
  type: EDIT_TODO_ITEM,
  index, event
})