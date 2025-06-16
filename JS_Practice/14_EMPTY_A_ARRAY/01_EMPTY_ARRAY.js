/* 

    ways to empty a array :
                         1)make array LENGTH ZERO
                         2)Assign EMPTY ARRAY
                         3)using SPLICE method
                         4)using LOOP with POP method
*/

let array=[2,3,4,5,6,7];

let temp_array=array;

// 1st METHOD
/*
     console.log(temp_array)
     temp_array.length=0;
     console.log(temp_array)
 */

//2nd METHOD
/* 
    temp_array=array;
    console.log(temp_array)
    temp_array=[]
    console.log(temp_array)

 */

//3rd METHOD using splice
/* 
    temp_array=array;
    console.log(temp_array);
    temp_array.splice(0,temp_array.length)
    console.log(temp_array);

 */

//4th METHOD

temp_array=array;
console.log(temp_array);
while(temp_array.length>0){
    temp_array.pop()
}
console.log(temp_array);















