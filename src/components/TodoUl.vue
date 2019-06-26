<template>
  <ul class="wrap-todo" >
    <TodoLi v-for="(todo, index) in arryFilter" :key="index"
              :todo="todo" :index="index"/>
    <FooterBar :isTypeTask = "isTypeTask" :arryFilter = "arryFilter"/>          
  </ul>
</template>
<script>
import {mapState} from 'vuex'
import TodoLi from './TodoLi.vue'
import FooterBar from './FooterBar.vue'
import storageUtils from '../utils/storageUtils'
export default {
  props: ["isTypeTask"],
  computed: {
    ...mapState(['todos']),
    arryFilter(){
      if(this.isTypeTask ==1){
        return this.todos
      }
      if(this.isTypeTask ==2){
        return this.todos.filter(item => {return !item.done})
      }
      if(this.isTypeTask ==3){
        return this.todos.filter(item => {return item.done})
      }
    }

  },
  components: {
    TodoLi,
    FooterBar
  },
    watch: {
    todos: {
      deep: true,
      handler: storageUtils.saveTodos,
    }
  },

}
</script>
<style scoped>

ul {
  
  list-style-type: none
}
</style>
