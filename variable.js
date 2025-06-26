let a = 67
console.log(a)
a="Nimit"
console.log(a) // it is correct as java script allow changing variable type later or at runtime
const accountId = 144553
// accountId = 2 // not allowed
let accountEmail = "nimitagrawal@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  // bad method for declaring varialbe
let accountState;    // gives undefined value
console.log("nimit agrawal")
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) // used to print all variables together
/* 
prefer not to use var 
because of issue in block scope and functional scope
*/
// mdn for javascript documentation