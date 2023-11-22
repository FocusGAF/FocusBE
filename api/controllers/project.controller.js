const Project = require('../models/projectSchema')
const mongoose = require('mongoose')


const getOneProject = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Invalid ID"})
    }
    const project = await Project.findById(id)
    if(!project){
        return res.status(404).json({error: "No project found"})
    }
    res.status(200).json(project)
}
const getAllProjects = async (req, res)=>{
    const projects = await Project.find().populate({path: 'springs', populate: 'tasks'})
    if(!projects){
        return res.status(404).json({error: "No projects found"})
    }
    res.status(200).json(projects)
}

const updateProject = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Invalid ID"})
    }
    const project = await Project.findByIdAndUpdate({_id: id}, req.body)

    if(!project){
        return res.status(404).json({error: "No project found"})
    }
    res.status(200).json(project)
}
const deleteProject = async (req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Invalid ID"})
    }
    const project = await Project.findByIdAndDelete({_id: id})

    if(!project){
        return res.status(404).json({error: "No project found"})
    }
    res.status(200).json(project)
}
const createProject = async(req, res)=>{
    const project = await Project.create(req.body)
    res.status(200).json(project)
}

module.exports = {getOneProject, getAllProjects, deleteProject, updateProject, createProject}