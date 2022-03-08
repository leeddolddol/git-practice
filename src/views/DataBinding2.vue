<template>
  <div>
    <img v-bind:src="url" style="height:200px;width:auto"/><br/>
    <input type="text" v-model="textValue" />
    <button type="button" v-bind:disabled="textValue==''">Click</button>
    <!--텍스트가 입력이 되지 않으면 버튼 비활성화-->
  </div>
</template>

<script>
export default {
  name: 'BasicView',
  components:{},
  data(){
    return{
      url: 'https://kr.vuejs.org/images/logo.png',
      textValue: '',
    };
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