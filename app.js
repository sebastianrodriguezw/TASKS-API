const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const { sequelize, User, Task } = require('./models');


// express app created
const app = express();

// config the server port

const PORT= process.env.PORT || 5000;

// http request return json response
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: true}));
app.use(cookieParser());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

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

app.get('/alltasks', async (req, res) => {
    try{
        const task = await Task.findAll();

        return res.json(task);
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})

//listen PORT
app.listen(PORT, async () => {
    console.log(`Server Running`);
});
