const user={
    username:"Rohit",
    price:999,


    welcomeMessage: function(){
        // this refers to current context
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username="Sharma"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username="Rohit"

    // this can be only used inside an object not inside any functiohn
//     console.log(this.username);
// }

// chai()

// Same as previous 

// const chai=function(){
//     let username="Rohit"
//     console.log(this.username);

// }

// chai()

// This is arrow function

const chai = () => {
    let username="Rohit"
    // console.log(this.username);
    console.log(this);
}

// chai()


// Explicit return

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// implicit return 

// const addTwo=(num1,num2)=> num1+num2

// const addTwo=(num1,num2)=> (num1+num2)

// returning object

const addTwo=(num1,num2)=> ({username:"Rohit"})

console.log(addTwo(10,7));


