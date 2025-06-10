/*
 WITHOUT USING PROMISES / USED  NORMAL CALLBACK

    function getDataFromUser(id, callback) {
    setTimeout(() => {
        let object1 = { id: id, name: "Temp_Name" };
        callback(object1);
    }, 1000);
    }

    getDataFromUser(1245,(data) => {
    console.log(data.name);
    }); 

 */

/*     
NORMAL PROMISE USAGE 

    let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Result");
    }, 1000);
    });

    promise.then(data=> console.log(data)
    )
 
*/



// USING PROMISES FOR CALLBACK 

function greetDataFromUser(id){
    return new Promise ((resolve,reject)=>{

        let New_Object ={id:id, name:"Temp_Name_New"}
        setTimeout(()=>{
            resolve(New_Object)
        },1000)

    })
}

greetDataFromUser(2343).then((data)=> console.log(data.name)).catch((err)=> console.err(err));
 