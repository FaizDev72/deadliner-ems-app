const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req, res, next) => {
    try {
        // extract token 
        let token = req.body.token || req.cookie.token || req.header("Authorization").replace("Bearer", "");

        // if no token return
        if (!token) return;

        try {
            // verify it 
            jwt.verify(token, process.env.ENCRYPTION_KEY);
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