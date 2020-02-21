<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="md-layout md-gutter md-alignment-center">
    <md-card md-with-hover>
    
        <md-card-media-cover md-text-scrim>
          <md-card-media md-big>
          <img src="https://i.imgur.com/0umadnY.jpg" alt="Burger">
        </md-card-media>
        <md-card-area>
        <md-card-header class="md-title">
          Card Header
        </md-card-header>
        <md-card-content>
          Lorem ipsum dolor sit amet sdvpw consectetur adipisicing elit!
        </md-card-content>
        
        </md-card-area>
        </md-card-media-cover>
        <md-card-actions>
          <md-button class="edit">Edit</md-button>
          <md-button class="delete">Delete</md-button>
        </md-card-actions>
      
    </md-card>
    <md-card md-with-hover>
    
        <md-card-header class="md-title">
          Card Header
        </md-card-header>
        <md-card-content>
          Card Content
        </md-card-content>
        <md-card-actions>
          <md-button class="fullBtn">More</md-button>
        </md-card-actions>
      
    </md-card>
    <md-card md-with-hover>
    
        <md-card-header class="md-title">
          Card Header
        </md-card-header>
        <md-card-content>
          Card Content
        </md-card-content>
        <md-card-actions>
          <md-button class="fullBtn">More</md-button>
        </md-card-actions>
      
    </md-card>
    <md-card md-with-hover>
    
        <md-card-header class="md-title">
          Card Header
        </md-card-header>
        <md-card-content>
          Card Content
        </md-card-content>
        <md-card-actions>
          <md-button class="fullBtn">More</md-button>
        </md-card-actions>
      
    </md-card>
  </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.md-card{
  width: 300px;
  max-height: 500px;
  border: rgba(175, 175, 175, 0.5) solid .5px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
}
.md-card-header{
  text-align: center
}
.md-card-content{
  text-align: left;
  text-indent: 6px;
}
.md-button{
  color: green;
  border: solid 1px;
  border-color: green;
  border-radius: 5px;
  
}
.fullBtn{
  width: 300px
}
.edit{
  color: blue;
  border-color: blue
}
.delete{
  background: maroon;
  color: white;
  border-color: transparent
}
</style>
