/* 

    SPREAD OPERATOR :- spread the  Object / Array    into mutliple individual  values 

                       used as arguments most of the time 



*/
/* 
SPREAD WITH ARRAY 

    function Array_sum( a,b,c ){
            return a+b+c;
    }

    let array1 = [1,2,6]
    console.log(Array_sum (...array1))

    let array2 = [1,2,6]
    let array3=[...array1, ...array2]
    console.log(array3);

 */ 


/* 
SPREAD WITH OBJECTS 

    let object1 ={a:12,b:15,c:23}
    let object2 ={d:22,e:25,e:33}

    let object3 = {...object1,...object2}
    console.log(object3);
    
 */

function Object_sum(a,b,c){
    return a+b+c;
}

let object_sum={a:12,b:15,c:23}

console.log((Object_sum(...Object.keys(object_sum)))) // for using object values ,we have to use "Object.values" and for key we use "Object.keys"


