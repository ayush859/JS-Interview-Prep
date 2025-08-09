/* 

OBJECTS :-  are key values pairs ,accessed by ".key"
            if we changed at the reference of ones , the others can also see changed  values

ARRAYS:- are objects passed by reference
         can use map, filter, reduce  CALLBACK Operation 

FUNCTIONS:- they are first class Objects 
            can be passed as variables

DATE  :- used for working with dates 
         can use  getDate() , getFullYear(),etc


*/
/*  OBJECTS USAGE

    let obj1 ={name:"temp_Name",roll_N:10, address :{pin_code:123345, class_passed:[10,20,30,40]}}
    console.log(obj1.name)
    console.log(obj1.address.pin_code)
    console.log(obj2.address.class_passed[3]) 

*/
/* ARRAYS USAGE

    let arr1= [1,2,3,4,5,{name:"Temp_Not_Name",roll:19}]

    console.log(arr1[1]);
    console.log(arr1[5]);
    console.log(arr1[5].name);

 */
/* FUNCTIONS USAGE

    function func1(data){
        return (data) + " inside func1";
          }

    console.log(func1("Values are passed"));
    
 */

let date=new Date();
console.log(date.getDate()); 
console.log(date.getDay()); 
console.log(date.toDateString()); 

