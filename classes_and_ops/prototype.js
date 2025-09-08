/*let myName =`hitesh     `
console.log(myName.truelength){

} */
// protoype
let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){   // add property to object(top level) so know all object(string,array,etc) can access it
    console.log(`hitesh is present in all objects`)
}

Array.prototype.heyHitesh = function(){  // assinging power to hitesh only
    console.log(`hitesh says hello`)
}

heroPower.hitesh()
myHeros.hitesh()

// inheritance
const User = {
    name: "chai",
    email: "cjai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: `JS assignment`,
    fullTime: true ,
    __proto__: TeachingSupport
}

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()