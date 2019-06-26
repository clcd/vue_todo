<template>
  <div class="wrap-button">
    <div class="btn" :class="{active: isActive===1?true:false}" @click="typeBar(1)">全部{{totalSize |
      nozero}}</div>
    <div class="btn" :class="{active: isActive===2?true:false}" @click="typeBar(2)">未完成{{(totalSize-doneCount) |
      nozero}}
    </div>
    <div class="btn" :class="{active: isActive===3?true:false}" @click="typeBar(3)">完成{{doneCount | nozero}}</div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      isActive: 1, //1.全部,2.未完成,3.完成
    }
  },
  filters: {
    nozero: function(data){
      if(data ==0){
        return ""
      }
      return data
    }
  },
  computed: {
    ...mapGetters(['totalSize', 'doneCount'])
  },
  methods: {
    typeBar(isActive){
      this.isActive = isActive
      this.$emit('isTypeTask',isActive)
    }
  }
};
</script>
<style scoped>
.wrap-button {
  margin-top: 10px;
}
</style>
