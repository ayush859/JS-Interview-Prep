const express = require('express');
const app = express();

//route for handling GET requests
app.get('/', (req, res) => {
    res.send("Route is defined for APP.GET");
})

//route for handling POST requests
app.post('/login', (req, res) => {
    
})


const PORT =3001;
app.listen(PORT,()=>{
    console.log("Server is running on ",PORT);
})


