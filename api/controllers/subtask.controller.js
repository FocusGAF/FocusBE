const Subtask = require("../models/subtaskSchema");
const mongoose = require("mongoose");

const getOneSubtask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const subtask = await Subtask.findById(id);
  if (!subtask) {
    return res.status(404).json({ error: "No Subtask found" });
  }
  res.status(200).json(subtask);
};
const getAllSubtasks = async (req, res) => {
  const subtasks = await Subtask.find();
  if (!subtasks) {
    return res.status(404).json({ error: "No Subtasks found" });
  }
  res.status(200).json(subtasks);
};

const updateSubtask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const subtask = await Subtask.findByIdAndUpdate({ _id: id }, req.body);

  if (!subtask) {
    return res.status(404).json({ error: "No Subtask found" });
  }
  res.status(200).json(subtask);
};
const deleteSubtask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const subtask = await Subtask.findByIdAndDelete({ _id: id });

  if (!subtask) {
    return res.status(404).json({ error: "No Subtask found" });
  }
  res.status(200).json(subtask);
};
const createSubtask = async (req, res) => {
  const subtask = await Subtask.create(req.body);
  res.status(200).json(subtask);
};

module.exports = {
  getOneSubtask,
  getAllSubtasks,
  deleteSubtask,
  updateSubtask,
  createSubtask,
};
