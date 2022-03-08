<template>
  <div v-html="htmlString"></div><br/>
  <input type="text" v-model="valueModel"/><br/>
  <input type="number" v-model.number="valueModel2"/><br/>
  <div>{{valueModel3}}{{valueModel2}}</div>
  <textarea v-model="valueModel3"></textarea><br/>
  <select v-model="city">
    <option value="02">서울</option>
    <option value="21">부산</option>
    <option value="064">제주</option>
  </select>
  <label>
    <input type="checkbox" v-model="checked"/>{{checked}}
  </label>
  <br/>
  <lable><input type="checkbox" value="서울" v-model="checked2">서울</lable>
  <lable><input type="checkbox" value="부산" v-model="checked2">부산</lable>
  <lable><input type="checkbox" value="제주" v-model="checked2">제주</lable>
  <br/>
  <span>체크한 지역 : {{checked2}}</span>
  <br/>
  <label>
    <input type="radio" value="서울" v-model="picked"/>서울
  </label>
  <label>
    <input type="radio" value="부산" v-model="picked"/>부산
  </label>
  <label>
    <input type="radio" value="제주" v-model="picked"/>제주
  </label><br/>
  <span>선택한 지역 : {{picked}}</span>
</template>

<script>
export default {
  name: 'DataBinding',
  components:{},
  data(){
    return{
      htmlString: '<p style="color:red;">This is a red string.</p>',
      valueModel : 'South Korea hihi',
      valueModel2 : 12,
      valueModel3 : '안녕하세요',
      city: "21",
      checked: true,
      checked2:[],
      picked: ""
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