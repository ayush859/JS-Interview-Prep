const express = require ("express");

const app=express()

const Users_Router=require("./01_User_Router")
const Products_Router= require("./02_Products_router");
app.use("/users",Users_Router)
app.use("/products",Products_Router)


app.listen( PORT =5053,()=>{
    console.log("Server is running on ",PORT)
})