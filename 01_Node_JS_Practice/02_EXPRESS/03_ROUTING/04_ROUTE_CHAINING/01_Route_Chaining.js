const express = require("express");
const app=express();

const middleware_m1= (req,res,next)=>{
    console.log("Used Middelware 1 ")
    next();
}
const middleware_m2= (req,res,next)=>{
    console.log("Used Middelware 2 ")
    next();
}
const middleware_m3= (req,res,next)=>{
    console.log("Used Middelware 3 ")
    next();
}

app.get("/route",middleware_m1,middleware_m2,middleware_m3,(req,res)=>{
    console.log("Route Handled")
    res.send("Route Chaining Performed ");
})

app.listen(3023,()=>{
    console.log("Server is running")
})








