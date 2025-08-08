function addTwoNumbers(number1 , number2){
    console.log(number1 + number2);
}

addTwoNumbers(3,4)
addTwoNumbers(3,"4")
addTwoNumbers(3,"a")

const result = addTwoNumbers(3,5)
console.log("Result:",result);

function addTwoNumbers1(number1 , number2){
    let result = number1+number2
   return result
   // or return number1 + number2
}

const result1 = addTwoNumbers1(4,5)
console.log("Result:",result1)

function loginUserMessage(username){
    if(username === undefined){   // this can also be written as if(!username){ }
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())


function calculateCartPrice(...num1){ // ... means rest operator it is used when we multiple arguments is passed
    return num1                       // and we have single parameter so it club multiple arguments into array
}

console.log(calculateCartPrice(200,400,500,2000))


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([400,500,600,1000]));