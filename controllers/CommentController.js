const { Comment, Post, User } = require('../models')

const GetCommentById = async (req, res) => {
  try {
    const comment = await Comment.findOne({
      where: {id: req.params.comment_id}
    })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const GetCommentsByUserId = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: {userId: req.params.user_id}
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const GetCommentsByPostId = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: {postId: req.params.post_id}
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}


const CreateComment = async (req, res) => {
  try {
    const newComment = await Comment.create(
      { ...req.body,  postId: req.params.post_id, userId: req.params.commenter_id}
    )
      res.send(newComment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    const updatedComment = await Comment.update(
      { ...req.body },
      {where: 
        {id: req.params.comment_id},
        returning: true 
      }
    )
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    await Comment.destroy(
      {where: {id: req.params.comment_id} }
    )
    res.send({msg: 'Comment deleted.', payload: req.params.comment_id, status: 'OK'})
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCommentById,
  GetCommentsByPostId, 
  GetCommentsByUserId, 
  CreateComment, 
  UpdateComment, 
  DeleteComment
}