/* 
    SHALLOW COPY :- here only the first level of Object are copied ,but for any nested objects is passed by reference 
    
                    can be done in two ways for objects :- 
                                           assign:- Object.assign({}, Prev_object)
                                           spread operator:-  {... Prev_object}

    DEEP COPY :- here it makes the full copy of the Object also for the nested objects
                
                we use JSON.parse with JSON.stringify for this 

*/


/*
   DEEP COPY=> 

    const var1 = {
    name: "temp_name",
    detail: { first_name: "temp_", family_name: "name" },
    };



    const var2 = JSON.parse(JSON.stringify(var1));
    var2.name = "TEMP_NAME";
    var2.detail.family_name = "NAME";


    console.log("VAR 1 =>", var1);
    console.log("VAR 2 =>", var2);
 */

    //SHALLOW COPY 

    const var2 =var1;
    console.log("VAR 1 =>",var1);
    var2.name="TEMP_NAME";
    var2.detail.family_name = "NAME";
    console.log(
        `
        " without SPREAD operator ,copy result "
        `
    );

    console.log("VAR 1 =>",var1);
    console.log("VAR 2 =>",var2);
  


/*     const var2= {...var1};
 
    console.log("VAR 1 =>",var1);
    var2.name="TEMP_NAME";
    var2.detail.family_name = "NAME";
    console.log(
        `
        " with SPREAD operator ,copy result "
        `
    );

    console.log("VAR 1 =>",var1);
    console.log("VAR 2 =>",var2);

 */

/* 
    const var2= Object.assign({},var1);
    console.log("VAR 1 =>",var1);
    var2.name="TEMP_NAME";
    var2.detail.family_name = "NAME";
    console.log(
        `
        " with ASSIGN ,copy result "
        `
    );

    console.log("VAR 1 =>",var1);
    console.log("VAR 2 =>",var2);
    
    */






