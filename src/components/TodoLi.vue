<template>
  <li
    :style="{background: bgColor}"
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
    :class="{lineThrough: todo.done}"
    @click="todo.done = !todo.done"
  >
    {{index+1}}. {{todo.title}} <span>({{todo.time | date-format}})</span>
    <button class="btn btn-danger" v-show="isShow" @click.stop="deleteItem">删除</button>
  </li>
</template>
<script>
export default {
  props: {
    todo: Object,
    index: Number
  },

  data() {
    return {
      bgColor: "white",
      isShow: false
    };
  },
  methods: {
    handleEnter(isEnter) {
      if (isEnter) {
        // 进入
        this.bgColor = "#F5F5F5";
        this.isShow = true;
      } else {
        // 离开
        this.bgColor = "#ffffff";
        this.isShow = false;
      }
    },
    deleteItem() {
      //console.log(this.todo.time)
      this.$store.dispatch("deleteTodo", this.todo.time);
    }
  }
};
</script>
<style scoped>
li {
  list-style: none;
  height: 40px;
  line-height: 40px;
  padding: 5px 10px 5px 0;
  overflow: hidden;
  cursor: pointer;
}
span {
  color: #BEBEBE;
  font-size: 14px;
}
.lineThrough{
  text-decoration: line-through;
  color: #BEBEBE;
}

</style>
