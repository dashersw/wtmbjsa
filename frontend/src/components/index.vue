<template lang="pug">
#index
  h1 Hello

  p(v-if="username") You are {{username}}
  p(v-else) You are an unknown user
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      username: ''
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
