import {ADD_TODO, DELETE_TODO, DELETEALL_TYPE} from './mutation-types'
export default {

  addTodo ({commit}, todo) {
    // 提交一个comutation请求
    commit(ADD_TODO, {todo}) // 传递给mutation的是一个包含数据的对象
  },
  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },
  deleteAllType ({commit}, typearry) {
    commit(DELETEALL_TYPE, {typearry})
  }
}