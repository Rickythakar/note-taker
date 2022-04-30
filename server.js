
//Dependencies 
const express = require('express');
const { append } = require('express/lib/response');
//Required Routes
const apiRoutes = require("./routes/apiroutes")
const htmlRoutes = require("./routes/htmlroutes")


//Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());




// Start the server
append.listen(PORT, () => console.log('This port is listening at ${PORT}'));
