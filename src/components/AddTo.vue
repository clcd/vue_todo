<template>
  <div class="wrap-add">
    <input type="text" placeholder="Add Task Hit Enter" v-model="inputTodo" @keyup.enter="add">
  </div>
</template>
<script>
export default {
    data() {
      return {
        inputTodo: ""
      }
    },
    methods: {
      add () {
        // 得到输入的数据
        const inputTodo = this.inputTodo.trim()
        // 检查合法性
        if(!inputTodo) {
          alert('必须输入')
          return
        }
       
        // 封装一个todo对象
        const todo = {
          time: new Date().getTime(),
          title: inputTodo,
          done: false
        }
        // 添加到todos中显示
        // this.addTodo(todo)
        this.$store.dispatch('addTodo', todo)
        // 清除输入
        this.inputTodo = ''
      }
    }
}
</script>
<style scoped>
.wrap-add {
  margin: 20px 0;
  width: 100%;
  overflow: hidden;
}
input {
  width: 100%;
  height: 35px;
  border-width: 1px;
  border-color: rgba(35, 146, 111, .4);
  padding: 0 8px;
  box-sizing: border-box;
}
</style>
