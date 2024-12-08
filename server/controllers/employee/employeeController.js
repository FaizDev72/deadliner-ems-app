const Agency = require('../../models/Agency');
const Employee = require('../../models/Employee');

exports.createEmployee = async (req, res) => {
    try {
        // get all data 
        const { fullName, age, address, email, gender, mobileNo, agencyID, role } = req.body;

        // validation of the feilds
        if (!fullName || !age || !address || !email || !gender || !mobileNo || !agencyID || !adminID) {
            return res.status(400).json({
                success: false,
                message: 'Empty field'
            })
        }

        // create new employee
        const employee = await Employee.create({ fullName, age, address, email, gender, mobileNo, agencyID, role: role });

        // insert the employee id to agency
        await Agency.findByIdAndUpdate(agencyID, { $push: { employees: employee._id } }, { new: true });


        // return response
        res.status(200).json({
            success: true,
            data: employee,
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

exports.getAllEmployees = async () => {
    try {
        // fetch all employees
        const employeeList = await Employee.find();

        // if no employee 
        if (!employeeList) {
            res.status(200).json({
                success: true,
                data: 0,
                message: "No employee found",
            });
        }

        // if employee fond
        res.status(200).json({
            success: true,
            data: employeeList,
            message: "Employee List",
        });


    } catch (error) {
        console.error("Error creating agency:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
}

exports.getEmployee = async (req, res) => {
    try {
        // get id of the employee
        const { id } = req.body;

        // search for it
        const employee = await Employee.findById(id);

        // if not found
        if (!employee) {
            res.status(404).json({
                success: true,
                message: "Employee not found",
            });
        }

        res.status(200).json({
            success: true,
            data: employee,
            message: "Employee Exists",
        });

        // if found
    } catch (error) {
        console.error("Error creating agency:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
}

exports.updateEmployee = async () => {
    try {
        // get id   
        const { id } = req.params;
        const updates = req.body;

        // fetch findByIdAndUpdate
        const employee = await Employee.findByIdAndUpdate(id, { $set: updates }, { new: true });

        // no employee 
        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found.",
            });
        }

        // return res
        return res.status(200).json({
            success: true,
            message: "Employee updated successfully.",
            data: employee,
        });

    } catch (error) {
        console.error("Error creating agency:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
}

exports.deleteEmployee = async () => {
    try {
        // fetch data
        const { id } = req.params;

        // delete it 
        const employee = await Employee.findByIdAndDelete(id);

        // if not
        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found.",
            });
        }

        // return res
        return res.status(200).json({
            success: true,
            message: "Employee updated successfully.",
            data: employee,
        });

    } catch (error) {
        console.error("Error creating agency:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
}