const mongoose = require('mongoose');

const AgencySchema = new mongoose.Schema({
    agencyName: {
        type: String,
        require: true,
    },
    businessDomain: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
    }]
}, { timestamps: true })

module.exports = mongoose.model("Agency", AgencySchema);