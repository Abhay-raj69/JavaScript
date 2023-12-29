// Dates

let myDate=new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


// let myCreatedDate=new Date(2023,0,23)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());  // In js month starts with 0 in single digit
// console.log(myCreatedDate.toString());

// let myCreatedDate=new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());


// let myCreatedDate=new Date("2023-12-14"); // YY-MM-DD
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate=new Date("12-14-2023") // MM-DD-YY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.round(Date.now()/1000));  // conversion of mili second into second
// we have used Math.round() to avoid decimal values



let newDate=new Date()

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default'{
    weekday:"long"
})

