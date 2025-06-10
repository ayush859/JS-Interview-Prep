let obj1={id:1023, name:"temp_name",city :"Unknown"};
let {id,...rest_argument}=obj1;  
console.log(id);
console.log(rest_argument);

let obj2={...obj1,newField:"added for now"}

console.log(obj2);