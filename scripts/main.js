'use strict'; // to prevent us from overwriting important variables

const c = 'constant'; // a constant value, assignment to c is no longer 
allowed

let v = 'variable'; // a primitive variable

let a = [1, 2, 3, false]; // an array

let o = { // an object
 'key1': 1,
 'key2': 'something'
};

console.log(c);
console.log(v);
console.log(a);
console.log(o);
console.log(o['key1']);
console.log(o.key2);