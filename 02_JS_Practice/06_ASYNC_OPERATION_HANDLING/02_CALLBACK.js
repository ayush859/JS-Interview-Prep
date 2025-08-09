/* 
    CALLBACK FUNCTIONS:- when function is passed as argument to another function ,
                        we used these in older async code 

    Types of Callback :
                        1) Array Method Callback => map, filter, forEach, etc.
                        2) Async Callback => wait for something,then run
                        3) Nested Callback
            
*/

/* 
// SIMPLE CALLBACK 

    function fetchData(name,callback){
            console.log("Hello"+name);
            callback();
            
    }

    function greet(){
        console.log("Good Night");
        
    }

    fetchData("Temp_Name",greet)

 */

/* 
USING ASYNC CALLBACK WITH setTimeout

    function fetchData(callback) {
    setTimeout(() => {
        callback("DATA is Recieved after 2sec ");
    }, 2000);
    }

    fetchData((data) => console.log(data));

 */

/* 
CALLBACK HELL

    setTimeout(()=>{
        console.log("STEP 1");
        setTimeout(()=>{
            console.log("STEP 2");
            setTimeout(()=>{
                console.log("STEP 3");
                
            },1000)
        },1000)
        
    },1000)

*/


// USED  NORMAL CALLBACK 

    function getDataFromUser(id, callback) {
    setTimeout(() => {
        let object1 = { id: id, name: "Temp_Name" };
        callback(object1);
    }, 1000);
    }

    getDataFromUser(1245,(data) => {
    console.log(data.name);
    }); 


 