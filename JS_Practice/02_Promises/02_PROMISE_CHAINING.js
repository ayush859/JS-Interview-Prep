/* 

    PROMISE CHAINING :- it happens when we connect multiple ".then() " methods one after another

    If you pass a function call directly to .then(), .catch(), or .finally(), it runs immediately — use an arrow function like () => ... to delay execution until the Promise actually resolves or rejects.

    
*/

/* 
BASIC PROMISE CHAINING 
    function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("STEP 1 called");
        resolve(10);
        }, 1000);
    });
    }

    function step2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("STEP 2 called");
        resolve(data * 2);
        }, 2000);
    });
    }

    step1().then((data) => step2(data)).then((data) => console.log(data));
 
*/

/* 
MIXING ASYNC WITH SYNC CODE
    Promise.resolve("start")
    .then((data) => {
        return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data + " -> step 1"), 2000);
        });
    })
    .then((data) => data + " -> step 2")
    .then((final) => console.log("Final message:"+final));

 */


Promise.resolve("Hello").then((text)=> {throw new Error("something went wrong")}
).then((data)=> console.log(data)).catch((err)=>console.error(err.message)).finally(()=>console.log("we have completed learning promise chaining"))