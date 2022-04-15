const { User } = require('../models')
const middleware = require('../middleware')


const Register = async (req, res) => {
  try {
    const {fullname, username, email, password } = req.body
    let passwordDigest = await middleware.hashPassword
    (password)
    const user = await User.create({ username, email, passwordDigest, fullname })
    res.send(user)
  } catch (error) {
    throw error
  }
}



const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true
    })
    if (user && 
      (await middleware.comparePassword(req.body.password, user.passwordDigest))
    ) {
      let payload = {id: user.id, username: user.username }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token})
    }
    res.status(401).send( {status: 'Error', msg: 'Unauthorized, try again.'} )
  } catch (error) {
    throw error
  }
}


module.exports = {
  Register, 
  Login
}