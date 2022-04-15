const router = require('express').Router()
const controller = require('../controllers/CommentController')

const middleware = require('../middleware')

router.get('/:comment_id', controller.GetCommentById)

router.get('/user/:user_id', controller.GetCommentsByUserId)

router.get('/post/:post_id', controller.GetCommentsByPostId)

router.post('/create/post-:post_id/user-:commenter_id', 
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateComment 
)
router.put('/update/:comment_id', 
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateComment
)
router.delete('/delete/:comment_id', 
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteComment
)

module.exports = router