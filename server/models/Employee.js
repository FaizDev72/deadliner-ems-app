const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    gender: {
        type: String,
        enum: ["male", "female", "others"],
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    mobileNo: {
        type: String,
        require: true,
    },
    newTaskCount: {
        type: Number,
        default: 0
    },
    activeTaskCount: {
        type: Number,
        default: 0
    },
    failedTaskCount: {
        type: Number,
        default: 0
    },
    completedTaskCount: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        enum: ["employee", "admin"]
    },
    agencyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Agency",
        require: true,
    },
    taskList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
    }],
}, { timestamps: true })

module.exports = mongoose.model("Employee", EmployeeSchema)