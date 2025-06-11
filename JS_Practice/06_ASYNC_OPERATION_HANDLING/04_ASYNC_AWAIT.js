/* 
  
  ASYNC AWAIT :- await is a keyword which tells JS, wait here till promise is resolved , then move forward

    ASYNC AWAIT better than everyone as :- 
                    1)async/await is most preferred now because:
                    2)Code looks clean and easy to follow.
                    3)Easier to debug and write than chaining .then()
                    4)Still based on Promises internally


*/

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

