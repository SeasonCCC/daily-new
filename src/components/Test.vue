<template>
  <div class="hello">
    <h1>{{ msg }} -- {{$route.params.username}}</h1>
  </div>
</template>
 
<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'Hi, I am JSPang'
    }
  }
}
</script>
 
 
<style scoped>
 
</style>