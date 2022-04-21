const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.get ('/', controller.GetUsers)
router.get ('/withfollowers', controller.GetAllUsersWithFollowers)

router.get ('/byusername/:username', controller.GetUserDetailsByUsername)
router.get ('/:user_id', controller.GetUserDetails)

router.put('/update/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateUser
    )

router.delete( '/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteUser
    )

module.exports = router

