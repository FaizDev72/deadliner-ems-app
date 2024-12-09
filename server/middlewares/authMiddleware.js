const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req, res, next) => {
    try {
        // extract token 
        let token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer", "");

        // if no token return
        if (!token) return;

        try {
            // verify it 
            let payload = jwt.verify(token, process.env.ENCRYPTION_KEY);
            req.user = payload;

        } catch (error) {
            console.log("Invalid token:", error.message);

            return res.status(401).json({
                success: false,
                message: "Token is invalid",
                error: error.message,
            });
        }
        // next
        next();

    } catch (error) {
        console.log("Authorization error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Failed to authorize user",
            error: error.message,
        });
    }

}

// isEmployee Middleware
exports.isEmployee = (req, res, next) => {
    try {
        const account_type = req.user.role;
        if (account_type != "employee") {
            console.log("User is not a employee");
            return res.status(403).json({
                success: false,
                message: "This is a protected route for employee",
            });
        }
        next()
    } catch (error) {
        console.log("Authorization error for employee route:", error.message);
        return res.status(500).json({
            success: false,
            message: "Failed to authorize for employee route",
            error: error.message,
        });
    }
}

// isAdmin Middleware
exports.isAdmin = (req, res, next) => {
    try {
        console.log(req.user)
        const account_type = req.user.role;
        console.log(account_type)
        if (account_type != "admin") {
            console.log("User is not a admin");
            return res.status(403).json({
                success: false,
                message: "This is a protected route for admin",
            });
        }
        next()
    } catch (error) {
        console.log("Authorization error for admin route:", error.message);
        return res.status(500).json({
            success: false,
            message: "Failed to authorize for admin route",
            error: error.message,
        });
    }
}