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

console.log(loginUserMessage());