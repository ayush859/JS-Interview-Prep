/* 

    1)push :- to add elements in the end of array 
     
    2)pop  :- to delete elements from end of array 
    
    3)shift :- to delete elements from start of array 
    
    4)unshift :-to add elemetns in the start of array

*/


let arr=[1,2,3,4,5,6,7,8,9,10]

console.log(`${arr}
    `);
console.log(`added new element in the end`);
arr.push(100);
console.log(`${arr}
    `);
console.log(`removing  last element from the end`);
arr.pop();
console.log(`${arr}
    `); 
 
console.log(`added new element in the start`);
arr.unshift(100);
console.log(`${arr}
    `);
console.log(`removing  last element from the start`);
arr.shift();
console.log(`${arr}
    `); 






