<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PostManager v-bind:posts="posts"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PostManager from '@/components/Posts/PostManager.vue'

export default {
  name: 'Home',
  components: {
    PostManager
  },
  data() {
    return {
      posts:[
        { id: 3,
          description: "There is actually no sound in Outer Space.",
          imageUrl: "https://i.imgur.com/QfLEz9c.jpg",
          name: "Space Concert",
          slug: "space-concert"
        },
        { id: 2,
          category: "Food/Beverage",
          description : "A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
          imageUrl : "https://i.imgur.com/0umadnY.jpg",
          name : "Burger",
          slug : "burger"
        },
        { id: 1,
          category: "Food/Beverage",
          description : "This is a cheese steak",
          imageUrl : "https://i.imgur.com/nBqd9Kb.jpeg",
          name : "Cheese Steak",
          slug : "cheese-steak"
        }
      ]
    }
  },
}
</script>
