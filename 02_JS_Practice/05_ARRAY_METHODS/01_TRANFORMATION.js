/* 
    THREE TYPES OF INBUILT TRANSFORMATION METHODS FOR ARRAYS:

        1) Map:-used for transformation 
                 returns a new array by applying function  to each element 

                 
        2) Filter :- for filtering 
                 returns a new array with only the items that pass a conditon
                 
        3) Reduce:- to convert/recude array into single values and returns 
    


 */

let arr=[1,2,3,4,5];

const newArr= arr.map(x=> x+12);
// console.log(newArr);

let filter_value=arr.filter(n=> n>=3);
// console.log(filter_value);




let sum_value= arr.reduce((acc,curr)=> acc+curr);
// console.log(sum_value);

let colors =["red", "blue", "red", "green", "blue", "red"];

const color_count= colors.reduce( (acc,curr)=>{
    acc[curr] =(acc[curr] || 0 )+1;
    return acc;

},{}  )

// console.log(color_count);

let nestedArray= [[1,2],[3,4],[5,6,7]];

const flatt_arr=nestedArray.reduce((acc,curr)=>{
     return   acc.concat(curr);

},[])

console.log(`the flattend array is  ${flatt_arr}`);
console.log(`the sum of flattened array is : ${flatt_arr.reduce((acc,curr)=>acc+curr)}`);







