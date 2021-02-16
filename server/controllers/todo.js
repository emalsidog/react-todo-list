const User = require("../models/User");
const Todo = require("../models/Todo");

// GET => /todos
exports.getTodos = (req, res) => {
    User.findOne({ _id: req.user._id }).populate("todos").exec((error, document) => {
        if(error) {
            throw new Error(error);
        }
        console.log(document);
        res.json({
            isError: false,
            message: "Operation successfull.",
            body: {
                document
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
        const document = await User.findOne({ _id: req.user._id }).populate("todos").exec();
        res.json({
            isError: false,
            message: "Successfully deleted todo.",
            body: {
                todos: document.todos
            }
        })
    } catch (error) {
        res.json({
            isError: true,
            message: "Something went wrong..."
        });
    }
}