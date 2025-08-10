// npm install helmet  body-parser compression
//same for other Third Party Middelware

const express= require("express")
const bodyParser= require("body-parser");
const helmet = require("helmet")
const compression=require("compression")

const app= express();

// use for setting HTTP security headers
app.use(helmet())

// use for parsing request bodies 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// use for compressing HTTP respones ,increases the performances
app.use(compression());










