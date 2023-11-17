const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String },
  budget: { type: Number },
  deadline: { type: Date },
  status: { type: String},
  participants: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
  notes: { type: String },
  description: { type: String },
  files: { type: URL },
  subtasks: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Subtask" }] 
});

module.exports = mongoose.model("Task", taskSchema);