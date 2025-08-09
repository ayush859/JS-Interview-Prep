exports.sayHello =function (name) {
    console.log(`Hello ${name}`);
}

exports.pi = 3.34343345;
exports.obj1 =  { key:"12345"}

 

// we can do this in other way also
/*

function sayHello(name) {
    console.log(`Hello ${name}`);
}

const pi = 3.34343345;

const obj1 =  { key:"12345"}

module.exports.sayHello=sayHello;
module.exports.pi=pi;
module.exports.obj1=obj1;

*/