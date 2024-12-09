const Agency = require("../../models/Agency");
const Employee = require("../../models/Employee");

exports.createAgency = async (req, res) => {
    try {
        // extract data
        // console.log(req.body);
        // return;
        const { agencyName, businessDomain, agencyAddress, fullName, age, address, email, gender, mobileNo } = req.body;

        // validation
        if (!agencyName || !businessDomain || !agencyAddress || !fullName || !age || !address || !email || !gender || !mobileNo) {
            return res.status(400).json({
                success: false,
                message: "Missing Data",
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

        // Create Agency
        const agency = await Agency.create({
            agencyName, businessDomain, agencyAddress
        });

        // if error return
        if (!agency) {
            return res.status(400).json({
                success: false,
                message: "Missing Data",
            })

        }

        // Create admin 
        const employee = Employee.create({
            fullName, age, address, email, gender, mobileNo, role: "admin", agencyID: agency._id
        });

        // if error return
        if (!employee) {
            return res.status(500).json({
                success: false,
                message: "Failed to create admin employee.",
            });
        }

        // return response    
        return res.status(201).json({
            success: true,
            message: "Agency and admin created successfully.",
            data: { agency, employee },
        });


    } catch (error) {
        console.error("Error creating agency:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
}   