const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

module.exports = Todo = mongoose.model("todos", TodoSchema);