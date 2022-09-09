const jwt = require('jsonwebtoken')
const { authLoggin } = require("./auth.controller")
const entorno = require('../utils/config')

const loggin = (req, res) => {
    const data = req.body
    if (!data.email || !data.password) {
        res.status(401).json({message: "missing data"})
    }
    const response = authLoggin(data.email, data.password)
    
    if (response) {
        const token = jwt.sign({
            id: response.id,
            email: response.email,
        }, entorno.secretSTring)
        return res.status(200).json({message: 'loggin succes', token})
    }else{
        return res.status(401).json({message: 'Invalid credentials'})
    }
}

module.exports = {
    loggin
}