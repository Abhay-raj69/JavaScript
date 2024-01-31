// if

// const isUserLoggedIn=true

// if(isUserLoggedIn){

// }

// < , > <= ,>= ,== ,!= , === this operator checks the datatype too


const balance=1000


// if(balance>500) console.log("test"),console.log("tested again"); Don't write like this

// if (balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }


const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy courses");   
// }


// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged In");
// }


// Nullish Coalescing Operator (??) : null undefined


let val1
// val1=5 ?? 10

// val1=null ?? 10

val1=undefined ?? 15

// console.log(val1);


// Terniary Operator


// condition ? true:false

const iceTeaPrice=100

iceTeaPrice<=80 ? console.log("less than 80 "): console.log("Greater than 80");;

