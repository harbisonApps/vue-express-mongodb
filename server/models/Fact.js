const mongoose = require('mongoose')
const slugify = require('slugify')

const FactSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Provide a name'],
            trim: true,
            maxlength: [25, 'A max of 25 characters is allowed'],
        },
        slug: String,
        description: {
            type: String,
            required: [true, 'Provide a name'],
            trim: true,
            maxlength: [25, 'A max of 25 characters is allowed'],
        },
        fullText: {
            type: String,
            trim: true
        },
        imageUrl: {
            type: String,
            // default: '/somepicture.jpg'
        }
    }
)

// Document Middleware 
FactSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
})

module.exports = mongoose.model('Facts', FactSchema)