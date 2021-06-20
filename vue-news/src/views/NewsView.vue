<template>
  <div>
    <!-- Vue 2.20부터 v-for을 사용 시 key(기본키생각하면 됨)로 사용되는 항목을 명시해줘야함 -->
    <div v-for="(user, id) in users" v-bind:key="id">
      {{ user.id }}
      {{ user.title }}
    </div>
  </div>
</template>

<script>
/**
 * 통신쪽 관련된 API
 */
import axios from 'axios';

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

    axios.get('https://api.hnpwa.com/v0/news/1.json')
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