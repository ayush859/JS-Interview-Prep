/* 
  
  ASYNC AWAIT :- await is a keyword which tells JS, wait here till promise is resolved , then move forward

                async always returns a PROMISE , if normal value returned , it is warapped inside Promise

    ASYNC AWAIT better than everyone as :- 
                    1)async/await is most preferred now because:
                    2)Code looks clean and easy to follow.
                    3)Easier to debug and write than chaining .then()
                    4)Still based on Promises internally

    WORKFLOW OF ASYNC / AWAIT :-
                    1) ASYNC -> makes a function return a Promise — whether you return a value or a Promise.
                    2) AWAIT -> pauses execution — it suspends the function, lets other code ru n via the event loop, and resumes once the Promise resolves.

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

async function sayHello() {
        return "We're returning a string from an async function — it will gets wrapped in a Promise"
}

const result =sayHello();
console.log("data printed  inside promise\n",result);
// to get actual values we will use either await or .then() 
const result_with_await = await sayHello()
console.log("data printed not inside promise\n",result_with_await)



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

