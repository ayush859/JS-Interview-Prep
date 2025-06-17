/* 

    SLICE:-  doesn't modifies the original array , Returns a new array which was extracted from main
             End Index is included 

             syntax:-array_name.slice(start_Index,last_Index)
*/


let array1=[1,2,3,4,5,6,7,8]

console.log("original arr1 values ",array1);
let stored_value= array1.slice(2,3)
console.log("when we use slice our original array values is not modified",array1);
console.log(stored_value);
