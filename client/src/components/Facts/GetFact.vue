<template>
    <div>
    <div class="md-layout md-alignment-top-space-around">
      <h1>{{fact.name}}</h1>
    </div>
        <div class="md-layout md-alignment-top-space-around">
            <md-card>
                <md-card-media md-ratio="1:1">
                <img :src="fact.imageUrl" :alt="fact.description">
                </md-card-media>
                <md-card-area>
                <md-card-content>
                <p class="ctgry">{{fact.category}}</p>
                <p class="md-subhead">{{fact.description}}</p>
                <p>{{fact.fullText}}</p>
                </md-card-content>
                </md-card-area>
                <md-card-actions>
                    <md-button class="fullBtn" to="/facts">back to facts</md-button>
                </md-card-actions>
            </md-card>
        </div>
        
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'getFact',
    props: ['fact', 'slug'],
    computed: {
    ...mapGetters(['getOneFact'])
    },
    created() {
        const slug = this.$route.params.slug
        this.fact = this.getOneFact(slug)
    },
}
</script>
<style scoped>
.md-card{
  max-width: 600px;
  /* height: 350px; */
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
.ctgry{
  color: orange;
  font-weight: bold;
  line-height: 75%
}
.fullBtn{
  width: 300px
}
</style>