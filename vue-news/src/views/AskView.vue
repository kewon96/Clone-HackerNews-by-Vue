<template>
  <div>
    <!-- Vue 2.20부터 v-for을 사용 시 key(기본키생각하면 됨)로 사용되는 항목을 명시해줘야함 -->
    <div v-for="(ask, id) in askArray" v-bind:key="id">
      {{ ask.id }}
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { fetchList } from '../api/index';

export default {
  data() {
    return  {
      askArray: []
    }
  },
  created() {
    fetchList('ask/1.json')
        .then(response => {
          this.askArray = response.data;
        })
        .catch(e => {
          console.log(e)
        });
  }
}
</script>

<style scoped>

</style>