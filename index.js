const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors')

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

// create task routes
app.use('/tasks', taskRoutes);

//listen PORT
app.listen(PORT, () => {
    console.log(`Server Running`);
});