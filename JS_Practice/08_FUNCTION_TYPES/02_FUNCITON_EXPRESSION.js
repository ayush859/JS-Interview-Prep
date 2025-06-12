/* 
    FUNCTION EXPRESSION :- when we assign a arrow / named  function to variable 
                           can't be hoisted 
    we know let, const are hoisted but not intialized at top ,as they remain in TDZ  untill JS reaches where they are assigned
*/

console.log(func1) // give error " Throws ReferenceError  if func1 declared using LET / CONST"
func1()  // gives error " Cannot access 'func1' before initialization "
var func1=()=>{return "hello"}