const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.get ('/', controller.GetUsers)

router.get ('/:user_id', controller.GetUserDetails)

router.put(
    '/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateUser
    )

router.delete(
    '/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteUser
    )

module.exports = router