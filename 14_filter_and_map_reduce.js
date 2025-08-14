// filter
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums1 = myNums.filter( (num) => num>4)
console.log(newNums1)

const newNums2 = myNums.filter( (num) =>{
    return num>4  // when we start scope {} we need to write return to return the values
})
console.log(newNums1)   // same output as above it is just other method


//map 
const myNumers = [1,2,3,4,5,6,7,8,9,10]
const newNums3 = myNumers.map( (num) => num+10)   
console.log(newNums3)


// chaining
const newNums4 = myNumers
                 .map((num) => num*10)
                 .map((num) => num+1)
                 .filter( (num) => num>=40)

console.log(newNums4)

const my = [1,2,3]

const myTotal = my.reduce(function(acc , currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
},4)    
console.log(myTotal)

const myTotal2 = my.reduce( (acc,curr) => acc+curr , 0)  // same method as above
console.log(myTotal2)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price:5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const pricetopay = shoppingCart.reduce( (acc , item) => acc + item.price,0 )

console.log(pricetopay)