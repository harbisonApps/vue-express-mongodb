import Vue from 'vue'
// import Vuex from 'vuex'
const state = {
    facts:[
            {
                _id: 3,
                description: "There is actually no sound in Outer Space.",
                fullText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti recusandae numquam quaerat optio, voluptas, sapiente ipsam perferendis eos voluptates, ratione quibusdam voluptatem quae rerum animi ut incidunt soluta amet.",
                imageUrl: "https://i.imgur.com/QfLEz9c.jpg",
                name: "Space Concert",
                slug: "space-concert"
            },
            {
                _id: 2,
                category: "Food/Beverage",
                description : "A burger is a sandwich consisting of one or more cooked patties of ground meat.",
                fullText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti recusandae numquam quaerat optio, voluptas, sapiente ipsam perferendis eos voluptates, ratione quibusdam voluptatem quae rerum animi ut incidunt soluta amet.",
                imageUrl : "https://i.imgur.com/0umadnY.jpg",
                name : "Burger",
                slug : "burger"
            },
            {
                _id: 1,
                category: "Food/Beverage",
                description : "This is a cheese steak",
                fullText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti recusandae numquam quaerat optio, voluptas, sapiente ipsam perferendis eos voluptates, ratione quibusdam voluptatem quae rerum animi ut incidunt soluta amet.",
                imageUrl : "https://i.imgur.com/nBqd9Kb.jpeg",
                name : "Cheese Steak",
                slug : "cheese-steak"
            },
        ]
},

getters = {
    allFacts: state => state.facts,
    getOneFact: state => slug => {
        return state.facts.find(fact => fact.slug === slug)
    },
},

actions = {
    getFacts({commit}, facts) {
        commit('setFacts', facts)
    },
    getOneFact({commit}, fact) {
        commit('getOneFact', fact)
    },
    addFact({commit}, fact) {
        commit('createFact', fact)
    },
    updateFact(context, payload) {
        console.log('updateFact action')
        context.commit('updFact', payload)
    },
    removeFact({commit}, fact) {
        commit('delFact', fact)
    }
},

mutations = {
    setFacts: (state, facts) => state.facts = facts,
    createFact: (state, fact) => state.facts.push(fact),
    
    updFact: (state, fact) => {
        let index = state.facts.findIndex(stateFact => stateFact._id == fact._id);
        console.log('updFact mutation:', index)
        Vue.set(state.facts, index, fact)
    },
    delFact: (state, fact) => state.facts = state.facts.filter(f => fact._id !== f._id)
}

export default {
    state, getters, actions, mutations
}