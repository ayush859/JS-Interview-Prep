const fs = require('fs')

fs.readFile("tempory_Text_File.txt","utf-8",(err,data)=>{
    if(err){
        return;
    }
    console.log("the file contents are :",data);
})

 
/*  
fs.readdir('./01_Node_JS_Practice', (err, files) => {
    if (err) throw err;
    console.log('Files in directory:', files);  
}); */


/* 

let data_to_insert="<=>I have written some data "
fs.writeFile("tempory_Text_File.txt",data_to_insert,"utf8",(err)=>{
    if(err) return;
})

*/



/*

 const fs = require('fs').promises; // Using the promise-based FS API

async function processFile() {
    try {
        
        let firstData = await fs.readFile("tempory_Text_File.txt", "utf-8");
        console.log("First read:", firstData);
 
        let data_to_insert = "<=>I have written some data ";
        await fs.writeFile("tempory_Text_File.txt", data_to_insert, "utf8");
 
        let secondData = await fs.readFile("tempory_Text_File.txt", "utf-8");
        console.log("Second read:", secondData);
    } 
    catch (err) {
        console.error("Error:", err);
    }
}

processFile();
 */






