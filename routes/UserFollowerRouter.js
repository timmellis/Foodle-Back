const router = require('express').Router()
const controller = require('../controllers/UserFollowerController')
const middleware = require('../middleware')


// FOLLOWING / FOLLOWER ASSOCIATIONS
router.get('/followers/:user_id',
middleware.stripToken,
middleware.verifyToken,
controller.GetFollowersByUserId)

router.get('/following/:follower_id',
middleware.stripToken,
middleware.verifyToken,
controller.GetFollowingByFollowerId)

router.post('/follow/:user_id/follower/:follower_id',
middleware.stripToken,
middleware.verifyToken,
controller.FollowUser)

router.delete('/unfollow/:user_id/follower/:follower_id',
middleware.stripToken,
middleware.verifyToken,
controller.UnfollowUser)

module.exports = router