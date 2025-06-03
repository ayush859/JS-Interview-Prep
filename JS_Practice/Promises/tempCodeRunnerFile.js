const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error happend");
  }, 3000);
});


Promise.all([p1,p2,p3]).then(data=>console.log(data)).catch(err=>console.error(err))