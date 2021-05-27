<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/item">Item</router-link> |
    <router-link to="/user">User</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  display: flex;
  color: white;
  background-color: #42b883;
  padding: 8px;
}

.header a {
  color: #fff;
  margin: 5px;
}

.header a:active {
  color: #35495e;
}
</style>