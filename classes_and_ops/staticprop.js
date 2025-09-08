class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){     // by using static it does not allow all objects to access it
        return `123`
    }
}

const hitesh = new User(`hitesh`)
 // console.log(hitesh.createId()) // not allowed

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone.createId())  // can not access as child can't