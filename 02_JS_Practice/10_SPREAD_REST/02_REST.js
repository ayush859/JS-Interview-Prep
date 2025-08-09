/* 

    REST OPERATOR :- collecting/ gathering multiple individual values into single  Object/ Array
                    helps in DESTRUCTURING of object/ Arrays

                    mostly used as parameters 

*/

/*
REST OPERATOR WITH FUNCTION 

    function total_sum(...arguments){

    let final_sum= arguments.reduce((acc,curr)=> acc+curr,0)
        return final_sum;
    }

    console.log(total_sum(1,2,3,4,5,6));

 */



// DESTRUCTURING WITH OBJECTS USING REST

/*

   while destructuring in object , make sure that key_name we are extracting should have same name as outside property name  i.e, a1 should present in main object data 

   else you can write like this 
   let {a:a1,...arguments}={a:12,b:234,c:34355,d:345}; 
   
   */
    let {a:a1,...arguments1}={a:12,b:234,c:34355,d:345};
    console.log(a1);
    console.log(arguments1); 



  
//  DESTRUCTURING WITH ARRAYS USING REST

  let [a2,b,...arguments2]=["abc","def","ghi","ijk","lmn"] 

  console.log(a2);
  console.log(b);
  console.log(arguments2);
  
 