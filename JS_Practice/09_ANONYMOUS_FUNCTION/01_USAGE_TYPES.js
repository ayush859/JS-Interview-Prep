/* 

    ANONYMOUS FUNCTION :- a function without a name 
                         
                         these function alone give error , so either we have to 
                                                                    1)assign to varible
                                                                    2)passed as arguments
                                                                    3)IIFE
                                                                               
                         

*/

let Value_Holder = () =>
  console.log("\n Assigned  anonymous function into variable ");
Value_Holder();


// CALLBACKS or PASSED AS ARGUMENTS 
setTimeout(() => {
  console.log("\n passed anonymous function as arguments ,executed after 2s ");
}, 2000);


// IIFE
((data) => {
  console.log("\n USING IIFE ,and returned (value * 10) =>",data * 10);
   
})(1.25);
