const { User } = require('../models')
const middleware = require ('../middleware')


const GetUsers = async (req, res) => {
    try {
        const users = await user.findAll()
        res.send(users)
    } catch (error) {
        throw error
    }
}

const UpdateUser = async (req, res) => {
    try {
        const userPut = await User.update(
            { ...req.body },
            { where: { id: req.params.user_id}, returning: true }
        )
        res.send(userPut)
    } catch (error) {
        throw error
    }
}


    const DeleteUser = async (req, res) => {
        try {
            await User.destroy({ where: { id: req.params.user_id } })
            res.send({ msg: 'User Deleted', payload: req.params.user_id, status: 'Ok '})
    } catch (error) {
            throw error
    }
}  



        module.exports = {
            GetUsers,
            UpdateUser,
            DeleteUser
        }
        