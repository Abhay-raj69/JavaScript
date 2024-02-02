const myNumbers=[1,2,3,4,5,6,7,8,9,10]


// const myNewNums=myNumbers.map((num)=>{
//     return num+10
// })

// console.log(myNewNums);


// Chaining  using more than one method at a time

const myNewNums=myNumbers.map((nums)=>{
    return nums*10
}).map((nums)=>{
    nums+1
})

console.log(myNewNums);