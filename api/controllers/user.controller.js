const User = require('../models/userSchema')

const getMyProfile = async (req, res)=>{
    const {_id} = res.locals.user
    const user = await User.find({_id})
    res.status(200).json(user)
}

const getAllUsers = async (req, res)=>{
    const user = await User.find()
    res.status(200).json(user)
}
module.exports = {getMyProfile, getAllUsers}