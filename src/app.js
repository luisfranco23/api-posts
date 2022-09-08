const express = require('express')
const servicePost = require('./posts/posts.router').router
const serviceAuth = require('./auth/auth.router').router

const app = express()

app.use(express.json())


app.use('/api/v1/posts',servicePost)
app.use('/api/v1/posts', serviceAuth)

app.listen(8000, () => {
    console.log('Running Server Ok')
})