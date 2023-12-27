const score=400
// console.log(score);

const balance=new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const otherNumber=23.8669
// console.log(otherNumber.toPrecision(2));


const hundreds=1000000

// console.log(hundreds.toLocaleString('en-IN')); // In Indian standards


// ================================Maths================================================================



// console.log(Math);

// console.log(Math.abs(-10));
// console.log(Math.round(4.5)); // it will round to the nearest value

// console.log(Math.ceil(5.3));  // it will round to the ceiling value

// console.log(Math.floor(5.9)); // it will to floor value

// console.log(Math.min(4,2,6,5,2));
// console.log(Math.max(6,3,9,8,4));

// console.log(Math.random()); // it will always give value between 0 and 1

// console.log((Math.random()*10)+1); // it will value between 1 to 10 (to avoid 0 we have added 1 )
// console.log(Math.floor(Math.random()*10)+1);


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);  // it will give random numbers between 10 to 20

