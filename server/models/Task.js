const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    deadline: {
        type: Date,
        require: true,
    },
    status: {
        type: String,
        enum: ["new", "active", "completed", "failed"],
        default: "new",
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        require: true,
    },
    assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        require: true,
    }
}, { timestamps: true })

module.exports = mongoose.model("Task", TaskSchema);