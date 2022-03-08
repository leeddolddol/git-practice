<template>
  <input type="text" v-model="firstName"/>
  <input type="text" v-model="lastName" />
  <h1>hello, {{fullName}}</h1>
  <input type="text" v-model.number="x1"/>
  <input type="text" v-model.number="x2"/>
  <br/>
  watch 방식 직접 감시
  <input type="text" v-model="y"/>
  <br/>
  computed 방식의 감시
  <input type="text" v-model="z"/>
</template>

<script>
export default {
  name: 'ComputedAndWatch',
  components:{},
  data(){
    return{
      firstName : "이",
      lastName : "원빈",
      x1 : 0,
      x2 : 0,
      y : 0
    };
  },
  computed :{
    fullName(){
      return this.firstName + this.lastName;
    },
    z(){
      return this.x1 + this.x2;
    }
  },
  watch : {
    x1(){
      this.y = this.x1 + this.x2;
    },
    x2(){
      this.y = this.x1 + this.x2;
    }
  },
  setup(){},
  created(){},
  mounted(){},
  unmounted(){},
  methods: {}
}
</script>

<style scoped>

</style>