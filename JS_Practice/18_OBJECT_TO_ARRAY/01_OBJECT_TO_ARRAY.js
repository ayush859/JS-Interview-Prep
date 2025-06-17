/* 
  We can convert OBJECTS to ARRAYS by 3 built-in method:
                                   1)Object.keys(Object_Name) : convert the keys of objects in arrays.
                                   2)Object.values(Object_Name): convert the values of objects in arrays.
                                   3)Object.entries(Object_Name): convert the pair of keys & values of objects in arrays.

*/


let temp_object = {
    name: "temp_Name",
    roll:12,
    Subject:"English"
}


const Key_array= Object.keys(temp_object)

const Values_array = Object.values(temp_object)

const key_and_values_array = Object.entries(temp_object)


console.log(Key_array)
console.log(Values_array)
console.log(key_and_values_array)
