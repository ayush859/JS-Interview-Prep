/* 
PROMISES :- it is a special object ,which represent the  eventual result of the asynchronous operation 
            it helps us to avoid nested callback which can result in callback hell

            3 states:-  
              Pending  :- initial state
              Fulfilled :- asynchronous operation completed 
              Rejected  :- operation rejected

PROMISE METHODS :-  
                .then()  :-if promise  is resolved (success)
                .catch() :-if promise  is rejected(failure)
                .finally() :-  executed no matter promise is resolved / rejected
                Promise.all() :-waits till all promise are executed (returns immediately if any error given by promise and stops executing other promises)
                Promise.race() :- wait till the first promise is executed either resulting in success or failure 
                Promise.allsettled() :-wait till all the promises are executed but dont stop if failure encountered for any  and return all output 
                Promise.any()  :- wait till 1st promise results in success , stops executing then and  return it 

                
*/

const promise = new Promise(function (resolve, reject) {
  const string = true;

  setTimeout(() => {
    if (string) {
      resolve("i resulted in success");
    } else reject("i resulted in error");
  }, 1000);
});

promise
  .then((str) => console.log(str))
  .catch((str) => console.log(str))
  .finally(console.log("the operation has completed "));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2");
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error happend");
  }, 2000);
});


Promise.any([p1,p2,p3]).then(data=>console.log(data)).catch(err=>console.error(err))

