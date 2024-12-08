const otpGenerator = require('otp-generator');
const OTPVerification = require('../../models/OTPVerification');
const Employee = require('../../models/Employee');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.sendOTP = async (req, res) => {
    try {
        // gte email id
        const { email } = req.body;

        if (!email) {
            return res.status(500).json({
                success: false,
                message: "Failed to send OTP",
            });
        }

        // generate otp
        let otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });

        // check if the otp id unique than other otp in the db
        let flag = true;

        let otpList = await OTPVerification.find(otp);

        while (flag) {
            if (otpList.includes(otp)) {
                otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
            } else flag = false;
        }

        // store it
        await OTPVerification.create({ email, otp })

        // Return response 
        return res.status(200).json({
            success: true,
            message: "OTP send successfully",
            otp // only for testing purpose
        })
    } catch (error) {
        console.error("Error creating agency:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
}

exports.userLogin = async (req, res) => {
    // get email and otp
    const { email, otp } = req.body;

    // apply validation
    if (!email || !otp) {
        return res.status(500).json({
            success: false,
            message: "Enable to verify user",
        });
    }

    // check if the email exists
    let employee = await Employee.findOne({ email });

    // check if the otp is correct
    if (!employee) {
        return res.status(500).json({
            success: false,
            message: "User doesnt exists",
        });
    }

    // create a payload
    let payload = {
        id: employee._id,
        role: employee.role,
        email,
    }

    // generate token 
    const token = jwt.sign(payload, process.env.ENCRYPTION_KEY, { expiresIn: '12h' })

    employee.token = token;

    // create cookie options
    options = {
        expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    }

    // return cookies and response
    return res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        employee,
        message: `User Login Success`,
    })
}