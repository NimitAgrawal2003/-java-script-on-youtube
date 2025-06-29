// array

const myArr = [0,1,2,3,4,5]  // sigle array can include different data type 
// array java script are resize able
console.log(myArr[0])
// starting from zero index
const myHeros = ["shaktiman" , "naagraj"]
console.log(myHeros[0]);

const myArr2 = new Array(1,2,3,4) // created arry object
console.log(myArr2[1])

// array methods 

myArr.push(6) // insert new value in array at last
console.log(myArr);

//Arr.push(7) 
// console.log(myArr)

myArr.pop() // remove the last value

myArr.unshift(9)  // insert the value at beguning , shift other one position ahead
// it creates problem as shifting time consuming task
console.log(myArr)

myArr.shift() // remove the first element
console.log(myArr) 

console.log(myArr.includes(9)); // inclues return boolean either true or false
console.log(myArr.indexOf(9))   // returns integer

const newArr = myArr.join  // simply adds all the elements of an array into a string separated by the specified separator
console.log(myArr);
console.log(newArr);

//slice , splice
console.log("A " , myArr)

const myn1 = myArr.slice(1,3)  // returns copy of arr // 3 index not included
console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3) // it changes the original array as refernce is passed and last index 3 is included
console.log(myn2);
console.log("C ", myArr); 


const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

marvel_heros.push(dc_heros) //it gives array in array and it treats other array as single input
console.log(marvel_heros); 
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) // concat gives new array it does not make change in existing array
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // preferd method
console.log(allHeros);

const another_array = [1,2,3, [4,5,6] , 7 , [6,7[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh")) // asking is it array or not , it returns true or flase

console.log(Array.from("Hitesh")) // converts it into array
console.log(Array.from({name:"hitesh"})) // give empty array

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1 , score2 , score3));  //cobines differnt into single array
