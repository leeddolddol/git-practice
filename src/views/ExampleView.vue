<template>
  <div>
    <PageTitle title="부모컴포넌트에서 전송한 페이지 타이틀"/>
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle';
export default {
  name: 'ExampleView',
  components:{PageTitle},
  data(){
    return{
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