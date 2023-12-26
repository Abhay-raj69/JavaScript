// Primitive
// 7 types : All primitives are call by value
// String ,Number ,Boolean ,null ,undefined ,Symbol ,BigInt

const score=100
const scoreValue=100.5

const isLoggedIn=false
const outsideTemp=null

let userEmail; // undefined

const id=Symbol('123')
const anotherId=Symbol('123')
// console.log(id==anotherId);
// console.log(id===anotherId);


const bigNumber=12365478963547454445884654548984545454n



// Reference Type/ Non primitive
// Array ,Objects ,Functions

//Array
const heroes=["Captain America","Thor","Iron Man","Loki"]

//Object

let myObj={
    name:"Abhay",
    age:21,
    status:"Gareeb",
}

//Function

const myFunction=function(){
    console.log("Hello Bro");
}

// ===========================================================================

// Stack(Primitives) , Heap(Non-Primitives)

let myName="Chhotu"

let anotherName=myName
anotherName="Abhay raj"

console.log(myName);
console.log(anotherName);

let userOne={
    email:"aloolelo@gmail.com",
    upi:"aloodedo@paytm"
}

let userTwo=userOne

userTwo.email="mirchilelo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);