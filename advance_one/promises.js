// promise = The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// promise created  
const promiseOne = new Promise(function(resolve , reject){
    // Do an async task
    // DB calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()  // using this it is connected to .then , we can also pass parameters here to resolve
    },1000)
})

// if we have create a promise we need to consume it 
promiseOne.then(function(){
    console.log("Promise consumed");
})

// other method of declaring promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai",email: "chai@example.com"})   // mostly object is passed to .then
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "hitesh", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
.then((user) => {      
    console.log(user);  // we can not print user.username in this then so we need to pass to other then
    return user.username 
})
.then((username) => {       // the value it recieve will come from upper then and it is called chaining
    console.log(username)
})
.catch(function(error){   // to catch reject
    console.log(error);   
}).finally(()=> console.log("The promise is either resolved or rejected"))  // it is used to tell what finally happend and it always execute

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else{
            reject('ERROR: JS went wrong')
        }
    },1000)
});

/* async function consumePromiseFive(){     // async is same as then but can not handle error(reject)
    const response = await promiseFive
    console.log(response)
}  */

async function consumePromiseFive(){     // know async can handle error
 try{
    const response = await promiseFive
    console.log(response)
} catch (error) {
    console.log(error)
}
}

consumePromiseFive()

async function getAllUsers(){
   try{                                 // You can use await inside it to pause execution until a Promise resolves/rejects.
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await response.json()    // to convert data into json as data is coming in the form of string it takes time so we need await it
   console.log(data);
   } catch(error){
    console.log("E:" , error);
   }
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')       // same as above 
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))



