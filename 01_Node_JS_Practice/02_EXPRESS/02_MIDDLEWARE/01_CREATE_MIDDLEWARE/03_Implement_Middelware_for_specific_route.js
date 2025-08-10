const express = require("express");
const app = express();

const middleware_m1 = (req, res, next) => {
    console.log("Middleware for /about");
    next();
};

const middleware_m2 = (req, res, next) => {
    console.log("Middleware for /");
    next();
};


// app.use('/') → Runs for any route because every URL starts with /. That means /, /about, /contact, etc. will all match.
// app.use('/about') → Runs only for /about and anything that starts with /about.
        // Example: /about ✅ matches
        // Example: /about/team ✅ matches

app.use('/about', middleware_m1);
app.use('/', middleware_m2);


app.get('/about', (req, res) => {
    res.send("This is the About page");
});

app.get('/', (req, res) => {
    res.send('Used Express Js')
})



const PORT = 42568;
app.listen(PORT, () => {
    console.log("Server is running", PORT);
});
