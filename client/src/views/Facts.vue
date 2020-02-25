<template>
  <div>
    <h1>Facts Page</h1>
    <hr>
    <FactManager/>
    <hr>
    <div >
      <AddFact/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FactPage',
  components: {
    FactManager: () => import('@/components/Facts/FactManager') ,
    AddFact: () => import('@/components/Facts/AddFact')
  }
}
</script>
<style scoped>
.submit{
    color: green;
    border: gray 1px solid;
}
</style>
