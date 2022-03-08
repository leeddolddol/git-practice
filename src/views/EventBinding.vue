<template>
  <div>
    <button type="button" @click="increaseCounter">Add 1</button>
    <p>The count is : {{counter}}</p>
    <br/>
    <select v-model="city" @change="changeSelect">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="제주">제주</option>
    </select>
    <br/>
    <input type="text" v-model="textValue" @keyup.enter="showValue"/>
  </div>
</template>

<script>
export default {
  name: 'EventBinding',
  components:{},
  data(){
    return{
      counter: 0,
      city: "",
      textValue:""
    };
  },
  setup(){},
  created(){},
  mounted(){},
  unmounted(){},
  methods: {
    increaseCounter(){
      this.counter +=1;
    },
    changeSelect(){
      alert(this.city);
    },
    showValue(){
      alert(this.textValue);
    }
  }
}
</script>

<style scoped>

</style>