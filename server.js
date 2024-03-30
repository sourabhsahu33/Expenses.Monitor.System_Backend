const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDb = require('./config/connectDB');
const path = require('path');

// config dot env file
dotenv.config();

// database connection
connectDb();
// rest object 
const app = express()

// middleware 
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// Users routes
app.use('/api/v1/users', require('./routes/userRoutes'))

// Transection routes
app.use('/api/v1/transection', require("./routes/transectionRoutes"))

// static files
app.use(express.static(path.join(__dirname, "./client/build")))

app.use("*", function(req,res){
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})
// port 
const PORT = 8080 || process.env.PORT;

// listen server
app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`);
})   