const express = require("express")
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("called from file name : 01_Router_Exported ")
})

module.exports =router;









