const mongoose = require('mongoose')

const OTPSchema = new mongoose.Schema({
    otp: {
        type: Number,
    },
    created_at: {
        type: Date,
        default: Date.now,
        expires: 60 * 5,
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true })

OTPSchema.pre("save", async function (next) {
    // await sendMail(this.mail, this.otp)
    next();
})

module.exports = mongoose.model("OTP", OTPSchema);
