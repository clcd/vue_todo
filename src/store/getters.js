export default {

  // 总数量
  totalSize (state) {
    return state.todos.length
  },
  // 完成的数量
  doneCount (state) {
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.done?1:0) ,0)
  },
}