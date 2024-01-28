function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
}
// sayMyName()

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }

// addTwoNumber(5,3)
// addTwoNumber(3,"5")
// addTwoNumber(3,"a")
// addTwoNumber(3,null)

function addTwoNumber(num1,num2){
   let result=num1+num2;
   return result;
}

const ans=addTwoNumber(5,3);
// console.log("Result is : ",ans);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter your username");
        return;
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage());
// ... this three dot is called rest operator
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,500,600));

const user={
    name:"Rohit",
    price:200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    name:"Rohit",
    price:499
})

const newArr=[500,600,400]


function secondValue(getArray){
    return getArray[1]
}

// console.log(secondValue(newArr));

console.log(secondValue([200,500,600]));