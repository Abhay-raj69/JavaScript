const coding=["js","rb","java","py","cpp"]

// coding.forEach(function(key){
//     console.log(key);
// })


// coding.forEach((val)=>{
//     console.log(val);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// forEach gets three parameters item,index,and the array
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


const myCoding=[
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"java",
        languageFileName:"java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})