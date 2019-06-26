import {ADD_TODO, DELETE_TODO, DELETEALL_TYPE} from './mutation-types'
export default {
  [ADD_TODO] (state, {todo}) {
    state.todos.push(todo)
  },
  [DELETE_TODO] (state, {index}) {
    state.todos.forEach((todo, i) =>{
      if(todo.time == index){
        state.todos.splice(i,1)
      }
    })
  },
  [DELETEALL_TYPE] (state, {typearry}) {
    for(let i = 0; i<typearry.length; i++){
      state.todos.forEach((todo, index) =>{
        if(todo.time == typearry[i].time){
          state.todos.splice(index,1)
        }
      })
    }
  },
}