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
      // console.log("PAYLOAD", payload)
      return res.send({ user: payload, token})
    }
    res.status(401).send( {status: 'Error', msg: 'Unauthorized, try again.'} )
  } catch (error) {
    throw error
  }
}


const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await User.findByPk(req.params.user_id)
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await user.update({ passwordDigest })
      return res.send({ status: 'Ok', payload: user })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {throw error}
}

const CheckSession = async (req, res) => {
  console.log("CHECK SESSION", res.locals)
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}
