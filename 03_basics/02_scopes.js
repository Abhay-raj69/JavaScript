


var c=100
let a=500

if (true) {
    let a=10
    // console.log("Inner ",a);
    const b=20
    c=30
}
// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username="Rohit"
    function two(){
        const website="youtube"
        console.log(username);
    }

    // console.log(website);

    // two()
}

// one()

if(true){
    const username="Ramu"
    if(username==="Ramu"){
        const website=" Leetcode"
        // console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++

console.log(addone(8)); // it will execute without any error
function addone(num){
    return num+1
}

// addTwo(5) it will not execute and give error
const addTwo=function(num){
    return num+2
}

addTwo(5)