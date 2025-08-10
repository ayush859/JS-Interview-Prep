const express= require('express')

const router = require('./01_Exported_Router')

const app=express();

app.use("/",router);

app.listen(3500,()=>{
    console.log("Server is running ")
})