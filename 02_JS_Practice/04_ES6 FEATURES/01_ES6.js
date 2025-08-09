/* 
    FEATURES OF ES6 are:- 
        1) let ,const :- LET is block scoped , cannot be redeclared in same Block Scope 
                         CONST is block scoped , cannot be redclared & reassigned  in same block scope
                                "for object / array only the referance is immutable , can mutate the contents"

        2) Arrow Functions :-  make the function declaration short

        3) Template Literals(Backtics):- allow to write variables under strings 

        4) Rest & Spread Operator :- REST converts the inputs into a array , 
                                        -> used as FUNCTION parameters 
                                        -> allowing to use ".map" , ".filter" , ".reduce" ,
                                        -> be used LAST in function Parameters
                                        -> rest syntax always produces the same data structure as the original you are destructuring — arrays produce arrays,   objects produce objects.

                                     SPREAD just expands the iteratable value into single elements   
                                        -> helps in copy / merging  arrays/ objects 

        5) Promises :- for handling Async operations 

        6) Class :- class based syntax 

        7) Destructuring :-used to extract values from arrays and objects 

        8) Default Parameters

*/

/* 
    const add = (a, b) => a + b;

    function resulter(a, b, operation) {
    return operation(a, b);
    }

    console.log(resulter(5, 6, add));

    let arr1 = [2, 3, 4, 5];
    const arr2 =arr1.map((n) => add(n, 1));
    console.log(arr2);

*/

//  let var1 =10;
//  console.log(`we have used backtics for var1 :${var1}`);

/* 
    function REST_print(...nums){
                console.log(nums);
    }

    REST_print(1,2,3,4,5)
    REST_print("PRACTICE","FOR NOW")
    REST_print(1,"char",{name:"temp_name",age:20})

    function REST_with_Named(id,...args){
        console.log(`Id is : `,id);
        console.log(`the other arguments are : `,args);
        
    }
*/

/* 
    let arr1 = [1, 2, 3, 4, 5];
    let [a, b, ...rest_arguments] = arr1;
    console.log(a);
    console.log(b);
    console.log(rest_arguments); 
*/

//SPREAD

/* 
    let obj1={id:1023, name:"temp_name",city :"Unknown"};
    let {id,...rest_argument}=obj1;  
    console.log(id);
    console.log(rest_argument);

    let obj2={...obj1,newField:"added for now"} //SHALLOW COPY 

    console.log(obj2);

    let obj3 ={...obj2,...obj1}

    //above can be done for ARRAYS


*/

/* 

let promise = new Promise ((resolve , reject)=>{
        resolve("success")
})

 */

function newF(name="default Value"){
    console.log(`Hello , ${name}`);
    
}

newF("Brother")
newF();