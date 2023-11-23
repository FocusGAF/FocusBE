const Task = require("../models/taskSchema");
const Board = require("../models/boardSchema");
const mongoose = require("mongoose");

const getOneTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const task = await Task.findById(id);
  if (!task) {
    return res.status(404).json({ error: "No Task found" });
  }
  res.status(200).json(task);
};
const getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  if (!tasks) {
    return res.status(404).json({ error: "No Tasks found" });
  }
  res.status(200).json(tasks);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const task = await Task.findByIdAndUpdate({ _id: id }, req.body);

  if (!task) {
    return res.status(404).json({ error: "No Task found" });
  }
  res.status(200).json(task);
};
const deleteTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) {
    return res.status(404).json({ error: "No Task found" });
  }
  res.status(200).json(task);
};
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json(task);
};

module.exports = {
  getOneTask,
  getAllTasks,
  deleteTask,
  updateTask,
  createTask,
};
