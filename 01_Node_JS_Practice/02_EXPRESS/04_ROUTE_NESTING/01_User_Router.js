const express = require("express")

const User_Router= express.Router();

User_Router.get("/",(req,res)=>{
    res.send("we are on USERS HOME PAGE")
})

User_Router.get("/profile",(req,res)=>{
    res.send("we are on USERS PROFILE PAGE")
})


module.exports = User_Router;






