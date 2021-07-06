<template>
  <div>
    <!-- Vue 2.20부터 v-for을 사용 시 key(기본키생각하면 됨)로 사용되는 항목을 명시해줘야함 -->
    <div v-for="(job, id) in jobArray" v-bind:key="id">
      {{ job.id }}
      {{ job.title }}
    </div>
  </div>
</template>

<script>
import { fetchList } from '../api/api';

export default {
  data() {
    return  {
      jobArray: []
    }
  },
  created() {
    fetchList('jobs/1.json')
        .then(response => {
          // 콜백자체가 Vue 컴포넌트를 바라보고있지 않음 => 밖에서 한번 연결해줘야함
          this.jobArray = response.data;
        })
        .catch(e => {
          console.log(e)
        })
  }
}
</script>

<style scoped>

</style>