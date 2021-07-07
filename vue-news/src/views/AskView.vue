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
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      askArray: state => state.askArray,
    })
    // askArray() {
    //   return this.$store.state.askArray;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style scoped>

</style>