const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));   // used for limiting number after decimal

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // gives three digit values 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // converts to string and give comas in number


// +++++++++  Maths +++++++++++

console.log(Math);
console.log(Math.abs(-4)); //converts negative value into positive value
console.log(Math.ceil(4.2))  // choose upper value
console.log(Math.round(4.6)) // mostly used
console.log(Math.floor(4.2)) //  gives lower value
console.log(Math.min(4,3,6,8)); //same for max

console.log(Math.random());  // gives random value
