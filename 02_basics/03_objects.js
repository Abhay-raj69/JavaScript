// singleton
// Object.create


// Object literal
const mySym=Symbol("key1")

const jsUser={
    name:"Rohit",
    "full name":"Rohit Sharma",
    [mySym]:"myKey1",
    age:33,
    location:"Mumbai",
    email:"hitmansharma@cricket.com",
    isLoggedIn:true,
    lastLogIndays:["Thursday","Friday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email="Rohitsharma@captain.com" // this is how we can override the values
console.log(jsUser.email)

// we can freeze the value of an object so that no one can change it 
// Object.freeze(jsUser)

// jsUser["name"]="Abhay"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello Everyone");
}

jsUser.greeting2=function(){
    console.log(`Hello Buddy, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());