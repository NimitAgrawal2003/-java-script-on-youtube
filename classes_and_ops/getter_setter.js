class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email=value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}


const hitesh = new User('h@hitesh.ai','abc')
console.log(hitesh.password)

// In JavaScript, getters and setters are special methods that let you define how properties
// of an object are accessed and updated. They allow you to control access to object properties, 
// add logic when getting/setting values, or create computed properties. It used to encapsulate the method how the values are updated
// getter is used to get the value and setter is used to set value we use _ eg(this._email=value) beacuse
// both constructor and set,get are setting the value and they go in competion which cause stack overflow 
// to stop this we use _



// by using object instead of class beacuse they are almost same 