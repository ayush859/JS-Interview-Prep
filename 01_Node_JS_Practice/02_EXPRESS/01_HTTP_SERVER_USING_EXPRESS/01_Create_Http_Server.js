
// Created Express.js apps by requiring the express module and calling the express() function .

const express = require('express')
const app = express();


const PORT = 3000;

// Started Express.js server by calling the listen() method on application Object
app.listen(PORT, (req, res) => {
    console.log("Express server running ", PORT);

})

// When someone makes a GET request to this URL, run this function
app.get('/', (req, res) => {
    res.end('Used Express Js')
})

