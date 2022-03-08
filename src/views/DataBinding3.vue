<template>
  <div class="container" v-bind:class="{'active':isActive, 'text-red':isRed}">
    Class Binding
  </div>
  <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
</template>

<script>
export default {
  name: 'BasicView',
  components:{},
  data(){
    return{
      isActive:true,
      isRed:true,
      styleObject:{
        backgroundColor:'green',
        color:'yellow',
        fontWeight:'bold',
      },
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
.container{
  width: 100%;
  height: 200px;
}
.active {
  background-color: yellow;
  font-weight: bold;
}
.text-red{
  color: red;
}
</style>