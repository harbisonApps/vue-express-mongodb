<template>
  <div md-layout-item md-size-25>
      <md-card md-with-hover>
      
          <md-card-media-cover md-text-scrim>
            <md-card-media md-ratio="1:1">
              <img :src="fact.imageUrl" alt="Burger">
            </md-card-media>
            <md-card-area>
            <!-- <md-card-header class="md-title">
              {{fact.name}}
            </md-card-header> -->
            <md-card-content>
              <span class="md-title">{{fact.name}}</span>
              <p class="md-subhead">{{fact.description}}</p>
              <!-- <p>{{fact.fullText}}</p> -->
            </md-card-content>
            </md-card-area>
          </md-card-media-cover>
          <md-card-actions>
            <!-- <md-button v-bind:to="{name:'getFact',getOneFact, params: {slug: fact.slug}}" class="fullBtn">Read More</md-button>
            <md-divider></md-divider> -->
            <md-button v-bind:to="{name:'editFact',getOneFact, params: {slug: fact.slug}}" class="edit">Edit</md-button>
            <md-button @click="deleteFact" class="delete">Delete</md-button>
          </md-card-actions>
        
      </md-card>
    </div>
</template>
<script>
import {mapGetters, mapActions} from'vuex'
export default {
  name: 'FactComponent',
  props: ['fact', 'slug'],
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions(['removeFact']),
    deleteFact() {

      this.removeFact(this.fact)
    }
  },
  computed: {
    ...mapGetters(['getOneFact'])
  },
}
</script>
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
  height: 350px;
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
.md-card-actions{
  margin-top: 5px;
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
