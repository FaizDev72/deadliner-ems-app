const { ConnectToDatabase } = require('./config/Database');
const express = require('express');
const taskRouter = require('./routes/task');
const employeeRouter = require('./routes/employee');
const agencyRouter = require('./routes/agency');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/v1/employee', employeeRouter)
app.use('/api/v1/task', taskRouter)
app.use('/api/v1/agency', agencyRouter)


app.get('/', (req, res) => {
    res.send("Home");
})

ConnectToDatabase();

app.listen(PORT, () => {
    console.log("Listening on Port", PORT)
})