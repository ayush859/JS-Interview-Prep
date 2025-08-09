/* 

    setTimeout :- Run a code after specific delay 

    clearTimeout :- cancels a scheduled SETTIMEOUT
    

*/

setTimeout(() => console.log("hello printed after 5 sec"), 5000);

let clearId=setTimeout(()=>console.log("I will not be printed cause of clearTimeout"),1000)
clearTimeout(clearId)  // STOPED IMMEDIATELY 