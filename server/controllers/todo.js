const User = require("../models/User");
const Todo = require("../models/Todo");

// GET => /todos
exports.getTodos = (req, res) => {
    User.findOne({ _id: req.user._id }).populate("todos").exec((error, document) => {
        if(error) {
            throw new Error(error);
        }
        res.json({
            isError: false,
            message: "Operation successfull.",
            body: {
                todos: document.todos
            }
        });
    });
}

// POST => /todos/add-todo
exports.postAddTodo = async (req, res) => {
    const { content } = req.body;
    const todo = new Todo({
        content
    });

    try {
        await todo.save();
        req.user.todos.push(todo);
        await req.user.save();   

        const document = await User.findOne({ _id: req.user._id }).populate("todos").exec();

        res.json({
            isError: false,
            message: "Successfully added todo.",
            body: {
                todos: document.todos
            }
        });
    } catch (error) {
        res.json({
            isError: true,
            message: "Something went wrong..."
        });
    }
}

// POST => /todos/delete-todo
exports.postDeleteTodo = async (req, res) => {
    const { id } = req.body;
    
    req.user.todos = req.user.todos.filter(({ _id }) => _id.toString() !== id.toString());

    try {
        await req.user.save();
        await Todo.findOneAndDelete({ _id: id });

        res.json({
            isError: false,
            message: "Successfully deleted todo.",
        })
    } catch (error) {
        res.json({
            isError: true,
            message: "Something went wrong..."
        });
    }
}

// POST => /todos/done-todo
exports.postDoneTodo = async (req, res) => {
    const { id } = req.body;
    const points = Math.floor(Math.random() * (11 - 5) + 5);
    req.user.points += points;
    try {

        const todo = await Todo.findOne({ _id: id });
        todo.isCompleted = true;        

        await req.user.save();
        await todo.save();

        res.json({
            isError: false,
            message: "Completed."
        });  
    } catch (error) {
        console.error(error);
        res.json({
            isError: true,
            message: "Something went wrong..."
        });
    }
}

// POST => /todos/important-todo
exports.postImportantTodo = async (req, res) => {
    const { id } = req.body;
    try {

        const todo = await Todo.findOne({ _id: id });
        todo.isImportant = !todo.isImportant;        

        await todo.save();

        res.json({
            isError: false,
            message: "Marked as important."
        });  
    } catch (error) {
        console.error(error);
        res.json({
            isError: true,
            message: "Something went wrong..."
        });
    }
}