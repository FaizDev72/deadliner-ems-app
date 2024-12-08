const Employee = require("../../models/Employee");
const Task = require("../../models/Task");

exports.createTask = async () => {
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

exports.revokeTask = async () => {
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

        let status = failed;

        // fetch the task and just mark status to failed of that task
        let task = await Task.findByIdAndUpdate(id, { $set: status }, { new: true });

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

exports.getAllTaskofEmployee = async () => {
    try {
        // get empID
        const { empID } = req.params;

        // fetch all task
        let taskList = Task.find({ empID });

        // if not
        if (!taskList) {
            res.status(200).json({
                success: true,
                data: 0,
                message: "No task found",
            });
        }

        // if task found
        res.status(200).json({
            success: true,
            data: taskList,
            message: "Task List",
        });
    } catch (error) {
        console.error("Error creating agency:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
}

exports.updateTaskStatus = async () => {
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