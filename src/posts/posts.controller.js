const uuid = require('uuid')
const { hashedPassword } = require('../utils/bcrypt')

const dbUsers = [
    {
        id: '60b7b5eb-6967-42fe-a0d2-edfffbfe69bb',
        name: 'Luis Franco',
        email: 'luis@gmail.com',
        password: '$2b$10$34vcAYlmUCOJfGKajt9g.O77ST7qPYcXrvVtIa9iFLGpP67JfSM0K',
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
    if (data) {
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
module.exports =  {
    getAllPost,
    createNewUser,
    getPostsById,
    getUserByEmail
}