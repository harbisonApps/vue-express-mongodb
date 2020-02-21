const mongoose = require('mongoose')
const slugify = require('slugify')

const PostSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Provide a name'],
            trim: true,
            maxlength: [30, 'A max of 30 characters is allowed'],
        },
        slug: String,
        description: {
            type: String,
            required: [true, 'Provide a name'],
            trim: true,
            maxlength: [50, 'A max of 50 characters is allowed'],
        },
        fullText: {
            type: String,
            trim: true
        },
        imageUrl: {
            type: String,
            trim: true
        }
    }
)

// Document Middleware 
PostSchema.pre('save', function(next) {
    this.slug = slugify(this.name, {lower: true});
    next();
})

PostSchema.pre('update', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
})

module.exports = mongoose.model('Posts', PostSchema)