// Maps store key-value pairs and remember the insertion order of the keys.
// They can have keys of any type, including objects, and can be iterated in the
// order of their insertion.
// maps only store unique keys 

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('Fr', 'France');

console.log(map)

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,':-',value);
}

// object can not be iterate through forof

const myObject = {
    js : "javascript",
    cpp: "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js" , "rb" , "py" , "java" , "cpp"]

for (const key in programming) {
    console.log(programming[key])
}

programming.forEach(function(val) {
    console.log(val)
});

programming.forEach(element => {
    console.log(element)
});

// array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    } ,
    {
        languageName: "java",
        languageFileName: "java"
    } ,
    {
        languageName: "python",
        languageFileName: "py"
    }
    
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
})