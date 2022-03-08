<template>
  <div>
    <input type="text" v-model="name"/>
    <input type="text" v-model.number="age"/>
    <input type="text" v-model="job"/>
    <button type="button" @click="saveUserInfo">저장</button>
  </div>
</template>

<script>
export default {
  name: 'BasicExerciseSave',
  components:{},
  data(){
    return{
      name: '',
      age: 0,
      job: ''
    };
  },
  setup(){},
  created(){},
  mounted(){},
  unmounted(){},
  methods: {
    saveUserInfo(){
      if(this.name==''){
        return this.$swal('사용자 이름을 입력하세요.');
      }
      if(this.age==0||this.age==''){
        return alert("나이를 입력하세요.");
      }
      const params = {
        name : this.name,
        age: this.age,
        job: this.job
      }

      const r = this.saveData(params);
      if(r=='S') {
        alert('사용자 정보가 생성되었습니다.');
      }
    },
    saveData(params){
      console.log(params);
      const r = 'S';
      return r;
    }
  }
}
</script>

<style scoped>

</style>