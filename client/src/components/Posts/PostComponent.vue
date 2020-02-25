<template>
    <div class="container">
            <!-- CREATE POST HERE -->
            <p class="error" v-if="error">{{error}}</p>
            <div class="postsContainer">
                <div class="post">
                    <h3>{{post.name}}</h3>
                    <p class="text">{{post.description}}</p>
                    <p class="text">{{post.fullText}}</p>
                    <img :src="post.imageUrl" alt="">
                </div>
            </div>
        </div>
</template>
<script>
//import PostService from '../PostService'
export default {
   name: 'PostComponent',
   props: ['post'],
   data() {
       return {
            posts: [],
            error: '',
            name: '',
            description: '',
            fullText:'',
            imageUrl:''
       }
   },
//   created() {
//        try {
//            this.posts = PostService.getPosts();
//        } catch(err) {
//            this.error = err.message
//        }
//    },
}
</script>
<style scoped>
p.text{
    font-size: 1.2rem
}
div.post{
    position: relative;
    border:solid 1px grey;
    padding: 10px 10px 30px 10px;
    margin-bottom: 15px;
}
p.error{
    border: solid red 1px;
    background: pink;
    padding: 10px 10px 30px 10px;
    margin-bottom: 15px;
}
div.container{
    max-width: 600px;
    margin: 0 auto;
}
</style>