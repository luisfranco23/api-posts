const uuid = require('uuid')
const { hashedPassword } = require('../utils/bcrypt')

const dbUsers = [
    {
        id: '60b7b5eb-6967-42fe-a0d2-edfffbfe69bb',
        name: 'Luis Franco',
        email: 'luis@gmail.com',
        password: '$2b$10$34vcAYlmUCOJfGKajt9g.O77ST7qPYcXrvVtIa9iFLGpP67JfSM0K',
        phone: '300100100'
    },
    {
        id: 'd5f606a4-ea34-445e-a183-59f80b096edd',
        name: 'Luis',
        email: 'luis123@gmail.com',
        password: '$2b$10$y2obr1HwOfcA6c5.Usf84.c6u4gOmc/eBy6omAsB.N0o0uP7ltSau',
        phone: '300100100'
    }
]

const dbPosts = [
    {
        id: '5f2a8529-2bb2-4286-9868-9fd8584d05b2',
        title: 'Como crear una API REST',
        content: 'Todo lo que tienes que saber sobre una API REST',
        headerImg: 'url_to_img',
        userId: '60b7b5eb-6967-42fe-a0d2-edfffbfe69bb',
        published: true
    },
    {
        id: '2fee3282-7210-4967-a932-08617180ec49',
        title: 'Todo sobre JWT',
        content: 'Jsonwebtoken',
        headerImg: 'url_to_img',
        userId: '60b7b5eb-6967-42fe-a0d2-edfffbfe69bb',
        published: true
    },
    {
        id: '902f8c73-5dee-46e3-876a-ae443343aeaf',
        title: 'Todo sobre JWT',
        content: 'Jsonwebtoken',
        headerImg: 'url_to_img',
        userId: 'd5f606a4-ea34-445e-a183-59f80b096edd',
        published: true
    }
]

const getUserByEmail = (email) => {
    const result = dbUsers.filter(item => item.email === email)
    return result[0]
}

const getAllPost = () => {
    return dbPosts
}

const getPostsById = (id) => {
    const filterId = dbPosts.filter(item => item.id === id)
    return filterId[0]
}


const createNewUser = (data) => {
    const filterUser = dbUsers.filter(item => item.email === data.email)
    if(!filterUser){
        const newUser = {
        id: uuid.v4(),
                name: data.name,
                email: data.email,
                password: hashedPassword(data.password),
                phone: data.phone
            }
            dbUsers.push(newUser)
            return newUser
    }else{
        return false
    }
}


const createNewPost = (data, userId) => {
    if (data && userId) {
        const newPost = {
            id: uuid.v4(),
            title: data.title,
            content: data.content,
            headerImg: data.headerImage,
            userId: userId,
            published: true
        }
        dbPosts.push(newPost)
        return newPost
    }else{
        return false
    }
}

const getMePosts = (id) =>{
    const filterPosts = dbPosts.filter(item => item.userId === id)
    return filterPosts
}

const getPostMeById = (userId, postId) => {
    const filter = dbPosts.filter(item => item.userId === userId && item.id === postId)
    if (!filter) {
        return false
    }else{
        return filter[0]
    }
}

const editPosts = (id, data) => {
    const index = dbPosts.findIndex(item => item.id === id)
    const filter = dbPosts.filter(item => item.id === id)
    if (!(index == -1)) {
        dbPosts[index] = {
         id: filter[0].id,
         title: data.title,
         content: data.content,
         headerImg: data ? data.headerImage : filter[0].headerImg,
         userId: filter[0].userId,
         published: data ? data.published : true
        }
        return dbPosts[index]
    }else{
        return false
    }
}


const deletePostById = (id, userId) => {
    const index = dbPosts.findIndex(item => item.id === id && item.userId === userId)
    if (!(index === -1)) {
        return dbPosts.splice(index,1)
    }else{
        return false
    }
}

module.exports =  {
    getAllPost,
    createNewUser,
    getPostsById,
    getUserByEmail,
    createNewPost,
    getMePosts,
    getPostMeById,
    editPosts,
    deletePostById
}