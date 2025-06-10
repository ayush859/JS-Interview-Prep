/* 
WITHOUT USING ASYNC/ AWAIT / USING PROMISES FOR CALLBACK

    function greetDataFromUser(id){
        return new Promise ((resolve,reject)=>{

            let New_Object ={id:id, name:"Temp_Name_New"}
            setTimeout(()=>{
                resolve(New_Object)
            },1000)

        })
    }

    greetDataFromUser(2343).then((data)=> console.log(data.name)).catch((err)=> console.err(err));


*/


//USING ASYNC / AWAIT 

function greetDataFromUser(id){
    return new Promise ((resolve,reject)=>{

        let New_Object ={id:id, name:"Temp_Name_New"}
        setTimeout(()=>{
            resolve(New_Object)
        },1000)

    })
}

 async function async_func_used() {
    try{
       const data =await greetDataFromUser(34343);
        console.log(data.name);
        
   }
   catch(err){
    console.err(err);
    
   }
 }

 async_func_used();

