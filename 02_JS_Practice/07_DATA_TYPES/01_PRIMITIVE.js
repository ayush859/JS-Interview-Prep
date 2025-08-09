/* 

    TYPES :- 1) int   :- the type is "int"
             2) string  :-  the type is "string"
             3) boolean  :- type is "boolean"
             4) undefined :-value declared but not assigned 
                            type is "undefined"
             5) null :-     empty or intentionally not keeping value
                            type is "Object"
             6) Symbol :-   stores unique value ,used as keys for object
                            type is "symbol"   
             7) Big Int :-  stores very large number
                            return type is "bigint"


*/

let temp1="abcde"
let temp2=true;
let temp3=12;
let temp4
let temp5=null
let temp6 =Symbol("id")
let temp7= 398410n
console.log(typeof temp1);
console.log(typeof temp2);
console.log(typeof temp3);
console.log(typeof temp4);
console.log(typeof temp5);
console.log(typeof temp6);
console.log(typeof temp7);
