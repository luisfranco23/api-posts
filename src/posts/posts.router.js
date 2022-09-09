const passport = require('passport')
require('../middleware/auth.jwt')(passport)

const httpPosts = require('./posts.http')
const router = require('express').Router()


router.route('/')
    .get(httpPosts.getAll)
    .post(passport.authenticate('jwt', {session: false}),httpPosts.newPostUser)


router.route('/register')
    .post(httpPosts.createUser)

router.route('/:id')
    .get(httpPosts.getPostsId)

exports.router = router