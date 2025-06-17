/* 

    SPLICE :- Modifies the original array Returns the removed items , 
              End Index are included but in syntax you can see , no usage of this statement as "End Index" is not used
             
              syntax:- array_name.splice(startIndex, deleteCount,item_added_in_place1,item_added_in_place2,...)

*/

let array1=[1,2,3,4,5,6,7,8]

console.log("original arr1 values ",array1);
let stored_value= array1.splice(2,3)

console.log("stored the removed values",stored_value);
console.log(" updated arr1 values " ,array1,"\n");


array1=[1,2,3,4,5,6,7,8]
// UPDATING  a SINGLE place
console.log("original arr1 values ",array1);
stored_value= array1.splice(0,1,10)
console.log("updated arr1 values ",array1);
console.log("stored the removed values ",stored_value,"\n");
 



array1=[1,2,3,4,5,6,7,8]

//INSERTING VALUES in removed place
console.log("original arr1 values ",array1);
stored_value=array1.splice(3,2,"abc","def")
console.log("updated a single arr1 values ",array1);
console.log("stored the removed value ",stored_value);




























