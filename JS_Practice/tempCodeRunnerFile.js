
function infinite_sum(a){
    return  function(b){
        if(b) return infinite_sum(a+b);
        return a;
    }
}

console.log(infinite_sum(2)(3)(5)(4));