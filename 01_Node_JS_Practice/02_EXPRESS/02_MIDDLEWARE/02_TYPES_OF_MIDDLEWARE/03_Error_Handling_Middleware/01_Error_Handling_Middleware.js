// In case of Multiple middleware , error handling middleware should be defined at alst (after all the middleware ) because when an error's occurs ,Express.js will seach for the next error-handling middleware skipping any regular middleware or route handlers



const express= require("express")
const app=express();

app.use((req,res,nex)=>{
    next(new Error("An error occured"));
})

app.use((err,req,res,next)=>{
    console.log(
        "The ERROR STACK IS =>",err.stack);
    res.status(500).send("Something went wrong!")
})


const PORT = 2500;
app.listen(PORT,()=>{
    console.log("server running on",PORT)
})










