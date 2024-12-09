const Employee = require("../../models/Employee");
const mongoose = require('mongoose');
const Task = require("../../models/Task");

exports.createTask = async (req, res) => {
    try {
        // get all  data
        const { title, description, category, deadline, empID, adminID } = req.body;

        // validation
        if (!title || !description || !category || !deadline || !empID || !adminID) {
            return res.status(400).json({
                success: false,
                message: 'Empty field'
            })
        }

        // create a task
        let task = await Task.create({ title, description, category, deadline, assignedTo: empID, assignedBy: adminID })

        // add task the into emp collection
        let employee = await Employee.findByIdAndUpdate(empID, { $push: { taskList: task._id } }, { new: true });

        // return response
        res.status(200).json({
            success: true,
            data: { employee, task },
            message: "Employee created successfully",
        });



    } catch (error) {
        console.error("Error creating agency:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }

}

exports.revokeTask = async (req, res) => {
    try {
        // get taskID
        const { id } = req.params;

        // validate
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Empty field'
            })
        }

        let status = 'failed';

        // fetch the task and just mark status to failed of that task
        let task = await Task.findByIdAndUpdate(id, { $set: { status } }, { new: true });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found.",
            });
        }

        // return res
        res.status(200).json({
            success: true,
            data: task,
            message: "Task updated successfully",
        });

    } catch (error) {
        console.error("Error creating agency:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
}

exports.getAllTaskofEmployee = async (req, res) => {
    try {
        // Get empID from the request params
        const { empID } = req.params;

        // Validate empID
        if (!empID) {
            return res.status(400).json({
                success: false,
                message: "Employee ID is required.",
            });
        }

        // Convert empID to ObjectId
        const employeeId = new mongoose.Types.ObjectId(empID);

        // Fetch all tasks assigned to the employee
        const taskList = await Task.find({ assignedTo: employeeId });

        // Check if tasks exist
        if (!taskList || taskList.length === 0) {
            return res.status(200).json({
                success: true,
                data: [],
                message: "No tasks found for the employee.",
            });
        }

        // Return the tasks
        return res.status(200).json({
            success: true,
            data: taskList,
            message: "Task list retrieved successfully.",
        });
    } catch (error) {
        console.error("Error fetching Task:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
};


exports.updateTaskStatus = async (req, res) => {
    try {
        // get id
        const { id } = req.params;

        // get updates
        const updates = req.body;

        // update the task
        const task = await Task.findByIdAndUpdate(id, { $set: updates }, { new: true });

        // no employee 
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "task not found.",
            });
        }

        // return res
        return res.status(200).json({
            success: true,
            message: "task updated successfully.",
            data: task,
        });

    } catch (error) {
        console.error("Error creating agency:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
}