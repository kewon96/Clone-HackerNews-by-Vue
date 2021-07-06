<template>
  <div>
    <div v-for="(news, id) in this.$store.state.newsArray" v-bind:key="id">
      {{ news.id }}
      {{ news.title }}
    </div>
  </div>
</template>

<script>

export default {
  // 라우팅이라든지 데이터로직이 들어오는 방식은 좋지않음
  // 레벨이 깊어지거나 설계가 바뀔 때의 상황을 유연하게 대처하고 싶으면
  // 이런 로직을 별도의 컴포넌트로 등록시키는게 좋음
  data() {
    return  {
      newsArray: []
    }
  },
  created() {
    // fetchList('news/1.json')
    // .then(response => {
    //   // 콜백자체가 Vue 컴포넌트를 바라보고있지 않음 => 밖에서 한번 연결해줘야함
    //   this.newsArray = response.data;
    // })
    // .catch(e => {
    //   console.log(e)
    // })
    this.$store.dispatch('FETCH_DATE', 'news/1.json');

    const newsArray = this.$store.state.newsArray;
    this.newsArray = newsArray;
  }
}
</script>

<style scoped>

</style>