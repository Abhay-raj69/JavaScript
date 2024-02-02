// const coding =["js","java","python","gcc","cpp"]


// forEach loop doesn't return any value
// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);


const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((nums)=>{
//     return nums>4
// })


const newNums=[]

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books=[
    {title:'Book One',genre:'Fiction',publish:1981,edition:2004},
    {title:'Book Two',genre:'Non-Fiction',publish:1982,edition:2003},
    {title:'Book Three',genre:'Horror',publish:1990,edition:2001},
    {title:'Book Four',genre:'Sci-Fi',publish:2001,edition:2005},
    {title:'Book Five',genre:'Scripture',publish:2006,edition:2008},
    {title:'Book Six',genre:'Science',publish:1989,edition:1999},
    {title:'Book Seven',genre:'History',publish:1979,edition:1999},
    {title:'Book Eight',genre:'Science',publish:1969,edition:1998}

];

const userBooks=books.filter((bks)=>{
    return bks.genre==='Science'
})

const afterYear=books.filter((bkss)=>{
    return bkss.publish>=2000
})

// console.log(userBooks);

console.log(afterYear);