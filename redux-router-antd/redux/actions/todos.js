import * as types from '../constants/ActionTypes'

/*
  操作类，派发出什么指定
  type：表示指令的类型
  后面的是参数
 */
let todos = {
  addTodo(text) {
      console.debug('addTodo', text)
      return {
        type: types.ADD_TODO,
        text
      }
    },
    deleteTodo(id) {
      console.debug('deleteTodo', id)
      return {
        type: types.DELETE_TODO,
        id
      }
    },
    editTodo(id, text) {
      console.debug('editTodo', id, text)
      return {
        type: types.EDIT_TODO,
        id,
        text
      }
    },
    completeTodo(id) {
      console.debug('completeTodo', id)
      return {
        type: types.COMPLETE_TODO,
        id
      }
    },
    completeAll() {
      console.debug('completeAll')
      return {
        type: types.COMPLETE_ALL
      }
    },
    clearCompleted() {
      console.debug('clearCompleted')
      return {
        type: types.CLEAR_COMPLETED
      }
    }
}

export default todos
