 /* two types of data types 
 
 1.primitive data types - 7 primitive data types that are predefined by the language and named as reserved keywords. These data types are fundamental to the language and are used to store simple values.
 7 types : string , number , boolean , null , undefined  , symbol , BigInt
 
 2. Reference (Non primitve)

 array , objects , functions
 */

 const id = Symbol('123')         // gives data types symbol and its value always unique
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34455677899896n // big int 

const heros = ["shaktiman" , "naagraj", "doga"] // array

let myObj={
    name:"hitesh",   // objects
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}

/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

/* stack (Primitive data types) we got copy of variables 
Heap (Non primitive) */

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);