const { getAllPost, createNewUser, getPostsById, createNewPost, getMePosts } = require("./posts.controller")


const getAll = (req, res) => {
    const data = getAllPost()
    res.status(200).json({length: data.length ,data})
}

const getPostsId = (req, res) => {
    const id = req.params.id
    if (id) {
        const data = getPostsById(id)
        res.status(200).json(data)
    }else{
        res.status(400).json({message: 'Invalid id'})
    }
}

const createUser = (req, res) => {
    const data = req.body
    if (data.name && data.email && data.password) {
        const response = createNewUser(data)
        console.log(response)
        if (response) {
            res.status(200).json({response})
        }else{
            res.status(400).json({message: 'Register fail, data error'})
        }
    }else{
        res.status(400).json({message: "Invalid Arguments"})
    }
}

const newPostUser = (req, res) => {
    const data = req.body
    const userId = req.user.id
    if (!data.title && !data.content) {
        res.status(400).json({message: 'missing information'})
    }else if (userId) {
        const response = createNewPost(data,userId)
        res.status(200).json({response})
    }else{
        res.status(400).json({message: 'Ivalidad data'})
    }
}


const getMePostId = (req, res) => {
    const userId = req.user.id
    if (userId) {
        const response = getMePosts(userId)
        res.status(200).json({response})
    }else{
        res.status(400).json({message: 'not data'})
    }
}

module.exports = {
    getAll,
    getPostsId,
    createUser,
    newPostUser,
    getMePostId
}