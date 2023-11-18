const User = require('../models/userSchema')
const mongoose = require('mongoose')
const bcrypt = require("bcrypt");

const getMyProfile = async (req, res)=>{
    const {_id} = res.locals.user
    const user = await User.find({_id})
    res.status(200).json(user)
}
const getOneUser = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Invalid ID"})
    }
    const user = await User.findById(id)
    if(!user){
        return res.status(404).json({error: "No user found"})
    }
    res.status(200).json(user)
}
const getAllUsers = async (req, res)=>{
    const users = await User.find()
    if(!users){
        return res.status(404).json({error: "No users found"})
    }
    res.status(200).json(user)
}

const updateUser = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Invalid ID"})
    }
    const user = await User.findByIdAndUpdate({_id: id}, req.body)

    if(!user){
        return res.status(404).json({error: "No user found"})
    }
    res.status(200).json(user)
}
const deleteUser = async (req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Invalid ID"})
    }
    const user = await User.findByIdAndDelete({_id: id})

    if(!user){
        return res.status(404).json({error: "No user found"})
    }
    res.status(200).json(user)
}
const createUser = async(req, res)=>{
    const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS));
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    const user = await User.create(req.body)
    res.status(200).json(user)
}

module.exports = {getMyProfile, getOneUser, getAllUsers, deleteUser, updateUser, createUser}