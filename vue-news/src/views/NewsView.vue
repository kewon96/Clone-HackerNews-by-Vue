<template>
  <div>
    <div v-for="(user, id) in users" v-bind:key="id">
      {{ user.id }}
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { fetchList } from '../api/index';

export default {
  // 라우팅이라든지 데이터로직이 들어오는 방식은 좋지않음
  // 레벨이 깊어지거나 설계가 바뀔 때의 상황을 유연하게 대처하고 싶으면
  // 이런 로직을 별도의 컴포넌트로 등록시키는게 좋음
  data() {
    return  {
      users: []
    }
  },
  created() {
    let vm = this;

    fetchList('news/1.json')
    .then(response => {
      console.log(response);
      // 콜백자체가 Vue 컴포넌트를 바라보고있지 않음 => 밖에서 한번 연결해줘야함
      vm.users = response.data;
    })
    .catch(e => {
      console.log(e)
    })
  }
}
</script>

<style scoped>

</style>