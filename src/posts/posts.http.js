const { getAllPost, createNewUser, getPostsById } = require("./posts.controller")


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
        res.status(204).json(response)
    }else{
        res.status(400).json({message: "Invalid Arguments"})
    }
}

module.exports = {
    getAll,
    getPostsId,
    createUser
}