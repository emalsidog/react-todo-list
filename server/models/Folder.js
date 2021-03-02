const mongoose = require("mongoose");

const FolderSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todo" }],
});

module.exports = mongoose.model("Folder", FolderSchema);