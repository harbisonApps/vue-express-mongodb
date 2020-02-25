<template>
    <div>
        <h1>Post Manager</h1>
        <div class="post" v-for="(post, index) in posts" :item="post" :index="index" :key="post.id">
                    <!-- <h5>{{post.title}}</h5>
                    <p class="text">{{post.description}}</p>
                    <p class="text">{{post.fullText}}</p>
                    <img :src="post.imageUrl" alt=""> -->
                <PostComponent v-bind:post="post"/>
                </div>
    </div>
</template>
<script>
import PostComponent from '@/components/Posts/PostComponent'
export default {
    name: 'PostManager',
    props: ['posts'],
    components: {PostComponent}
}
</script>
<style scoped>

</style>