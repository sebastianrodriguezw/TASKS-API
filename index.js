const express = require('express');


// express app created
const app = express();

// config the server port

const port = process.env.PORT || 5000;

// root route
app.get('/', (req, res) => {
    res.send("hello");
});

//listen protected
app.listen(port, () => {
    console.log(`Server Running`);
});