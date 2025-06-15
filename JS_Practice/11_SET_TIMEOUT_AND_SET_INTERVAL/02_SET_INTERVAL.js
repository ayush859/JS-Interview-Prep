/* 

    setInterval :- takes a callback function ,attach timer to it ,when the timer expires it calls the function. 

    ClearInterval :- cancels a repeated setInterval 

*/




let count =0;
let clearId = setInterval(() => {
  console.log(`Repeated ${ ++count} and printing after 3 sec`)
  if( count==5) clearInterval(clearId)
}, 3000);

/* 

    setTimeout(()=> console.log("used setTimeout"))
    setImmediate(()=> console.log("used setImmediate"))
    process.nextTick(()=> console.log("used process.nextTick "))

 */