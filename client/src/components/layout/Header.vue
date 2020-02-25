<template>
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary" md-type="shift">
        <span class="md-title">Post & Facts</span>
        <md-tabs md-sync-route>
            <md-tab id="tab-home"  md-label="Home" md-icon="home" to="/" exact></md-tab>
            <md-tab id="tab-facts" md-label="Facts" to="/facts" exact></md-tab>
            <md-tab id="tab-admin" md-label="Admin" to="/admin" exact></md-tab>
            <!-- <router-link to="/">Home</router-link> |
            <router-link to="/facts">Facts</router-link> | 
            <router-link to="/admin">Admin</router-link> -->
        </md-tabs>
      </md-app-toolbar>
    </md-app>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style scoped>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>