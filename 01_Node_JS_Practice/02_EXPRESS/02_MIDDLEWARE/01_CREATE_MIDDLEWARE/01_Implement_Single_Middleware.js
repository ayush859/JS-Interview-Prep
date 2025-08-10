const express= require ('express')

const app= express();

 const middleware_m1 = (req,res, next)=>{
    res.send("Used Middleware using express")
    //used next() to pass control to next middleware in the stack 
    next(); 
 }

 // to use this middleware Globally for all routes ,meaning it will be executed for every incoming request to app
 app.use(middleware_m1)

 const PORT=3434;
 app.listen(PORT,()=>{
    console.log("Server running at ",PORT);
    
 })

 