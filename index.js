const express = require('express');
const dotenv = require('dotenv').config();

// express app created
const app = express();

// config the server port

const PORT= process.env.APP_PORT;

// http request return json response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// root route
app.get('/', (req, res) => {
    res.send("hello");
});

// import task routes
const taskRoutes = require('./src/routes/task.route');

// create task routes
app.use('/tasks', taskRoutes);

//listen PORT
app.listen(PORT, () => {
    console.log(`Server Running`);
});