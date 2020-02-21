const express = require('express')
// TODO Uninstall body-parser
//const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config');


const app = express()

// Middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const posts = require('./routes/api/posts')
const facts = require('./routes/api/facts')

app.use('/api/posts', posts)
app.use('/api/facts', facts)

mongoose.connect(
    process.env.MONGO_CONNECT, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, 
    () => { console.log('Connected to DB')}
)

const port = process.env.PORT || 5005

app.listen(port, () => console.log(`Server running on port ${port}`))