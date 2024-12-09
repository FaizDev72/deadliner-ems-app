const Agency = require('../../models/Agency');
const Employee = require('../../models/Employee');

exports.createEmployee = async (req, res) => {
    try {
        // get all data     
        const { fullName, age, address, email, gender, mobileNo, agencyID, role, adminID } = req.body;

        // validation of the feilds
        if (!fullName || !age || !address || !email || !gender || !mobileNo || !agencyID || !adminID) {
            return res.status(400).json({
                success: false,
                message: 'Empty field'
            })
        }

        // Check if email already exists
        const isEmailExists = await Employee.findOne({ email })
        if (isEmailExists) {
            return res.status(409).json({
                success: false,
                message: 'Email is already registered.'
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

exports.getAllEmployees = async (req, res) => {
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
        const { id } = req.params;
        // search for it
        const employee = await Employee.findById(id);

        // if not found
        if (!employee) {
            return res.status(404).json({
                success: true,
                message: "Employee not found",
            });
        }

        return res.status(200).json({
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

exports.updateEmployee = async (req, res) => {
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

exports.deleteEmployee = async (req, res) => {
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