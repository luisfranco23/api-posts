const { getUserByEmail } = require("../posts/posts.controller")
const { comparePassword } = require("../utils/bcrypt")



const authLoggin = (email, password) => {
    const user = getUserByEmail(email)
    if (user) {
        const verifyPassword = comparePassword(password, user.password)
        if (verifyPassword) {
            return user
        }
    }
    return false
}

module.exports = {
    authLoggin
}