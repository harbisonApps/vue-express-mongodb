const express = require('express')
//const mongoDb = require('mongodb')
const router = express.Router()
const Fact = require('../../models/Fact')

// Get All

router.get('/', async (req, res) => {
    const facts = await loadFactsCollection();
    res.send(await facts.find({}).toArray());
})
// Get One Fact

router.get('/:slug', async (req, res) => {
    const facts = await loadFactsCollection();
    const fact = await facts.findOne({ slug: req.params.slug });
    res.status(200).json({
        status: 'success',
        fact
  
    });
})

// Add

router.post('/', async (req, res) => {
    const facts = await loadFactsCollection();
    const fact = await facts.insertOne({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        fullText: req.body.fullText,
        imageUrl: req.body.imageUrl,
        slug: req.body.slug
        
    });
    res.status(201).json({
        status: 'success',
        fact

    });
});
// Update 

router.put('/:slug', async (req, res) => {
    try {
        const facts = await loadFactsCollection();
        const fact = await facts.findOneAndUpdate( {slug: req.params.slug },{
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            fullText: req.body.fullText,
            imageUrl: req.body.imageUrl,
            slug: req.body.slug
         })

        res.status(200).json({
            status: 'success',
            fact
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: `Update failed: ${err}`
        })
    }
})
// Delete

router.delete('/:slug', async (req, res) => {
    const posts = await loadFactsCollection();
    await posts.deleteOne({ slug: req.params.slug });
    res.status(200).json({
        status: 'deleted by slug'
    });
});

// Middleware function for gettig fact by slug
async function getFact(req, res, next) {
    try {
        factSlug = await facts.findOne({slug: req.params.slug})
        if (factSlug == null) {
            return res.status(404).json({ message: 'Cant find document' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
}
    res.factSlug = factSlug
    next()
}
async function loadFactsCollection() {

    const client = await mongoDb.MongoClient.connect("mongodb+srv://harbisonapps:E6gt0MjDCgi9KcfD@cluster0-jhimp.mongodb.net/didyouknow?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    return client.db("didyouknow").collection("facts");
}
module.exports = router;