const mongoose = require("mongoose");
const Task = require("../models/taskSchema");
const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tasks: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Task" }],
});
boardSchema.post("findOneAndDelete", async function (doc) {
  try {
    for (const taskId of doc.tasks) {
      await Task.findOneAndDelete({ _id: taskId });
    }
  } catch (error) {}
});
module.exports = mongoose.model("Board", boardSchema);
