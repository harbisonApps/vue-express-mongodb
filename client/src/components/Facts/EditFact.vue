<template>
    <div>
        <div class="md-layout md-alignment-top-space-around">
        <h1>Edit</h1>
        </div>
        <div class="md-layout md-alignment-top-space-around">
        <form novalidate class="form " @submit.prevent="saveFact">
                <md-card>
                    <!-- <md-card-header>
                        <div class="md-title">Edit {{fact.name}}</div>
                    </md-card-header> -->
                    <md-card-area>
                    <md-card-content>
                        <div>
                            <div >
                                <md-field>
                                    <label class="label">name</label>
                                    <md-input v-model="factToSubmit.name" placeholder="name"></md-input>
                                </md-field>
                                <md-field>
                                    <label class="label">category</label>
                                    <md-input v-model='factToSubmit.category' placeholder="category"></md-input>
                                </md-field>
                                <md-field>
                                    <label class="label">description</label>
                                    <md-input v-model='factToSubmit.description' placeholder="description"></md-input>
                                </md-field>
                                <md-field>
                                    <label class="label">text</label>
                                    <md-textarea v-model="factToSubmit.fullText" placeholder="text" md-autogrow></md-textarea>
                                </md-field>
                                <md-field>
                                    <label class="label">image url</label>
                                    <md-input v-model="factToSubmit.imageUrl" placeholder="imageUrl"></md-input>
                                </md-field>
                            </div>
                        </div>
                    </md-card-content>
                    </md-card-area>
                    <md-progress-bar md-mode="indeterminate" v-if="sending" />
                    <md-card-actions>
                        <md-button to="/facts" type="cancel" class="cancel md-raised">cancel</md-button>
                        <md-button type="submit" class="save md-raised" :disabled="sending">Save Fact</md-button>
                    </md-card-actions>
                </md-card>
            </form>   
        </div>
        </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name:'editFact',
    props: ['fact', 'slug'],
    data() {
        return {
            factToSubmit:{
                name: '',
                category: '',
                description: '',
                fullText: '',
                imageUrl: '',
            },
            factSaved: false,
            sending: false,
        }
    },
    methods: {
        ...mapActions(['updateFact']),
        saveFact() {
            this.updateFact( this.factToSubmit)
            this.$router.replace('/facts')   
        }
    },
    computed: {
    ...mapGetters(['getOneFact'])
    },
    created() {
        const slug = this.$route.params.slug
        this.fact = this.getOneFact(slug)
    },
    mounted() {
			this.factToSubmit = this.fact
		}
}
</script>
<style scoped>
.form{
    width: 300px;
}
.md-card{
  width: 300px;
  margin-bottom: 10px;
 }
 .md-card-content{
     padding: 7px;
 }
 .md-textarea{
     height: 140px;
     overflow: auto;
 }
.md-input{
    max-width: 600px;
}
.label{
    color: orange
}
.cancel{
    color: red;
    border-radius: 5px;
}
.save{
    color: white;
    background: green;
    border-radius: 5px;
}
</style>