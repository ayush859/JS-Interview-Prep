const express= require("express")
const app= express();
const router = express.Router();


const authenticate_callback=(req,res,next)=>{
    if(req.headers.authorization==="Beareer myToken"){
        next();
    }
    else{
        res.status(401).send("Unauthorized")
    }
};

router.get("/protected",authenticate_callback,(req,res)=>{
    res.send("this is a protected router")
});

app.use('/api',router);

app.listen(4021,()=>{
    console.log("server is running")
})