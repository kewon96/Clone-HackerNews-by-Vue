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
import { mapGetters } from 'vuex'

export default {
  computed: {
    // ...mapGetters({
    //   jobArray: 'jobArray' // 적용할 데이터: 'vuex'에서 지정한 이름(store)
    // }),
    ...mapGetters([
        'jobArray'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>

</style>