const user = {
    username: "Nitesh",
    price: 1000,
    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`) // this refer to current context
    }
    // this only used for accessing object members
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


const addTwo = (num1 , num2) => {    // arrow function
    return num1+num2
}

console.log(addTwo(3,4))

const addTwo1 = (num1 , num2) => ( num1 + num2 )  // other way of declaring arrow function 
console.log(addTwo(4,4))

const addTwo2 = (num1 , num2) =>  num1 + num2   // other way of declaring arrow function 
console.log(addTwo(5,4))


const addTwo3 = (num1 , num2) =>  ({uesername: "hitesh"})   // way of return an object
console.log(addTwo3(5,5))