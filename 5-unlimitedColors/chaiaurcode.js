//Generate a random number

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0 ; i<6 ; i++){
        color+=hex[Math.floor(Math.random() * 16)]
    }
    return color
};
let intervalId;
const startChangingColor = function(){
    if(!intervalId){   //This means the block will execute only when intervalId is null, undefined, 0, false, NaN, or an empty string
        intervalId = setInterval(changeBgColor,1000)
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null // flush out the variable to make more better code
}

document.querySelector("#start").addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)



