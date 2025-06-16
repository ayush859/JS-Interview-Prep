/* 
    HIGHER ORDER FUNCTION : function which takes another function as input / returns it
 */

function callbacked(callback) {
  callback();
  return ()=>{
    console.log("we have returned a function ");
    
  }
}
function greet() {
  console.log("passed greet function as parameters");
}
callbacked(greet);

let value_recieved = callbacked(greet)
value_recieved()
