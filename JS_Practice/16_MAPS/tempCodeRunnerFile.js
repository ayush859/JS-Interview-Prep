let duplicated_val_array=[1,2,3,7,5,6,7,8]
let updated_array = new Set(duplicated_val_array)
console.log(updated_array)

let unique_Arr=duplicated_val_array.reduce((acc,curr)=>{
    if(!acc.includes(curr)){
        acc.push(curr)}
    
},[])
 
 console.log(unique_Arr)