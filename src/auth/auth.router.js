const { loggin } = require('./auth.http')

const router = require('express').Router()

router.post('/login', loggin)


exports.router = router