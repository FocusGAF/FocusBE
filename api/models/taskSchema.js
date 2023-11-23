const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String },
  budget: { type: Number },
  deadline: { type: Date },
  status: {
    type: String,
    enum: ["To do", "In progress", "Done"],
    default: "To do",
  },
  participants: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
  notes: { type: String },
  description: { type: String },
  files: { type: String },
  priority: { type: String, enum: ["Low", "Medium", "High"] },
  subtasks: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Subtask" }],
});
taskSchema.post("findOneAndDelete", async function (doc) {
  try {
    console.log(`Task "${doc.name}" removed`);
  } catch (error) {}
});
module.exports = mongoose.model("Task", taskSchema);
