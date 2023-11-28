const { simpleFaker } = require("@faker-js/faker");
const mongoose = require("mongoose");
const Board = require("../models/boardSchema");
const User = require("../models/userSchema");
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, require: true },
  participants: {
    type: {
      owner: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
      admins: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
      members: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
    },
  },
  invitationId: { type: String, unique: true },
  springs: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Board" }],
});

projectSchema.pre("save", function (next) {
  if (!this.invitationId) {
    this.invitationId = simpleFaker.string.uuid();
  }
  next();
});

projectSchema.post("findOneAndDelete", async function (doc) {
  try {
    for (const boardId of doc.springs) {
      await Board.findOneAndDelete({ _id: boardId });
    }
  } catch (error) {}
});
module.exports = mongoose.model("Project", projectSchema);
