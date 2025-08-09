/* 
    MAP :- is array method and returns a new array by applying function to each elements
        
        it takes callback functiona as arguments 

*/

let array=[100,299,334]
const updated_array=array.map((num)=> num/10)
console.log(updated_array);

let array_object =[{name:"abc"},{name:"def"},{name:"ghi"}]

const updated_array_object =array_object.map((element)=>element.name)
console.log(updated_array_object);

 
const  updated_array_object_to_UpperCase= array_object.map((ele)=>ele.name.toUpperCase())

console.log(updated_array_object_to_UpperCase);