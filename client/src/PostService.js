import axios from 'axios'

const url = 'http://localhost:5005/api/posts'

class PostService {
// Get All Posts
    static getPosts() {
        new Promise(async(resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                console.log(data)
                resolve(
                    data.map(post => ({
                        ...post
                    }))
                );
            } catch (err) {
                reject(err, console.log(err))
            }
        })
    }

    // Get One Post 
    // static getOnePost(slug){

    // }

    // Create a Post
    static createPost(body) {
        return axios.post(url, {
            body: {
                name: body.name,
                description: body.description,
                fullText: body.fullText,
                imageUrl: body.imageUrl
            }
        })
    }

    // Update One Post
    // static updatePost(slug) {

    // }

    // Delete One Post
    static deletePost(slug) {
        return axios.delete(`${url}/${slug}`)
    }
}

export default PostService