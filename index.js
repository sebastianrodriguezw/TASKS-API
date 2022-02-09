const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const checkKey = require('check-object-key');

// express app created
const app = express();

// config the server port

const PORT= process.env.PORT || 5000;

// http request return json response
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// root route
app.get('/', (req, res) => {
    res.send("hello");
});

// import task routes
const taskRoutes = require('./src/routes/task.route');

// import user routes
const userRoutes = require('./src/routes/user.route');

// create task routes
app.use('/tasks', taskRoutes);

// create task routes
app.use('/users', userRoutes);

//listen PORT
app.listen(PORT, () => {
    console.log(`Server Running`);
});