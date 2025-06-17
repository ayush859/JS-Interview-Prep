//LONGEST WORD IN THE SENTENCE
/*    
    let sentence = "give me some sunshine"
    let updated_sentence=sentence.split(" ")
    console.log(updated_sentence)
    
    let highest_length=0;
    
    updated_sentence.forEach((element)=>{
        if(element.length> highest_length) highest_length=element.length;
        
    })
    
    console.log(highest_length)

*/

//IMPLICIT CONVERSION 
/*
    console.log(3+'3') //33
    console.log(3-'3') //0
    console.log("abc"+'3') //abcd
    console.log("abc"-'3') //NaN
    console.log("abc"-3) //NaN
    console.log(true+"3") // true3
    console.log(false-"3") // -3

*/


//REMOVE DUPLICATE ELEMENTS FROM ARRAYS
/*

let duplicated_val_array=[1,2,3,7,5,6,7,8]
let updated_array = new Set(duplicated_val_array)
console.log(updated_array)

let unique_Arr = duplicated_val_array.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc; 
}, []);
console.log(unique_Arr)

*/


//FLATTEN NESTED ARRAYS 
/*

let nestedArray=[1,[2,3],4,5,6,[8,9] ]
let flattened_Array= nestedArray.flat(2)
console.log(flattened_Array)
//for infinite depth
nestedArray=[1,[2,3],4,5,6,[8,9],[10,[11,12]]]
  flattened_Array= nestedArray.flat(Infinity)
  console.log(flattened_Array)

nestedArray=[1,[2,3],4,5,6,[8,9],[10,[11,12]]]
let updated_Array = nestedArray.toString().split(',').map(Number)
console.log(updated_Array)

*/


















