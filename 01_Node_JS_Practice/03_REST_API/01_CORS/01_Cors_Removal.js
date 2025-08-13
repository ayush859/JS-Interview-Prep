// BEFORE EXECUTING , run => npm intall express cors

const express = require('express')
const cors = require('cors')

const app = express();

//Enable CORS middelware for all routes 
app.use(cors())

/*
 To Enable CORS for allowing requests from specific origins

app.use(
    cors({
        origin: "http://example.com"
    })
)
 */

app.get("/api/data",(req,res)=>{
    res.json({message:"Hello from the API !"})
})

app.listen(3000,()=>{
    console.log("Server is running")
})





















