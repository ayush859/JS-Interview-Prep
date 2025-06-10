/* 
    TIMER FUNCTIONS : 
         1) setTimeout =>  it runs a function after a delay

         2) setInterval => it runs the function again and again after a certain delay 

*/

/* 
    // SIMPLE DELAY    

    setTimeout(() => {
        console.log("called after 2sec ");
        
    }, 2000);

 
// USING NAMED FUNCTION

function greet(){console.log("hello ");}
setTimeout(greet,3000)  // setInterval(greet,3000)

 

// USING CLEARTIMEOUT

    function greet(){console.log("hello ");}
    let id =setTimeout(greet,5000)    // setInterval(greet,5000)

    clearTimeout(id);          // clearInterval(id)

*/


/*
    // USING setTimeout() TO RECURSIVELY STIMULATE setInterval()
    function greet(){
        console.log("HII again! ");
        setTimeout(greet,1000)
        
}

setTimeout( greet,2000);
*/



let count =0;


let clearInterval_Id= setInterval(()=>{   

    console.log("Repeating: ",++count);
    if(count==5) clearInterval(clearInterval_Id);
    

}, 1000)