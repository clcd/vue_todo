<template>
  <div class="container">
    <div class="wrap-todo">
      <h1 class='title'>todo list</h1>
      <HeaderButton @isTypeTask = "isType"/>
      <AddTo />
      <TodoUl :isTypeTask = "isTypeTask"/>
    </div>
    
    
  </div>
</template>
<script>
import HeaderButton from './components/HeaderButton.vue'
import AddTo from './components/AddTo.vue'
import TodoUl from './components/TodoUl.vue'

export default {
  data() {
    return {
      isTypeTask: 1
    }   
  },
  methods: {
    isType(data){
      this.isTypeTask= data
    }
  },
  components: {
    HeaderButton,
    AddTo,
    TodoUl
  }
}
</script>
<style scoped>
.container {
  width: 600px;
  margin: 0 auto;
  border: 1px solid black;
  padding: 10px 20px;
}

.title {
  text-align: center
}
</style>
