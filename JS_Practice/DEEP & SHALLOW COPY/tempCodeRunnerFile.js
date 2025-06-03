const var2 = JSON.parse(JSON.stringify(var1));
var2.name = "TEMP_NAME";
var2.detail.family_name = "NAME";


console.log("VAR 1 =>", var1);
console.log("VAR 2 =>", var2);