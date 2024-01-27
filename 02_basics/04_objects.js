// Singleton Object
const tinderUser=new Object()


tinderUser.id="123abc"
tinderUser.name="Rohit"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Rohit",
            lastname:"Sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}
// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);

// Array Of Objects
const users=[
    {
        id:1,
        email:"lajo@gmail.com"
    },
    {
        id:2,
        email:"leja@gmail.com"
    }
]

// console.log(users[1].id);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('profit'));
