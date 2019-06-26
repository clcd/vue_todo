<template>
  <div>
    <h1 v-if="arryFilter.length==0">{{Meaage}}</h1>
    <div class="wrap" v-else>
      <button class="btn btn-danger" @click="delteAll">{{btnMessage}}</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["isTypeTask", "arryFilter"],
  methods: {
    delteAll() {
      const newarry = []
      for(let i = 0; i<this.arryFilter.length; i++){
        newarry.push(this.arryFilter[i])
       }
      //console.log(newarry)
      //console.log(this.arryFilter)
      
      this.$store.dispatch("deleteAllType", newarry)
    }
  },
  computed: {
    ...mapGetters(["totalSize", "doneCount"]),
    Meaage(){
      if(this.isTypeTask ==2 && this.totalSize>0){
        return "任务都完成了,快去添加新任务吧"
      }else
      if(this.isTypeTask ==3 && this.totalSize>0){
        return "您还没有完成的任务哦,快去完成任务吧"
      }else{
        return "您还没有任务哦,去添加任务吧"
      }     
    },
    btnMessage(){
      if(this.isTypeTask == 1){
        return "删除全部"
      }else if(this.isTypeTask == 2){
        return "删除未完成"
      }else{
        return "删除完成"
      }
    },
    arryF() {
      return this.arryFilter
    }
  }
};
</script>
<style scoped>
h1 {
  font-weight: 500;
  text-align: center;
}
.wrap{
  height: 40px;
  line-height: 40px;
  padding: 5px 10px 5px 0;
}

</style>
