const mongoose = require("mongoose");
const Board = require("../models/boardSchema");
const User = require("../models/userSchema");
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  participants: {
    type: {
      owner: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
      admins: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
      members: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
    },
  },
  springs: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Board" }],
});

projectSchema.post("findOneAndDelete", async function (doc) {
  try {
    for (const boardId of doc.springs) {
      await Board.findOneAndDelete({ _id: boardId });
    }
  } catch (error) {}
});
module.exports = mongoose.model("Project", projectSchema);
