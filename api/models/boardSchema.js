const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tasks: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Task" }],
});

module.exports = mongoose.model("Board", boardSchema);
