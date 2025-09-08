class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)  // it will take automatically to parent class and it also take current this(current reference)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher('chai','chai@teacher.com','123')
chai.addCourses()
chai.logMe()  // have access

const masalaChai = new User('masalaChai')
masalaChai.addCourses()  // no access
masalaChai.logMe()

console.log(chai === masalaChai)  // false
console.log(chai instanceof Teacher)  // true
console.log(chai instanceof User) // true