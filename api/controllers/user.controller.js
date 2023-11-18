const User = require('../models/userSchema')

const getOneUser = async (req, res)=>{
    const {id} = req.params
    const user = await User.find()
    console.log(user)
    res.send(id)
}

const getAllUsers = async (req, res)=>{
    const user = await User.find()
    res.status(200).json(user)
}
module.exports = {getOneUser, getAllUsers}