const { getAllPost, createNewUser, getPostsById, createNewPost, getMePosts, getPostMeById, editPosts, deletePostById } = require("./posts.controller")


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

const getMePostById = (req, res) => {
    const postId = req.params.id
    const userId = req.user.id
    if (postId && userId) {
        const response = getPostMeById(userId, postId)
        if (response) {
            res.status(200).json({response})
        }else{
            res.status(400).json({message: 'There is no information'})    
        }
    }else{
        res.status(400).json({message: 'Missing information'})
    }
}


const editPostsId = (req, res) => {
    const postId = req.params.id
    const data = req.body
    if (data) {
        const response = editPosts(postId, data)
        if (response) {
            res.status(200).json({response})
        }else{
            res.status(400).json({message: 'The provided id does not exist'})
        }
    }else{
        res.status(400).json({message: 'Missing information'})
    }
}

const removePost = (req, res) => {
    const id = req.params.id
    const userId = req.user.id
    if (userId && id) {
        const response = deletePostById(id, userId)
        if (response) {
            res.status(200).json({message: `User ${response[0].id} has been deleted successfully` ,response})
        }else{
            res.status(400).json({message: 'There is no information'})
        }
    }else{
        res.status(400).json({message: 'Missing information'})
    }
}

module.exports = {
    getAll,
    getPostsId,
    createUser,
    newPostUser,
    getMePostId,
    getMePostById,
    editPostsId,
    removePost
}