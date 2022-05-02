//Dependencies 
const express = require('express');
//Required Routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Route the Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/api',apiRoutes);
app.use('/',htmlRoutes);

// Start the server
app.listen(PORT, () => console.log(`This port is listening at ${PORT}`));