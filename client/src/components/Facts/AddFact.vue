<template>
    <div class="md-layout md-alignment-top-space-around">
            <form novalidate class="form" @submit.prevent="submitFact">
                <md-card>
                    <md-card-header>
                        <div class="md-title">Add A Fact</div>
                    </md-card-header>
                    <md-card-content>
                        <div>
                            <div >
                                <md-field>
                                    <label>name</label>
                                    <md-input v-model="name" placeholder="name"></md-input>
                                </md-field>
                                <md-field>
                                    <label>category</label>
                                    <md-input v-model="category" placeholder="category"></md-input>
                                </md-field>
                                <md-field>
                                    <label>description</label>
                                    <md-input v-model="description" placeholder="description"></md-input>
                                </md-field>
                                <md-field>
                                    <label>text</label>
                                    <md-textarea v-model="fullText" placeholder="text" md-autogrow></md-textarea>
                                </md-field>
                                <md-field>
                                    <label>image url</label>
                                    <md-input v-model="imageUrl" placeholder="image url"></md-input>
                                </md-field>
                            </div>
                        </div>
                    </md-card-content>
                    <md-progress-bar md-mode="indeterminate" v-if="sending" />
                    <md-card-actions>
                        <md-button type="submit" class="md-raised" :disabled="sending">Add Fact</md-button>
                    </md-card-actions>
                </md-card>
                <md-snackbar class="md-success" :md-active.sync="factSaved">Saved successfully</md-snackbar>
            </form>
        </div>
</template>
<script>
import uuid from 'uuid'
import {mapActions} from 'vuex'
export default {
    name: 'AddFact',
    data() {
        return {
            name:'',
            category:'',
            description:'',
            fullText:'',
            imageUrl:'',
            factSaved: false,
            sending: false,
        }
    },
    methods: {
        ...mapActions(['addFact']),
        submitFact() {
            this.sending = true
            const fact = {
                _id: uuid.v4(),
                name: this.name,
                category: this.category,
                description: this.description,
                fullText: this.fullText,
                imageUrl: this.imageUrl,
            }
            this.addFact(fact)
            this.sending = false
            this.clearForm()
        },
        clearForm() {
            this.name = null,
            this.category = null,
            this.description = null,
            this.fullText = null,
            this.imageUrl = null
        }
    },
}
</script>
<style scoped>
.form{
    width: 300px
};
.md-button{
    color: green;
    border: gray 1px solid;
}
</style>