/* 
    FIRST CLASS FUNCTION:- 1)Assign them to variables
                           2)Pass them as arguments
                           3)Return them from other functions
                           4)Store them in data structures

 */
let func_stored_in_var = () => {
  console.log("function stored in a variable");
};

let array_value = [func_stored_in_var];

//calling function which stored in Array
array_value[0]();

let object_value = { stored: func_stored_in_var };

//calling function which stored in Object
object_value.stored();




function callbacked(callback) {
  callback();
  return () => {
    console.log("we have returned a function ");
  };
}
function greet() {
  console.log("passed greet function as parameters");
}
callbacked(greet)();
