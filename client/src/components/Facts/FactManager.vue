<template>
    <div>
        <h1>Fact Manager</h1>
        <div  class="md-layout md-gutter md-alignment-center-space-around">
            <div v-for="(fact, index) in allFacts" :item="fact" :index="index" :key="fact._id">
                <FactComponent v-bind:fact="fact"/>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import FactComponent from '@/components/Facts/FactComponent'
export default {
    name: 'FactManager',
    props: ['facts'],
    components: {FactComponent},
    methods: {
        ...mapActions(['getFacts'])
    },
    computed: {
        ...mapGetters(['allFacts'])
    },
    created() {
        this.getFacts
    },
}
</script>
<style scoped>

</style>