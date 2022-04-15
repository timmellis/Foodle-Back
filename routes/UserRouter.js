const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.get ('/', controller.GetUsers)

// router.post(
//     '/',
//     middleware.stripToken,
//     middleware.verifyToken,
//     controller.CreateUser
//     )

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