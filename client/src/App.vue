<template>
  <div id="app">
    <Header/>
    
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/layout/Header'
export default {
  components: {Header}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
p{
  font-size: 16px
}
</style>
