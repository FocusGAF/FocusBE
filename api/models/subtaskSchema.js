const mongoose = require("mongoose");

const subTaskSchema = new mongoose.Schema({
  title: { type: String },
  done: { type: Boolean },
});

module.exports = mongoose.model("Subtask", subTaskSchema);