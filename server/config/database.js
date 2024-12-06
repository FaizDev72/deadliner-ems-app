
const mongoose = require('mongoose')
require('dotenv').config();

exports.ConnectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected to Database")
    } catch (error) {
        console.log("Connection Failed")
        console.log(error);
    }
}