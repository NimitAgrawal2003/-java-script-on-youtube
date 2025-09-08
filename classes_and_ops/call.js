function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log('called');
}

function createUser(username,email,password){
    SetUsername.call(this,username)  // to call SetUsername as without using .call this function  
                                    // does call that function but the passed reference is undefined 
    this.email = email
    this.password = password
}

const chai = new createUser('chai','chaiafsf.com','123')
