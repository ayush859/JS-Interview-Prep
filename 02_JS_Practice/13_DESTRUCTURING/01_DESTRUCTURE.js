/*

    DESTRUCTURING :- it is a way of unpacking the values of Objects / Arrays


*/


// ARRAY DESTRUCTURING
/*
    //Default Values

       const [x=10,y=20]=[2]
       //the default values of x is changed to 10
       console.log(x);
       console.log(y);


    const fruits  =[10,20,30]
    const[a,b,c]=fruits;
    console.log(a)
    console.log(b)

    //Skipping values in ARRAY
        const [, e, ]=fruits;
        console.log(e)

 */


// OBJECTS DESTRUCTURING
/* 

    //Default Values
    
     const {name:StudentName="Default_values",status=true}={status:false}
     console.log(StudentName);
     console.log(status);
     


    const object_values={name:"Temp_Name",id:10322}
    const {name,id}=object_values;

    console.log(name);
    console.log(id)


    //Renaming Keys Name while Destructuring
       const{name:full_name,id:Roll_No}=object_values;   

       console.log(full_name);
       console.log(Roll_No);

   
 */











































