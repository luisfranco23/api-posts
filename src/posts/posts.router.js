const passport = require('passport')
require('../middleware/auth.jwt')(passport)

const httpPosts = require('./posts.http')
const router = require('express').Router()


router.route('/')
    .get(httpPosts.getAll)


router.route('/register')
    .post(httpPosts.createUser)

router.get(('/ejemplo'),passport.authenticate('jwt', {session: false}) , (req, res) => {
    res.status(200).json({message: 'Hi', email: req.user.id})
})
router.route('/:id')
    .get(httpPosts.getPostsId)

exports.router = router