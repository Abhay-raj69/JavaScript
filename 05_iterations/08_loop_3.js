const myNums=[1,2,3,4,5]

const initialValue=0

// const myTotal=myNums.reduce(function(acc,currVal){
//     return acc+currVal
// },0)

// const myTotal=myNums.reduce((acc,currVal)=>{
//     console.log(`acc:${acc} currVal:${currVal}`);
//     return acc+currVal
// },0)

// console.log(myTotal);


const shoppingCart=[
    {
        itemName:"js Course",
        price:2999
    },
    {
        itemName:"Java Course",
        price:5999
    },
    {
        itemName:"Python Course",
        price:999
    },
    {
        itemName:"C Course",
        price:1999
    },
    {
        itemName:"C++ Course",
        price:1999
    }

]

const finalPrice=shoppingCart.reduce((total,eachPrice)=>{
    return total+eachPrice.price
},0)

console.log(finalPrice);