const { Post, User } = require('../models')

const GetPostsByUserId = async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: {userId: req.params.user_id}
    })
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const GetPostById = async (req, res) => {
  try {
    const post = await Post.findOne({
      where: {id: req.params.post_id}
    })
    res.send(post)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    const newPost = await Post.create(
      { ...req.body,  userId: req.params.user_id}
    )
      res.send(newPost)
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    const updatedPost = await Post.update(
      { ...req.body },
      {where: 
        {id: req.params.post_id},
        returning: true 
      }
    )
    res.send(updatedPost)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    await Post.destroy(
      {where: {id: req.params.post_id} }
    )
    res.send({msg: 'Post deleted.', payload: req.params.post_id, status: 'OK'})
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPostById, 
  GetPostsByUserId, 
  CreatePost, 
  UpdatePost, 
  DeletePost
}