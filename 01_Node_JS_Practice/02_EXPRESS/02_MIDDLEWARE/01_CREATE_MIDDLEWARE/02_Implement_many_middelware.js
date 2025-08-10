const express = require('express')
const app=express();

const middleware_m1 =(req,res,next)=>{

    console.log(("with Middelware M1 "));
    next();
    
}
const middleware_m2=(req,res,next)=>{

    console.log(("with Middelware M2 "));
    next();

}

app.use(middleware_m1)
app.use(middleware_m2) // only executed if above had next method ,

app.get('/',(req,res)=>{
    res.send("Final response from the server ")
})

const PORT=5000;
app.listen(PORT,()=>{
    console.log("server is running at port",PORT);
    
})