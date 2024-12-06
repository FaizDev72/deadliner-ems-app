const { ConnectToDatabase } = require('./config/Database');
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

ConnectToDatabase();

app.get('/', (req, res) => {
    res.send("Home");
})

app.listen(PORT, () => {
    console.log("Listening on Port", PORT)
})