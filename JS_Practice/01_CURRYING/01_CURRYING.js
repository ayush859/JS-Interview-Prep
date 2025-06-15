/* 
    CURRYING :- it is a technique of breaking a function with multipe arguments into multiple functions each taking single arguments 
    F(a,b)=> F(a)(b)

    INFINITE CURRYING :- here we keep calling a function with single arguments ,and it returns function until we manually choose to stop and get the output


*/

function sum (a){
    return function (b){ return a+b;}
}

console.log(sum(2)(3));

function infinite_sum(a){
    return  function(b){
        if(b) return infinite_sum(a+b);
        return a;
    }
}

console.log(infinite_sum(2)(3)(5)(4)());
