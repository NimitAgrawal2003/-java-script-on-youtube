// singleton
//Object.create

// object literals in this we can define key with value  

const mySym = Symbol("key1")

const JsUser = {
    name: "Nimit" ,  // key=name value=hitesh
    fullname: "Nimit Agrawal",  // "full name"   video number 16
    [mySym]: "mykey1",  // without square bracket it is using as string to use it as symbol we need [] 
    age: 21,
    location: "Jaipur",
    email:"nimit@google.com",
    isLoggedIn: false,
    lastLoginDay : ["Monday" , "Saturday" ]
}
    
console.log(JsUser.email)     //not a better way
console.log(JsUser["email"]) //  anoter way to access it " "we have put " "around email as in email we have given a string input
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) now no one can change JsUser

JsUser.greeting = function(){    // now jsuser object contains function also
    console.log("Hello JS user");
}

JsUser.greetingtwo = function(){    
    console.log('Hello JS user,${this.name}');  // to reference the object 
}


console.log(JsUser.greeting())  
console.log(JsUser.greetingtwo())  

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
 
const {courseInstructor : instructor} = course     // destructor now we only need to write instructor instead of courseInstructor 
// {  } means distructuring 
console.log(instructor);

