// Array  


// first way of declaration
const myArr=[0,1,2,3,4,5]
// console.log(myArr[0]);

// second way of declaration
// const myHero=new Array(1,2,3,4,5,6)
// console.log(myHero[0]);


//Array methods

// myArr.push(6)
// myArr.push(7) // .push() adds an element to the end of the array
// myArr.pop()   // .pop() removes an element from the end of the array


// myArr.unshift(12)  // it adds an element to the starting of the array
// myArr.shift()  // it removes an element from the starting of the array
// myArr.shift()



// console.log(myArr.includes(7)); // this method will return a boolean value whether the given element is present or not
// console.log(myArr.indexOf(9));  // it will return the index of the element if it is present in the array else it returns -1


// const newArr=myArr.join()                    //  It adds the element of an array into a string separated by the specified separator

// console.log(myArr);
// console.log(newArr);


// slice  splice


    // Slice
console.log("A ",myArr);
const myn1=myArr.slice(1,3)               //it returns a a copy of a section of an array
// here we pass index of the array it means starting index will include but ending index will not include

console.log(myn1);
console.log("B ",myArr);


//   Splice

const myn2=myArr.splice(1,3)  // splice method manipulates the original array
// here we pass index of the array it means starting index will include and ending index include also

console.log("C ",myArr);
console.log(myn2);