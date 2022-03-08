<template>
  <div>
    <select v-model="selectedCity">
      <option :value="city.code" :key="i" v-for="(city, i) in cityList">{{city.name}}</option>
    </select>
    <input type="text" v-model="userName" @keyup.enter="searchUserList()"/>
    <button type="button" @click="searchUserList">조회</button>
  </div>
  <div>
    <table>
      <thead>
        <tr>
          <th>이름</th><th>나이</th><th>직업</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(person, i) in userList">
          <td>{{person.name}}</td>
          <td>{{person.age}}</td>
          <td>{{person.job}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BasicExerciseSearch',
  components:{},
  data(){
    return{
      cityList:[
        {name : '서울', code: '02'},
        {name : '부산', code: '21'},
        {name : '제주', code: '064'},
      ],
      selectedCity:'',
      userName:'',
      userList:[]
    };
  },
  setup(){},
  created(){},
  mounted(){},
  unmounted(){},
  methods: {
    searchUserList(){
      const params = {
        selectedCity : this.selectedCity,
        userName: this.userName,

      }
      this.userList = this.getUserList(params);
    },
    getUserList(params){
      console.log(params);

      let list = [
        {name:'이원빈', age:35, job:'개발자'},
        {name:'김소진', age:31, job:'금융수신'},
        {name:'정이든', age:34, job:'금융여신'},
        {name:'이효진', age:30, job:'카드판매'}
      ];
      return list;
    },
  }
}
</script>

<style scoped>

</style>