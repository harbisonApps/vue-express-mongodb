const express = require('express')
//const mongoDb = require('mongodb')
const router = express.Router()
const Post = require('../../models/Post')
const slugify = require('slugify')

// Get All Posts
router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.find()
        res.status(200).json({
            status: 'success',
            allPosts
        })
    } catch (err) {
        res.json({ err })
    }
});

// Get One Post
router.get('/:slug', async (req, res) => {
    try {
        const post = await Post.findOne({ slug: req.params.slug });
        res.status(200).json({
            status: 'success',
            post

        });
    } catch (err) {
        res.json({ err })
    }
})

// Create Post
router.post('/', async (req, res) => {
    const post = new Post({
        name: req.body.name,
        description: req.body.description,
        fullText: req.body.fullText,
        imageUrl: req.body.imageUrl
    })
    const savedPost = await post.save()
        try{
            res.status(201).json({
                 status: 'success',
                 savedPost
            })
        } catch(err) {
            res.json({ err })
            console.log(err.message)
        }        
});

// Update One Post  by :slug
router.patch('/:slug', async (req, res) => {
    try {
        const updatedPost = await Post.findOneAndUpdate(
            { slug: req.params.slug},
            {$set:
                {
                name: req.body.name,
                description: req.body.description,
                fullText: req.body.fullText,
                imageUrl: req.body.imageUrl,
                slug: slugify(req.body.name, {lower: true})
                }
            });
        res.status(200).json({
            status: 'success',
            data: {
                //message: 'Update successful',
                data: req.body
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: `Update failed: ${err}`
        })
    }
})

// Delete One Post by :slug
router.delete('/:slug', async (req, res) => {
    try {
        const post = await Post.deleteOne({ slug: req.params.slug });
        res.status(200).json({
            status: 'success',
            message: 'Post deleted by slug'
        })
    } catch (err) {
        res.json({ err })
        console.log(err.message)
    }
});

module.exports = router;