const bcrypt = require('bcrypt')


const hashedPassword = (plainpassword) => {
    return bcrypt.hashSync(plainpassword, 10)
}

const comparePassword = (plainpassword, hashPassword) => {
    return bcrypt.compareSync(plainpassword,hashPassword)
}

module.exports = {
    hashedPassword,
    comparePassword
}