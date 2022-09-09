const passport = require('passport')
const { loggin } = require('./auth.http')
const httpPosts = require('../posts/posts.http')

const router = require('express').Router()

router.post('/login', loggin)
router.get('/me/posts', passport.authenticate('jwt', {session: false}), httpPosts.getMePostId)
router.route('/me/posts/:id')
    .get(passport.authenticate('jwt', {session: false}), httpPosts.getMePostById)
    .put(passport.authenticate('jwt', {session: false}),httpPosts.editPostsId)
    .delete(passport.authenticate('jwt', {session: false}), httpPosts.removePost)


exports.router = router