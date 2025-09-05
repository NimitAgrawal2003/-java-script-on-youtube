const user = {          // object literal
    username:'hitesh',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`);            //this is basically a object in which we enter value
    }
}               

console.log(user.username)
console.log(user.getUserDetails());

function User(username,loginCount,isLoggedIn){
    this.username = username         // left hand side is variable and right side is passed value
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    /* this .greeting = function(){             // it can also has function in it
    console.log(`welcome ${this.username}`)
     } */                  

    return this        // through return this we have passed whole object and know anyone access all these value it is by default
}

const userOne = new User('hitesh',12,true)       // here new gives newer instance of User to userOne
const userTwo = new User("chaiAurCode",11,false)
console.log(userOne)
console.log(userTwo)