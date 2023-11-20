const Board = require('../models/boardSchema')
const mongoose = require('mongoose')

const getOneBoard = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ID" })
    }
    const board = await Board.findById(id)
    if (!board) {
        return res.status(404).json({ error: "No board found" })
    }
    res.status(200).json(board)
}
const getAllBoards = async (req, res) => {
    const boards = await Board.find()
    if (!boards) {
        return res.status(404).json({ error: "No boards found" })
    }
    res.status(200).json(boards)
}

const updateBoard = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ID" })
    }
    const board = await Board.findByIdAndUpdate({ _id: id }, req.body)

    if (!board) {
        return res.status(404).json({ error: "No board found" })
    }
    res.status(200).json(board)
}
const deleteBoard = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ID" })
    }
    const board = await Board.findByIdAndDelete({ _id: id })

    if (!board) {
        return res.status(404).json({ error: "No board found" })
    }
    res.status(200).json(board)
}
const createBoard = async (req, res) => {
    const board = await Board.create(req.body)
    res.status(200).json(board)
}

module.exports = { getOneBoard, getAllBoards, deleteBoard, updateBoard, createBoard }