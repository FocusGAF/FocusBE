const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true  },
  participants: { 
    type: { 
        owner : { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
        admins : [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
        members : [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
    } 
},
  springs : [{ type:  mongoose.SchemaTypes.ObjectId, ref: "Board" }]
});

module.exports = mongoose.model("Project", projectSchema);

