const express = require('express')
const servicePost = require('./posts/posts.router').router
const serviceAuth = require('./auth/auth.router').router
const entorno = require('./utils/config')

const app = express()

app.use(express.json())


app.use('/api/v1/posts',servicePost)
app.use('/api/v1/posts', serviceAuth)

app.listen(entorno.port, () => {
    console.log(`Server started ${entorno.port}`)
})