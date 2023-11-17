const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // name: { type: String, required: true },
  // last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // phone: { type: Number, required: true },
  // address: { type: String, required: true },
  password: { type: String, required: true },
  // projects: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Project" }],
});

module.exports = mongoose.model("User", userSchema);
